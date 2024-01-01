import {PACKAGE_NAME} from "../../constant/package";
import {verifyPathExistsSync} from "@memo28.cmd/error";
import {resolve} from "path";

export interface defineConfigTypes {
    /**
     *
     * 定义分包规则
     *
     * 页面的定义应该有一个统一的名称 例如 ： package/index.vue 并且在index.vue 同级应该有一个对应的 dycPage.config.ts 文件 用于定义当前页面的所有信息
     *
     * @public
     */
    subPackagesRules: string[]
    /**
     *
     * 定义主包规则
     *
     * 页面的定义应该有一个统一的名称 例如 ： package/index.vue 并且在index.vue 同级应该有一个对应的 dycPage.config.ts 文件 用于定义当前页面的所有信息
     *
     * @public
     */
    mainPackageRules: string[]

    /**
     *
     *
     * 配置根 rootPages.json 的路径
     *
     * 相对路径
     *
     *
     * @public
     *
     */
    rootPagesJsonPath: string

    /**
     *
     * 是否补齐配置
     *
     * @public
     *
     */
    whetherMakeUpTheConfig?: boolean

    /**
     *
     * 文件后缀
     *
     *
     * @public
     *
     */
    whetherMakeUpTheConfigFileSuffix?: 'js' | 'ts'

    /**
     *
     * 是否开启根据配置生成 声明式路由
     *
     * 路由为生成路由的相对路径
     *
     * @public
     *
     */
    generateClaimsRoute?: string
}

export function defineConfig(opt: defineConfigTypes) {
    const subPackagesRules = verifyPathExistsSync({
        packageName: PACKAGE_NAME,
        field: 'subPackagesRules'
    }, opt.subPackagesRules)

    const mainPackageRules = verifyPathExistsSync({
        packageName: PACKAGE_NAME,
        field: 'mainPackageRules'
    }, opt.mainPackageRules)

    const rootPagesJsonPath = verifyPathExistsSync({
        packageName: PACKAGE_NAME,
        field: 'rootPagesJsonPath'
    }, [opt.rootPagesJsonPath])

    if (opt.whetherMakeUpTheConfig) {
        if (!opt.whetherMakeUpTheConfigFileSuffix?.trim()) {
            throw new Error("whetherMakeUpTheConfigFileSuffix 字段不能为空: 可选(js | ts)")
        }

        if (!['js', 'ts'].includes(opt.whetherMakeUpTheConfigFileSuffix)) {
            throw new Error('whetherMakeUpTheConfigFileSuffix 字段不合法')
        }
    }

    return {
        subPackagesRules,
        mainPackageRules,
        rootPagesJsonPath: resolve(rootPagesJsonPath[0]),
        whetherMakeUpTheConfig: opt.whetherMakeUpTheConfig,
        whetherMakeUpTheConfigFileSuffix: opt.whetherMakeUpTheConfigFileSuffix,
        generateClaimsRoute: opt.generateClaimsRoute
    }
}
