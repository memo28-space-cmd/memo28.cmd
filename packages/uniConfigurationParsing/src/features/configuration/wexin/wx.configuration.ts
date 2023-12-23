/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 20:45:48
 * @LastEditTime: 2023-12-23 20:57:39
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/wexin/wx.configuration.ts
 */


export interface wxConfiguration {
    /**
     * 
     * 小程序 `appid` 
     * 
     * @public
     */
    appid: string

    setting: Partial<{

        /**
         * 
         * 检查安全域和 TLS 版本
         * 
         * @public
         */
        urlCheck: boolean
        /**
         * 
         * es6 -> es5
         * 
         * @defaultValue true
         * 
         * @public
         */
        es6: boolean
        /**
         * 
         * 上传代码时样式自动补全
         * 
         * @defaultValue true
         * 
         * @public
         * 
         */
        postcss: boolean
        /**
         * 
         * 上传代码时自动压缩
         * 
         * @defaultValue true
         * 
         * @public
         */
        minified: boolean
    }>

    permission: Partial<{
        "scope.userLocation": {
            desc: string
        }
    }>


    /**
     * 
     * 
     * 云顿一体安全网络
     * 
     * @public
     * 
     */
    secureNetwork: Partial<{
        enable: boolean
    }>,
    /**
     * 
     * 是否开启 unipush
     * 
     * @public
     * 
     */
    unipush: Partial<{
        enable: boolean
    }>

}