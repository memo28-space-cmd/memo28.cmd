/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 09:37:21
 * @LastEditTime: 2023-12-22 17:14:07
 * @Description: 配置
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/index.ts
 */
import { AppPlus } from './appPlus/index'
import { eachSideGeneralConfiguration } from './common/generalConfiguration'


/**
 * 
 * 建议配置优先 而不去动mainfas文件
 * 
 * @public
 * 
 */
export interface UniConfigurationParsingOptions {
    [key: string]: any
    vueVersion?: string
    /**
     * 
     * 应用名
     * 
     * @public
     */
    name: string
    /**
     * 
     * uni appid
     * 
     * @public
     * 
     */
    appid: string,
    /**
     * 
     * 项目描述
     * 
     * @defaultValue ''
     * 
     * @public
     */
    description?: string

    /**
     * 
     * 版本名
     * 
     * @remarks
     * - 如: '1.0.0'
     * 
     * @public
     */
    versionName?: string

    /**
     * 
     * 版本号
     * 
     * 根据版本名自动转换可不用填写
     * 
     * @remarks
     * - 如: 100
     * 
     * @public
     */
    versionCode?: number


    /**
     * 
     * 是否转换成 px （弃用）
     * 
     * @deprecated
     * 
     * @public
     */
    transformPx?: boolean


    /**
     * 
     * 网络超时时间 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#networktimeout)
     * 
     * @public
     */

    networkTimeout?: {}

    /**
     * 
     * 是否开启 `debug` 模式，开启后调试信息以 `info` 的形式给出，其信息有页面的注册，页面路由，数据更新，事件触发等
     * 
     * @defaultValue false
     * 
     * @public
     */
    debug?: boolean

    /**
     * 
     * [是否开启 `uni` 统计，全局配置](https://uniapp.dcloud.net.cn/collocation/manifest.html#unistatistics)
     * 
     * 
     * @public
     */
    uniStatistics?: {
        /**
         * 
         * 是否开启 默认开启
         * 
         * @defaultValue true
         * 
         * @public
         * 
         */
        enable: boolean
    }

    /**
     * 
     * 
     * App 特有配置
     * 
     * @public
     */
    'app-plus'?: eachSideGeneralConfiguration & Partial<AppPlus>

    /**
     * 
     * 
     * h5 特有配置
     * 
     * @public
     */
    'h5'?: eachSideGeneralConfiguration

    /**
     * 
     * 快应用特有配置，即将支持
     * 
     * @public
     * 
     */
    'quickapp'?: eachSideGeneralConfiguration

    /**
     * 
     * 微信小程序特有配置
     * 
     * @public
     */
    'mp-weixin'?: eachSideGeneralConfiguration

    /**
     * 
     * 支付宝小程序特有配置
     * 
     * @public
     */
    'mp-alipay'?: eachSideGeneralConfiguration

    /**
     * 
     * 百度小程序特有配置
     * 
     * @public
     */
    'mp-baidu'?: eachSideGeneralConfiguration


    /**
     * 抖音小程序特有配置
     * 
     * @public
     */
    'mp-toutiao'?: eachSideGeneralConfiguration

    /**
 * 飞书小程序特有配置
 * 
 * @public
 */
    'mp-lark'?: eachSideGeneralConfiguration

    /**
* qq小程序特有配置
* 
* @public
*/
    'mp-qq'?: eachSideGeneralConfiguration

    /**
     * 快手小程序特有配置 
     * 
     * @public
     * 
     */
    'mp-kuaishou'?: eachSideGeneralConfiguration
}