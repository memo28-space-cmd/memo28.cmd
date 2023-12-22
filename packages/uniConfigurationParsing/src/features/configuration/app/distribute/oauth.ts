/*
 * @Author: @memo28.repo
 * @Date: 2023-12-22 16:14:11
 * @LastEditTime: 2023-12-22 16:25:23
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/app/distribute/oauth.ts
 */


export interface wxOAuth {
    /**
     * 
     * 微信开放平台申请的appid
     * 
     * @public
     */
    appid: string

    /**
     * 
     * ios 平台通用链接
     * @public
     */
    UniversalLinks: string

}


export interface qqOAuth {
    /**
     * 
     * qq开放平台申请的appid
     * 
     * @public
     */
    appid: string

    /**
     * 
     * ios 平台通用链接
     * @public
     */
    UniversalLinks: string

}

export interface googleOAuth {
    /**
     * 
     * Google Api console 项目中获得的客户端id
     * 
     * @public
     * 
     */
    clientid: string
}

export interface faceBookOAuth {
    /**
     * 
     * 应用id
     * 
     * @public
     */
    appid: string
    /**
     * 
     * 开发者中心获取的token
     * 
     * @public
     */
    client_token: string
}

export interface sinaOAuth {
    /**
     * 
     * 应用key
     * 
     * 
     * @public
     */
    appkey: string
    /**
     * 
     * 新浪微博回调页面地址
     * 
     * @public
     */
    redirect_uri: string
    /**
       * 
       * ios 平台通用链接
       * @public
       */
    UniversalLinks: string

}