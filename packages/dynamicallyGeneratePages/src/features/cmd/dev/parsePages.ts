import {PageStyle} from "../../rules/definePageConfig/page.style";
import defaultDeep from 'lodash.defaultsdeep'
import {rootDycPageConfigPathJs, rootDycPageConfigPathTs, runConfigurePathEffectivelyReturn} from "./dev";
import {defineConfigTypes} from "../../rules/defineConfig";
import {resolve, dirname} from "path";
import {writeFile, readFile} from 'fs'
import {globSync} from "glob";

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
export class ParsePages {
    constructor(private pages: {
        path: string,
        style?: Partial<PageStyle>
    }[], private dycConfigPages: runConfigurePathEffectivelyReturn[], private userConfig: defineConfigTypes) {
    }


    update() {
        for (let i = 0; i < this.pages.length; i++) {
            const curPage = this.pages[i]
            const findConfig = this.dycConfigPages.find(p => p.path === curPage.path)
            if (!findConfig) continue
            curPage.style = defaultDeep({}, curPage.style, findConfig?.pagesConfig?.pages?.style)
        }
        return this
    }


    increase() {
        this.dycConfigPages.forEach(i => {
            const hasRoute = this.pages.find(p => p.path === i.path)
            if (!hasRoute) {
                this.pages.push({
                    path: i.path,
                    style: i.pagesConfig.pages.style
                })
            }
        })
        return this
    }

    verifyWhetherMakeUpTheConfig() {
        if (!this.userConfig.whetherMakeUpTheConfig) {
            return this
        }

        const template = `
        import {definePageConfig} from '@memo28.cmd/dynamically-generate-pages'

        export default definePageConfig({
            pages: {

            }
        })
        `
        for (let i = 0; i < this.pages.length; i++) {
            const pageCur = this.pages[i]
            const path = resolve(dirname(resolve(pageCur.path)), this.userConfig.whetherMakeUpTheConfigFileSuffix === 'ts' ? rootDycPageConfigPathTs : rootDycPageConfigPathJs)
            const filePath = globSync(path, {ignore: 'node_modules/**'})
            if (filePath[0]) continue

            writeFile(path, template, 'utf-8', (err) => {
                if (err) {
                    console.log(err?.message)
                } else {
                    console.log('创建文件成功 ->', path)
                }
            })
        }
        return this
    }


}
