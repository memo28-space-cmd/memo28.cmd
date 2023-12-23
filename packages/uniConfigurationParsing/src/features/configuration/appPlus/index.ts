/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 13:01:16
 * @LastEditTime: 2023-12-23 14:13:28
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/appPlus/index.ts
 */
import { amap, baiduMap, geolocation, googleMap } from '../app/distribute'
import { faceBookOAuth, googleOAuth, qqOAuth, sinaOAuth, wxOAuth } from '../app/distribute/oauth'
import { aliPay, googlePay, paypalPay, stripePay, wxPay } from '../app/distribute/pay'
import { qqShare, sinaShare, wxShare } from '../app/distribute/share'
import { AndroidDistribute } from './android.distribute'
import { IosDistribute } from './ios.distribute'

/**
 * 
 * 
 * @see https://uniapp.dcloud.net.cn/collocation/manifest.html#app-plus
 * 
 * @public
 * 
 */
export interface AppPlus {
    /**
     * 
     * App 启动界面信息
     * 
     * @public
     */
    splashscreen: {}

    /**
     * 
     * 重力感应、横竖屏配置
     * 
     * 
     * 可取值："portrait-primary"：竖屏正方向；"portrait-secondary"：竖屏反方向；"landscape-primary"：横屏正方向；"landscape-secondary"：横屏反方向。
     * 
     * 
     * @public
     */
    screenOrientation: ('portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary')[]
    /**
     * 
     * 模块配置
     * 
     * 模块选择是为了控制App的包体积，不需要的模块可以在打包时剔除。
     * 
     * @see https://uniapp.dcloud.net.cn/collocation/manifest.html#modules
     * 
     * @public
     */
    modules: Partial<{
        Bluetooth: {},
        Contacts: {},
        Fingerprint: {},
        iBeacon: {},
        LivePusher: {},
        Maps: {},
        Messaging: {},
        OAuth: {},
        Payment: {},
        Push: {},
        Share: {},
        Speech: {},
        SQLite: {},
        Statistic: {},
        VideoPlayer: {},
        Geolocation: {},
        Record: {},
        SecureNetwork: {},
        UIWebview: {},
        "Webview-x5": {}
    }>

    /**
     * 
     * App 发布信息
     * 
     * @public
     */
    distribute: Partial<{
        android: Partial<AndroidDistribute>,
        ios: IosDistribute,
        sdkConfigs: Partial<{
            geolocation: Partial<geolocation>
            maps: { baidu: Omit<baiduMap, '__platform__'> } |
            { amap: Omit<amap, '__platform__'> } | {
                google: googleMap
            }
            oauth: Partial<{
                univerify: {},
                apple: {},
                weixin: Partial<wxOAuth>,
                qq: Partial<qqOAuth>,
                sina: Partial<sinaOAuth>
                google: Partial<googleOAuth>,
                facebook: Partial<faceBookOAuth>
            }>
            payment: Partial<{
                alipay: aliPay
                weixin: wxPay
                paypal: paypalPay
                stripe: stripePay
                google: googlePay
                appleiap: {}
            }>
            share: Partial<{
                weixin: wxShare,
                sina: sinaShare,
                qq: qqShare
            }>
        }>,
        orientation: {}
    }>
    nvueCompiler: string
    nvueStyleCompiler: string
    renderer: string
    nvueLaunchMode: string
    nvue: {}
    optimization: {}
    runmode: string
    uniStatistics: {}
    webView: {}
}