import {PageStyle} from "../../rules/definePageConfig/page.style";
import defaultDeep from 'lodash.defaultsdeep'
import {rootDycPageConfigPathJs, rootDycPageConfigPathTs, runConfigurePathEffectivelyReturn} from "./dev";
import {defineConfigTypes} from "../../rules/defineConfig";
import {resolve, dirname} from "path";
import {writeFile} from 'fs'
import {globSync} from "glob";
import {ParseHelper, template} from "../../parsing/parse.helper";
import {getMetaTypes, ParseImpl} from "../../parsing/parseImpl";


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
            writeFile(path, template, 'utf-8', (err) => {
                if (err) {
                    console.log(err?.message)
                } else {
                    console.log('创建主包页面配置文件成功 ->', path)
                }
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
