import {SubPackages} from "../../rules/subPackages";
import {runConfigurePathEffectivelyReturn} from "./dev";
import {defineConfigTypes} from "../../rules/defineConfig";
import {getMetaTypes, ParseImpl} from "../../parsing/parseImpl";
import {ParseHelper} from "../../parsing/parse.helper";
import {writeFile} from "fs";

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
            }
        })
    }

    verifyWhetherMakeUpTheConfigHandler() {
        return this.verifyWhetherMakeUpTheConfigSubPage(this.subPackages, this.userConfig, (path, template) => {
            writeFile(path, template, 'utf-8', (err) => {
                if (err) console.log(err?.message)
                else console.log('创建分包页面配置文件成功 ->', path)
            })
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
