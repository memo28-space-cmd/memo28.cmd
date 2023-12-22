/*
 * @Author: @memo28.repo
 * @Date: 2023-12-22 16:43:16
 * @LastEditTime: 2023-12-22 16:48:29
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/app/distribute/pay.ts
 */

import { __platform__ } from "./geolocation";


export interface aliPay {
    __platform__: __platform__[]
}

export interface wxPay {
    __platform__: __platform__[]
    /**
     * 
     * 开放平台的key
     * 
     * @public
     */
    appid: string
    UniversalLinks: string
}

export interface paypalPay {
    __platform__: __platform__[]

    /**
     * 要求小写
     * 
     * @public
     */
    returnURL_ios: string

    /**
     * 
     * 要求小写
     * 
     * @public
     */
    returnURL_android: string
}

export interface stripePay {
    __platform__: __platform__[]

    /**
     * 
     * @public
     */
    returnURL_ios: string
}

export interface googlePay {
}