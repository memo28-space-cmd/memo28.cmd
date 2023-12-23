/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 14:10:03
 * @LastEditTime: 2023-12-23 14:11:29
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/app/distribute/share.ts
 */


export interface wxShare {
    appid: string

    UniversalLinks: string
}



export interface sinaShare {
    appkey: string
    redirect_uri: string
    UniversalLinks: string
}

export interface qqShare {

    appid: string

    UniversalLinks: string
}