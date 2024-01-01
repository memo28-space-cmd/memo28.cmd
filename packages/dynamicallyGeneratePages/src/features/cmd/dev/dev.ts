import {program} from 'commander';
import {resolve, dirname, parse, basename, extname} from "path";
import {verifyPathExistsSync} from "@memo28.cmd/error";
import {PACKAGE_NAME} from "../../../constant/package";
import {readFileSync, writeFile} from "fs";
import * as ts from "typescript";
import {defineConfigTypes} from "../../rules/defineConfig";
import {globSync} from "glob";
import json5 from 'json5'
import {definePageOptions} from "../../rules/definePageConfig/definePage";
import {ParsePages} from "./parsePages";
import {SubPackagesParse} from "./subPackagesParse";
import {Scheduling} from "../../parsing/scheduling";

const rootDycConfigPathTs = resolve('./dyc.config.ts')

const rootDycConfigPathJs = resolve('./dyc.config.js')

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


export  type runConfigurePathEffectivelyReturn = { path: string, pagesConfig: definePageOptions }

/**
 *
 *
 * 执行有效配置路径 同级的 dycPage.config.ts 文件
 *
 * @public
 */

function runConfigurePathEffectively(pathGroup: string[]): runConfigurePathEffectivelyReturn[] {
    return pathGroup.map(i => {
        const rootDycPageConfigPath = globSync([resolve(dirname(i), rootDycPageConfigPathTs), resolve(dirname(i), rootDycPageConfigPathJs)], {ignore: "node_modules/**"})

        const fileContent = readFileSync(rootDycPageConfigPath[0], 'utf-8')

        const fileContextTrs = ts.transpileModule(fileContent, {
            compilerOptions: {
                module: ts.ModuleKind.CommonJS
            }
        })
        const result = eval(fileContextTrs.outputText)

        function pathResolve() {
            const p = parse(i)
            return `${p.dir}/${p.name}`
        }

        return {
            path: pathResolve(),
            pagesConfig: result
        }
    })
}

function parseStyle() {
}


export function dev() {

    program
        .command('dev')
        .description("一watch方式启动观察配置文件变化")
        .option("--p <chat>", "修改配置文件路径")
        .option("--m <chat>", "定义模式。--m=dev , --m=prod")
        .action(async (str, options) => {
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
            const pagesJsonResult = await import(config.rootPagesJsonPath)


            // 有效配置路径
            const configurePathEffectivelyWithMainPackageRules = configurePathEffectively(config.mainPackageRules);
            // 有效配置路径
            const configurePathEffectivelyWithSubPackagesRules = configurePathEffectively(config.subPackagesRules);

            console.log("有效配置路径 -> mainPackageRules", configurePathEffectivelyWithMainPackageRules)

            console.log("有效配置路径 -> subPackagesRules", configurePathEffectivelyWithSubPackagesRules)

            const mainPackageRulesParseResult = runConfigurePathEffectively(configurePathEffectivelyWithMainPackageRules)

            const subPackagesRulesParseResult = runConfigurePathEffectively(configurePathEffectivelyWithSubPackagesRules)


            new Scheduling(new ParsePages(pagesJsonResult.pages, mainPackageRulesParseResult, config))

            new Scheduling(new SubPackagesParse(pagesJsonResult.subPackages, subPackagesRulesParseResult, config))


            writeFile(config.rootPagesJsonPath, JSON.stringify(pagesJsonResult, null, 2), 'utf-8', (err) => {
                if (err) console.log("更新 pages.json 失败", err.message)
                else console.log("更新 pages.json 成功")
            })
        })
}
