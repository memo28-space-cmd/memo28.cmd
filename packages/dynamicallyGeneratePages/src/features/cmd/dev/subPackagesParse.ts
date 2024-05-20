/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:18:31
 * @LastEditTime: 2024-05-20 09:58:35
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/features/cmd/dev/subPackagesParse.ts
 */
import {writeFile, writeFileSync} from "fs";
import {ParseHelper} from "../../parsing/parse.helper";
import {getMetaTypes, ParseImpl} from "../../parsing/parseImpl";
import {defineConfigTypes} from "../../rules/defineConfig";
import {SubPackages} from "../../rules/subPackages";
import {runConfigurePathEffectivelyReturn} from "./dev";

/**
 *
 *
 * @remarks
 * 策略参考
 * {@link ParsePages}
 *
 * @public
 *
 */
export class SubPackagesParse extends ParseHelper implements ParseImpl {

    private subPackagesRulesParseResult: runConfigurePathEffectivelyReturn[] = []

    constructor(private subPackages: SubPackages[], private userConfig: defineConfigTypes) {
        super()
    }


    getConfig(): defineConfigTypes {
        return this.userConfig;
    }

    setPackageRulesParseResult(list: runConfigurePathEffectivelyReturn[]): this {
        this.subPackagesRulesParseResult = list
        return this;
    }

    getPackageRulesParseResult(): runConfigurePathEffectivelyReturn[] {
        return this.subPackagesRulesParseResult;
    }

    increasePagesHandler() {
        return this.increaseSubPages(this.getPackageRulesParseResult(), this.subPackages, (item: runConfigurePathEffectivelyReturn, root) => {
            if (root) {
                for (let i = 0; i < this.subPackages.length; i++) {
                    const rootLayout = this.subPackages[i]
                    if (rootLayout.root !== root) {
                        continue
                    }
                    rootLayout.pages.push({
                        path: item.path.replace(`${rootLayout.root}/`, ''),
                        style: item.pagesConfig.pages.style
                    })
                }
            } else {
                // 新建分包组
                const root = item.path.split('/')[0]
                const rootLayout: SubPackages[] = this.subPackages
                const rootLayoutConfig: SubPackages = {
                    root: '',
                    pages: []
                }
                rootLayoutConfig.root = root
                const path = item.path.split('/').splice(1).join('/')
                rootLayoutConfig.pages.push({
                    path: path,
                    style: item.pagesConfig.pages.style
                })
                rootLayout.push(rootLayoutConfig)
            }
        })
    }

    verifyWhetherMakeUpTheConfigHandler() {
        return this.verifyWhetherMakeUpTheConfigSubPage(this.subPackages, this.userConfig, (path, template) => {
            writeFileSync(path, template, {encoding: 'utf-8'})
        })
    }

    updatePagesHandler() {
        return this.updatePagesSubPage(this.getPackageRulesParseResult(), this.subPackages, (curPage, style) => {
            curPage.style = style
        })
    }

    generateConfigurationSorting(): this {
        return this;
    }


    getMeta(): getMetaTypes {
        return {
            isSubPackage: true,
            isMainPackage: false
        };
    }


}
