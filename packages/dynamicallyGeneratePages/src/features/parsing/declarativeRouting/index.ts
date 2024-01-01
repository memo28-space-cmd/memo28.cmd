import {ParseImpl} from "../parseImpl";

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

        this.parse.getPackageRulesParseResult().map(i => {
            const path = i.path.replace(/\/([a-z]|[A-Z])/g, (match, p1) => `_${p1.toUpperCase()}`).replace(/_([a-z]|[A-Z])/g, (match, p1) => `_${p1.toUpperCase()}`);

            const name = `${path}${this.parse.getMeta().isMainPackage ? '_With_Main' : '_With_SubPackage'}`


            const value =  `new SimpleRouteJump("/${i.path}")${this.parse.getMeta().isMainPackage ? '.setMethod("reLaunch")' : ''}`


            content += `
            \n
              '${name}': ${value},
            `
        })

        return content
    }
}
