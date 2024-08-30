/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:18:31
 * @LastEditTime: 2024-08-30 10:32:41
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/features/parsing/declarativeRouting/index.ts
 */
import { ParseImpl } from "../parseImpl";

/**
 *
 * 根据路由配置生成声明式路由文件
 *
 * @public
 *
 */
export class DeclarativeRouting {

    constructor(private parse: ParseImpl) {


    }


    getRouterMap() {

        let content = ''

        this.parse.getConfig().isCli

        this.parse.getPackageRulesParseResult().map(i => {
            let path = i.path.replace(/\/([a-z]|[A-Z])/g, (match, p1) => `_${p1.toUpperCase()}`).replace(/_([a-z]|[A-Z])/g, (match, p1) => `_${p1.toUpperCase()}`);

            if (this.parse.getConfig().isCli) {
                path = path.replace(/src_/, '')
            }

            const name = `${path}${this.parse.getMeta().isMainPackage ? '_With_Main' : '_With_SubPackage'}`



            const jumpPath = this.parse.getConfig().isCli ? i.path.replace(/src\//, '') : i.path

            const value = `new SimpleRouteJump("/${jumpPath}")${this.parse.getMeta().isMainPackage ? '.setMethod("reLaunch")' : ''}`

            content += `
            \n
              '${name}': ${value},
            `
        })

        return content
    }
}
