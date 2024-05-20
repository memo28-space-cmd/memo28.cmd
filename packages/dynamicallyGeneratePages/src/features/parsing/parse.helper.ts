import { writeFile } from "fs";
import { globSync } from "glob";
import defaultDeep from "lodash.defaultsdeep";
import { dirname, resolve } from "path";
import { rootDycPageConfigPathJs, rootDycPageConfigPathTs, runConfigurePathEffectivelyReturn } from "../cmd/dev/dev";
import { defineConfigTypes } from "../rules/defineConfig";
import { PageStyle } from "../rules/definePageConfig/page.style";
import { pages } from "../rules/definePageConfig/pages";
import { SubPackages } from "../rules/subPackages";


export const template = `
        import {definePageConfig} from '@memo28.cmd/dynamically-generate-pages'

        export default definePageConfig({
            pages: {

            }
        })
        `

export type updatePageCallback = (curPage: pages, style: Partial<PageStyle>) => void

export type verifyWhetherMakeUpTheConfigSubPageCallback = (path: string, template: string) => void

export class ParseHelper {

    /**
     *
     * 循环 mainPages 配置 与 已有 pages 配置进行对比 当 pages缺少时 触发回调
     *
     *
     * @public
     */
    increasePages(dycConfigPages: runConfigurePathEffectivelyReturn[], pages: pages[], callback: (item: runConfigurePathEffectivelyReturn) => void) {
        dycConfigPages.forEach(i => {
            const hasRoute = pages.find(p => p.path === i.path)
            if (!hasRoute) {
                callback(i);
            }
        })
        return this
    }

    /**
     *
     * 循环 subPackage 配置 与 pages.json 中 subpackage 少时 触发回调
     *
     *
     * TODO：这里如果分包配置过多会存在循环性能问题 考虑使用算法优化一下
     *
     * @public
     */
    increaseSubPages(dycConfigPages: runConfigurePathEffectivelyReturn[], subPackages: SubPackages[], callback: (item: runConfigurePathEffectivelyReturn, root?: string) => void) {
        dycConfigPages.forEach(i => {
            let findPage = false
            this.loopSubPage(subPackages, (curPage, path) => {
                // 是否找到相关页面 如果没有找到的话 触发回调
                // pages.subpackage 与 subPackages配置 路径对比 存在直接退出
                if (findPage) return
                findPage = path === i.path;
                // pages.subpackage 与 subPackages配置 路径对比 不存在
            })


            if (findPage) return
            // 判断分包组是否存在  是否只是在分包组上添加
            let justAdd = false
            let justAddRoot = ''
            this.loopSubPage(subPackages, (curPage, path, root) => {
                if (justAdd) return
                if (i.path.includes(root)) {
                    justAdd = true
                    justAddRoot = root
                }
            })
            
            if (justAdd) {
                callback(i, justAddRoot)
                return
            }
            // 如果分包组不存在 则走新建分包组逻辑
            callback(i)
        })
        return this
    }

    updatePages(dycConfigPages: runConfigurePathEffectivelyReturn[], pages: pages[], callback: updatePageCallback) {
        for (let i = 0; i < pages.length; i++) {
            const curPage = pages[i]
            const findConfig = dycConfigPages.find(p => p.path === curPage.path)
            if (!findConfig) continue
            callback(curPage, defaultDeep({}, curPage.style, findConfig?.pagesConfig?.pages?.style));
        }
        return this
    }

    private loopSubPage(subPackages: SubPackages[], callback: (curPage: pages, path: string, root: string) => void) {
        for (let i = 0; i < subPackages.length; i++) {
            const curPage = subPackages[i]
            for (let j = 0; j < curPage.pages.length; j++) {
                const curSubPage = curPage.pages[j]
                const path = `${curPage.root}/${curSubPage.path}`
                callback(curSubPage, path, curPage.root)
            }
        }
        return this
    }


    /**
     *
     *
     * 更新 subPages  单个 page  配置
     *
     *
     * @public
     */
    updatePagesSubPage(dycConfigSubPages: runConfigurePathEffectivelyReturn[], subPackages: SubPackages[], callback: updatePageCallback) {
        return this.loopSubPage(subPackages, (curPage, path) => {
            const findConfig = dycConfigSubPages.find(p => p.path === path)
            if (!findConfig) return
            callback(curPage, defaultDeep({}, curPage.style, findConfig?.pagesConfig?.pages?.style))
        })
    }

    verifyWhetherMakeUpTheConfigSubPage(subPages: SubPackages[], userConfig: defineConfigTypes, callback: verifyWhetherMakeUpTheConfigSubPageCallback): this {
        if (!userConfig.whetherMakeUpTheConfig) return this
        return this.loopSubPage(subPages, (curPage, path) => {
            const resolvePath = resolve(dirname(resolve(path)), userConfig.whetherMakeUpTheConfigFileSuffix === 'ts' ? rootDycPageConfigPathTs : rootDycPageConfigPathJs)
            const filePath = globSync(resolvePath, { ignore: 'node_modules/**' })
            if (filePath[0]) return
            callback(resolvePath, template)
        })
    }

    verifyWhetherMakeUpTheConfigPage(pages: pages[], userConfig: defineConfigTypes, callback: verifyWhetherMakeUpTheConfigSubPageCallback) {
        if (!userConfig.whetherMakeUpTheConfig) return this
        for (let i = 0; i < pages?.length; i++) {
            const pageCur = pages[i]
            const path = resolve(dirname(resolve(pageCur.path)), userConfig.whetherMakeUpTheConfigFileSuffix === 'ts' ? rootDycPageConfigPathTs : rootDycPageConfigPathJs)
            const filePath = globSync(path, { ignore: 'node_modules/**' })
            if (filePath[0]) continue
            callback(path, template)
        }
        return this

    }
}
