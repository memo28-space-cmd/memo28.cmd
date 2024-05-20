import { readFileSync } from 'fs';
import { globSync } from 'glob';
import { dirname, parse, resolve } from "path";
import * as ts from 'typescript';
import { rootDycPageConfigPathJs, rootDycPageConfigPathTs } from "../cmd/dev/dev";
import { definePageOptions } from "../rules/definePageConfig/definePage";
import { DeclarativeRouting } from "./declarativeRouting";
import { ParseImpl } from "./parseImpl";


export type runConfigurePathEffectivelyReturn = { path: string, pagesConfig: definePageOptions }

/**
 *
 *
 * 执行有效配置路径 同级的 dycPage.config.ts 文件
 *
 * @public
 */

function runConfigurePathEffectively(pathGroup: string[]): runConfigurePathEffectivelyReturn[] {
    return pathGroup.map(i => {
        const rootDycPageConfigPath = globSync([resolve(dirname(i), rootDycPageConfigPathTs), resolve(dirname(i), rootDycPageConfigPathJs)], { ignore: "node_modules/**" })

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

export class Scheduling {

    /**
     * 
     * 验证有效路由的路径
     * 
     * @public
     * 
     */
    private identifyValidRoutesList: string[] = []

    private identifyValidRoutesListCb: () => string[] = () => []

    private packageRulesParseResult: runConfigurePathEffectivelyReturn[] = []

    constructor(private parse: ParseImpl) {

    }


    /**
     *
     * 识别有效路由
     *
     * @public
     *
     */
    identifyValidRoutes(fn: () => string[]) {
        this.identifyValidRoutesListCb = fn
        this.identifyValidRoutesList = fn()
        this.runConfigurePathEffectively()

        return this
    }


    /**
     * 执行有效路径的配置文件
     */

    private runConfigurePathEffectively() {
        this.packageRulesParseResult = runConfigurePathEffectively(this.identifyValidRoutesList)
        return this
    }


    /**
     *
     * 触发解析 pages.json 逻辑
     *
     * @public
     */
    triggerParsePagesJson() {
        this.parse.setPackageRulesParseResult(this.packageRulesParseResult)
            .verifyWhetherMakeUpTheConfigHandler()
            .increasePagesHandler()
            .updatePagesHandler()
            .generateConfigurationSorting()


        return this
    }


    /**
     *
     * 生成声明式路由
     *
     * @public
     *
     */
    declarativeRouting() {
        if (!this.parse.getConfig().generateClaimsRoute?.trim().length) {
            return ''
        }
        this.identifyValidRoutes(this.identifyValidRoutesListCb)
        this.parse.setPackageRulesParseResult(this.packageRulesParseResult)

        return new DeclarativeRouting(this.parse).getRouterMap()
    }

}
