import {runConfigurePathEffectivelyReturn} from "./scheduling";
import {defineConfigTypes} from "../rules/defineConfig";

export interface getMetaTypes {

    isSubPackage: boolean


    isMainPackage: boolean

}

/**
 *
 * 解析实现
 *
 * @public
 *
 */
export abstract class ParseImpl {

    /**
     *
     * 判断 WhetherMakeUpTheConfig 参数 补齐 dycPage.config.ts  文件
     *
     * @public
     *
     */
    abstract verifyWhetherMakeUpTheConfigHandler(): this

    /**
     *
     * 更新
     *
     * @public
     */
    abstract updatePagesHandler(): this


    /**
     *
     *
     * 新增页面 pages 配置
     *
     * @public
     *
     */
    abstract increasePagesHandler(): this

    /**
     *
     * 返回解析后的配置列表
     *
     * @public
     */
    abstract getPackageRulesParseResult(): runConfigurePathEffectivelyReturn[]


    /**
     *
     * 获得解析后的配置列表
     *
     * @public
     */
    abstract setPackageRulesParseResult(list: runConfigurePathEffectivelyReturn[]): this

    /**
     *
     * 生成页面配置在 pages.json 中的排序效果
     *
     * 因：主包中索引为0的页面为主页面，其余为子页面
     *
     * @public
     */
    abstract generateConfigurationSorting(): this


    /**
     *
     *
     * 获取用户定义的项目配置
     *
     * @public
     */
    abstract getConfig(): defineConfigTypes


    abstract getMeta(): getMetaTypes

}
