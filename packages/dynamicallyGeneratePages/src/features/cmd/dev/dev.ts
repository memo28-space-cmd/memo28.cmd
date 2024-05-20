/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:18:31
 * @LastEditTime: 2024-05-20 10:00:05
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/features/cmd/dev/dev.ts
 */
import {verifyPathExistsSync} from "@memo28.cmd/error";
import {program} from 'commander';
import {readFileSync, writeFile} from "fs";
import {globSync} from "glob";
import {dirname, resolve} from "path";
import * as ts from "typescript";
import {PACKAGE_NAME} from "../../../constant/package";
import {Combination} from "../../parsing/declarativeRouting/combination";
import {Scheduling} from "../../parsing/scheduling";
import {setDebugger} from "../../rules/debugger";
import {defineConfigTypes} from "../../rules/defineConfig";
import {definePageOptions} from "../../rules/definePageConfig/definePage";
import {setMode} from '../../rules/mode';
import {ParsePages} from "./parsePages";
import {SubPackagesParse} from "./subPackagesParse";
import {SubPackages} from "../../rules/subPackages";
import {pages} from "../../rules/definePageConfig/pages";

export const rootDycConfigPathTs = resolve('./dyc.config.ts')

export const rootDycConfigPathJs = resolve('./dyc.config.js')

export const rootDycPageConfigPathJs = ('./dycPage.config.js')

export const rootDycPageConfigPathTs = ('./dycPage.config.ts')


/**
 *
 *
 * 有效配置路径
 *
 * @public
 *
 */
function configurePathEffectively(pathGroup: string[]): string[] {
    return pathGroup.filter(i => {
        const rootDycPageConfigPath = globSync([resolve(dirname(i), rootDycPageConfigPathTs), resolve(dirname(i), rootDycPageConfigPathJs)], {ignore: "node_modules/**"})
        return rootDycPageConfigPath.length
    })
}


export type runConfigurePathEffectivelyReturn = { path: string, pagesConfig: definePageOptions }


function parseStyle() {
}


export function dev() {

    program
        .command('dev')
        .description("一watch方式启动观察配置文件变化")
        .option("--p <chat>", "修改配置文件路径")
        .option("--d ", "开启调试模式")
        .option("--m <chat>", "定义模式。--m=dev , --m=prod")
        .action(async (str, options) => {
            if (str?.D) setDebugger(true)
            if (str.m) setMode(str.m)
            let path = str.p ? resolve(str.p) : rootDycConfigPathTs
            const result = verifyPathExistsSync({
                packageName: PACKAGE_NAME,
                field: "rootPath"
            }, [path, rootDycConfigPathJs])
            console.log("发现配置文件 -> ", result[0])
            const fileContext = readFileSync(result[0], 'utf-8')
            const fileContextTrs = ts.transpileModule(fileContext, {
                compilerOptions: {
                    module: ts.ModuleKind.CommonJS
                }
            })
            const config = eval(fileContextTrs.outputText) as defineConfigTypes


            // 读取 page.json 文件 json 文件内不应该有注释
            const pagesJsonResult = (await import(config.rootPagesJsonPath)).default

            if (!Reflect.has(pagesJsonResult, 'subPackages')) {
                Reflect.set(pagesJsonResult, 'subPackages', [])
            }


            // 如果主包配置中存在文件夹结构不存在的页面 则更新manifest配置
            pagesJsonResult.pages = pagesJsonResult.pages.filter((item: pages) => {
                const p = `${item.path}.vue`
                return config.mainPackageRules.includes(p)
            })

            // 处理主包逻辑
            const mainScheduling = new Scheduling(new ParsePages(pagesJsonResult.pages, config))
                .identifyValidRoutes(() =>
                    configurePathEffectively(config.mainPackageRules)
                ).triggerParsePagesJson()

            /**
             * 当manifest分包中存在文件夹结构并不存在的页面时 会同步删除manifest中的分包配置
             */
            pagesJsonResult.subPackages = pagesJsonResult.subPackages.map((item: SubPackages) => {
                const pages = item.pages.filter(i => {
                    const path = `${item.root}/${i.path}.vue`
                    return config.subPackagesRules.includes(path)
                })
                return {
                    ...item,
                    pages
                }
            })

            // 处理分包逻辑
            const subScheduling = new Scheduling(new SubPackagesParse(pagesJsonResult.subPackages || [], config))
                .identifyValidRoutes(() => configurePathEffectively(config.subPackagesRules)).triggerParsePagesJson()

            // 自动生成路由文件
            new Combination([mainScheduling.declarativeRouting(), subScheduling.declarativeRouting()], config.generateClaimsRoute).generate()

            writeFile(config.rootPagesJsonPath, JSON.stringify(pagesJsonResult, null, 2), 'utf-8', (err) => {
                if (err) console.log("更新 pages.json 失败", err.message)
                else console.log("更新 pages.json 成功")
            })
        })
}
