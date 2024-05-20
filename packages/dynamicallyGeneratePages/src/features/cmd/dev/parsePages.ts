/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:18:31
 * @LastEditTime: 2024-05-19 21:04:27
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/features/cmd/dev/parsePages.ts
 */
import { writeFile, writeFileSync } from 'fs';
import { ParseHelper } from "../../parsing/parse.helper";
import { getMetaTypes, ParseImpl } from "../../parsing/parseImpl";
import { getDebugger } from '../../rules/debugger';
import { defineConfigTypes } from "../../rules/defineConfig";
import { PageStyle } from "../../rules/definePageConfig/page.style";
import { runConfigurePathEffectivelyReturn } from "./dev";


/**
 *
 * 解析 pages 策略
 *
 * - (反增) 再现有项目下 dycPage.config.ts 配置文件 少于 pages.json 中定义的 pages 配置
 *   循环 pages.json 路径 并且根据配置 {@link defineConfigTypes.whetherMakeUpTheConfig} 是否帮助用户补齐 dycPage.config.ts 配置文件
 *
 * - (增) 在 dycPage.config.ts 配置文件数量大于 pages.json 中 pages 数量时
 * 更多的是新增操作
 *
 * - (改) 循环到 path 相同的文件时合并 style 配置 循环 现有的page.json 中的路由配置
 *
 * - (删) 暂不提供删除操作
 *
 * @public
 *
 */
export class ParsePages extends ParseHelper implements ParseImpl {

    private dycConfigPages: runConfigurePathEffectivelyReturn[] = []

    constructor(private pages: {
        path: string,
        style?: Partial<PageStyle>
    }[], private userConfig: defineConfigTypes) {
        super()
    }

    getConfig(): defineConfigTypes {
        return this.userConfig
    }

    setPackageRulesParseResult(list: runConfigurePathEffectivelyReturn[]): this {
        this.dycConfigPages = list

        if (getDebugger()) {
            console.log(`解析出manifest的结果 ==>`, list)
        }
        return this;
    }

    getPackageRulesParseResult(): runConfigurePathEffectivelyReturn[] {
        return this.dycConfigPages
    }

    updatePagesHandler() {
        return this.updatePages(this.getPackageRulesParseResult(), this.pages, (curPage, style) => {
            curPage.style = style
        })
    }


    increasePagesHandler() {
        return this.increasePages(this.getPackageRulesParseResult(), this.pages, (item) => {
            this.pages.push({
                path: item.path,
                style: item.pagesConfig.pages.style
            })
        })
    }

    verifyWhetherMakeUpTheConfigHandler() {
        return this.verifyWhetherMakeUpTheConfigPage(this.pages, this.userConfig, (path, template) => {
            writeFileSync(path, template, {
                encoding: 'utf-8',
            })
        })
    }

    generateConfigurationSorting(): this {
        this.pages.sort((a, b) => {
            return (b.style?.orderIndex || 0) - (a.style?.orderIndex || 0)
        })
        return this
    }

    getMeta(): getMetaTypes {
        return {
            isMainPackage: true,
            isSubPackage: false
        };
    }
}
