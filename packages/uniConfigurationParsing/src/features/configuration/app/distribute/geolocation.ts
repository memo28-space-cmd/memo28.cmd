/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 13:53:31
 * @LastEditTime: 2023-12-22 16:44:58
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/app/distribute/geolocation.ts
 */

import { userConfigurationAlternativePath } from "../../common/generalConfiguration"

export type __platform__ =  'ios' | 'android'


/**
 * 
 * sdk 中的定位配置
 * 
 * @public
 * 
 */
export interface geolocation {
    system: {
        "__platform__": ("ios" | "android")[]
    }
    amap: amap
    baidu: baiduMap
}


/**
 * 
 * 用户选项 定位
 * 
 * @public
 */
export interface userGeolocation extends userConfigurationAlternativePath {
    platform: ("ios" | "android")[]
}

/**
 * 
 * 高德地图 定位
 * 
 * @public
 */
export interface amap {
    /**
     * 
     * 高德用户名
     * 
     * @public
     * 
     */
    name: string
    /**
     * 
     * 支持平台
     * 
     * @public
     */
    __platform__: ("ios" | "android")[]
    /**
     * 
     * ios 平台绑定的key 
     * 
     * @public
     */
    appkey_ios: string
    /**
     * 
     * 安卓平台绑定的key
     * 
     * @public
     */
    appkey_android: string
}

/**
 * 
 * 百度定位 配置
 * 
 * @public
 */
export interface baiduMap {
    __platform__: ("ios" | "android")[]
    appkey_android: string
    appkey_ios: string
}

export interface googleMap {
    APIKey_ios: string
    APIKey_android: string
}