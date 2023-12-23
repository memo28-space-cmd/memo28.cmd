/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 13:07:24
 * @LastEditTime: 2023-12-23 14:03:22
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/appPlus/android.distribute.ts
 */

/**
 * 
 * App-Android平台云端打包相关配置 
 * 
 * @see https://uniapp.dcloud.net.cn/collocation/manifest-app.html#android
 * 
 * @public
 */
export interface AndroidDistribute {
    /**
     * 
     * Android平台云端打包的包名
     * @public
     */
    packagename: string
    /**
 * 
 * Android平台云端打包使用的签名证书文件路径
 * @public
 */
    keystore: string
    /**
   * 
   * Android平台云端打包使用的签名证书的密码，要求证书存储密码和证书密码相同
   * @public
   */
    password: string
    /**
* 
* Android平台云端打包使用的证书别名
* @public
*/
    aliasname: string
    /**
     * 
     * Android平台App注册的scheme，多个scheme使用“,”分割，详情参考：[Android平台设置UrlSchemes](https://uniapp.dcloud.net.cn/tutorial/app-android-schemes)
     * 
     * @public
     */
    schemes: string
    /**
     * 
     * Android平台App支持的cpu类型，详情参考：[Android平台设置CPU类型](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html)
     * 
     * @public
     * 
     */
    abiFilters: ("arm64-v8a" | "armeabi-v7a" | "x86")[]
    /**
     * Android平台App使用的权限
     * 
     * @public
     */
    permissions: string[]
    /**
     * 
     * 是否自定义Android权限配置
     * 
     * @public
     */
    custompermissions: boolean

    /**
     * 
     * 
     * Android平台应用启动时申请读写手机存储权限策略配置，详情参考：[Android平台应用启动时读写手机存储权限策略，支持request、prompt属性](https://ask.dcloud.net.cn/article/36549)
     * 
     * @public
     */
    permissionExternalStorage: {}
    /**
     * Android平台应用启动时申请读取设备信息权限配置，详情参考：[Android平台应用启动时访问设备信息(如IMEI)权限策略](https://ask.dcloud.net.cn/article/36549)，支持request、prompt属性
     * 
     * @public
     * 
     */
    permissionPhoneState: {}
    /**
     * 
     * Android平台最低支持版本，[详情参考](https://uniapp.dcloud.net.cn/tutorial/app-android-minsdkversion.html)
     * 
     * @defaultValue 19
     * 
     * @public
     */
    minSdkVersion: number 
    /**
     * 
     * Android平台目标版本 详情参考：[Android平台设置targetSdkVersion](https://uniapp.dcloud.net.cn/tutorial/app-android-targetsdkversion.html)
     * 
     * @defaultValue 26
     * 
     * @public
     */
    targetSdkVersion: number
    /**
     * 
     * Android平台云端打包时build.gradle的packagingOptions配置项，示例："packagingOptions": ["doNotStrip '/armeabi-v7a/.so'","merge **\/LICENSE.txt]
     * 
     * @public
     */
    packagingOptions: []
    /**
     * 
     * uni-app使用的JS引擎，可取值v8、jsc，将废弃，后续不再支持jsc引擎
     * 
     * @public
     */
    jsEngine: string
    /**
     * 
     * 是否开启Android调试开关
     * 
     * @public
     */
    debuggable: boolean
    /**
     * 
     * 应用的默认语言
     * 
     * @public
     * 
     */
    locale: string
    /**
     * 
     * 
     * 是否强制允许暗黑模式
     * 
     * @public
     * 
     */
    forceDarkAllowed: boolean
    /**
     * 
     * 是否支持分屏调整窗口大小
     * 
     * @public
     */
    resizeableActivity: boolean
    /**
     * 
     * [是否设置android：taskAffinity](https://uniapp.dcloud.net.cn/tutorial/app-sec-android.html#strandhogg%E6%BC%8F%E6%B4%9E)
     * 
     * @public
     * 
     */
    hasTaskAffinity: boolean
    /**
     * Android平台云端打包时build.gradle的buildFeatures配置项，[详见](https://uniapp.dcloud.net.cn/collocation/manifest#buildFeatures)
     * 
     * @public
     */
    buildFeatures: {}
    /**
     * 
     * 延迟初始化UniPush的配置，当配置此项值为manual后UniPush不会初始化，直到首次调用getPushClientId、getClientInfo、getClientInfoAsync时才会初始化，注:一旦调用获取cid的方法后，下次App启动就不再延迟初始化UniPush了。(manual为延迟，其他值表示不延迟。)
     * 
     * @public
     */
    pushRegisterMode: string
    /**
     * 
     * 是否支持获取OAID，默认值为true，[详见](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#enableOAID)
     * 
     * @public
     * 
     */
    enableOAID: boolean
}
