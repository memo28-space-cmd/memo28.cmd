/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 13:19:24
 * @LastEditTime: 2023-12-21 13:25:41
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/appPlus/ios.distribute.ts
 */

export interface IosDistribute {
    /**
     * iOS平台云端打包使用的Bundle ID
     * 
     * @public
     * 
     */
    appid: string
    /**
     * 
     * iOS平台云端打包使用的profile文件路径
     * 
     * @public
     * 
     */
    mobileprovision: string
    /**
     * 
     * iOS平台云端打包使用的证书文件路径
     * 
     * @public
     * 
     */
    p12: string
    /**
     * iOS打包使用的证书密码
     * 
     * @public
     */
    password: string
    /**
     * 
     * iOS支持的设备类型，可取值iphone（仅支持iPhone设备）、ipad（仅支持iPad设备）、universal（同时支持iPhone和iPad设备）
     * 
     * @public
     * 
     */
    devices: string
    /**
     * 
     * 应用访问白名单列表，多个白名单使用“,”分割，详情参考：[iOS设置应用访问白名单](https://uniapp.dcloud.io/tutorial/app-ios-schemewhitelist)
     * 
     * @public
     * 
     */
    urlschemewhitelist: string

    /**
     * 
     * Android平台App注册的scheme，多个scheme使用“,”分割，详情参考：[iOS设置应用UrlSchemes](https://uniapp.dcloud.io/tutorial/app-ios-schemes)
     * 
     * @public
     * 
     */
    urltypes: string
    /**
     * 
     * 应用后台运行模式，详情参考：[iOS设置应用后台运行能力](https://uniapp.dcloud.io/tutorial/app-ios-uibackgroundmodes)
     * 
     * @public
     * 
     */
    UIBackgroundModes: []
    /**
     * 
     * 依赖的系统库，已废弃，推荐使用uni原生插件扩展使用系统依赖库
     * 
     * @deprecated
     * 
     * @public
     */
    frameworks: []
    /**
     * 
     * iOS支持的最低版本
     * 
     * @public
     * 
     */
    deploymentTarget: string
    /**
     * 
     * iOS隐私信息访问的许可描述
     * @public
     * 
     */
    privacyDescription: {}
    /**
     * 
     * 是否使用广告标识
     * 
     * 
     * @public
     * 
     */
    idfa: boolean
    /**
     * 
     * 应用的能力配置（Capabilities）
     * 
     * @public
     * 
     */
    capabilities: {}
    /**
     * 
     * 应用的CFBundleName名称，默认值为HBuilder
     * 
     * @public
     */
    CFBundleName: string
    /**
     * 
     * 编译时支持的CPU指令，可取值arm64、arm64e、armv7、armv7s、x86_64
     * 
     * @public
     */
    validArchitectures: string[]
    /**
     * 
     * 使用“Push(消息推送)”模块时申请系统推送权限模式，设置为manual表示调用push相关API时申请，设置为其它值表示应用启动时自动申请
     * 
     * @public
     */
    pushRegisterMode: string

    /**
     * 
     * 设置为manual表示同意隐私政策后再获取相关隐私信息，设置为其它值表示应用启动时自动获取 [详见](https://uniapp.dcloud.net.cn/collocation/manifest#privacyRegisterMode)
     * 
     * @public
     */
    privacyRegisterMode: string
}
