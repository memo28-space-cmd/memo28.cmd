/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 23:21:48
 * @LastEditTime: 2023-12-21 14:38:45
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.ts
 */

import defaultsDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../../../configuration';
import { IFLYTEKSpeechRecognition, alipay, amap, baiduMap, baiduSpeechRecognition, bdMaps, bluetooth, contact, facialRecognitionVerify, fingerprint, friendlyLeagueStatistics, iBeacon, messaging, qqOAuth, qqShare, scottMaps, uniPush, userGeolocation, weiBoShare, wxOAuth, wxPay, wxShare } from '../../../configuration/app/distribute/index';
import { ManiFest } from '../../comon/getMainfast';

/**
 * 
 * 添加配置
 * 
 * @public
 * 
 */
export class AndroidPermissionsConfig {

    private permissions: string[] = [];


    maniFest: ManiFest = new ManiFest()

    getPermissions() {
        return this.permissions
    }

    addBluetooth(): this {
        this.permissions.push(...bluetooth)
        return this
    }

    addContact() {
        this.permissions.push(...contact)
        return this
    }


    /**
     * 
     * 指纹识别
     * 
     * @public
     */
    addFingerprint() {
        this.permissions.push(...fingerprint)
        return this
    }

    /**
     * 实人认证
     * 
     * @public
     */
    addFacialRecognitionVerify() {
        this.permissions.push(...facialRecognitionVerify)
        return this
    }

    addIBeacon() {
        this.permissions.push(...iBeacon)
        return this
    }

    /**
     * 
     * 系统定位
     * 
     * @public
     */
    addPositioningSystem(opt: Omit<userGeolocation, 'configureAlternatePath'>) {
        const userGeolocation = {
            ...opt,
            configureAlternatePath: {
                "app-plus": {
                    modules: {
                        Geolocation: {}
                    },
                    distribute: {
                        sdkConfigs: {
                            geolocation: {
                                system: {
                                    "__platform__": opt.platform
                                }
                            }
                        }
                    }
                }
            }
        }

        this.maniFest.setMainFast(defaultsDeep(userGeolocation.configureAlternatePath, this.maniFest.getMainFast()))

        return this
    }


    /**
     * 
     * 高德地图
     * 
     * @public
     */
    addScottMap(opt: amap) {
        this.permissions.push(...scottMaps)

        const config: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                distribute: {
                    sdkConfigs: {
                        geolocation: {
                            amap: opt
                        }
                    }
                }
            }
        }

        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), config))
        return this
    }

    /**
     * 
     * 百度地图
     * @public
     */

    addBaiduMap(opt: baiduMap) {
        this.permissions.push(...bdMaps)

        const config: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                distribute: {
                    sdkConfigs: {
                        geolocation: {
                            baidu: opt
                        }
                    }
                }
            }
        }

        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), config))
        return this
    }


    /**
     * 
     * message 短信 彩信 邮件消息
     */

    addMessage() {
        this.permissions.push(...messaging)
        return this
    }

    addWxOAuth() {
        this.permissions.push(...wxOAuth)
        return this
    }

    addQQOAuth() {
        this.permissions.push(...qqOAuth)
        return this
    }

    addAliPay() {
        this.permissions.push(...alipay)
        return this
    }

    addWxPay() {
        this.permissions.push(...wxPay)
        return this
    }

    addUniPush() {
        this.permissions.push(...uniPush)
        return this
    }


    addWxShare() {
        this.permissions.push(...wxShare)
        return this
    }

    addQQShare() {
        this.permissions.push(...qqShare)
        return this
    }

    addWbShare() {
        this.permissions.push(...weiBoShare)
        return this
    }

    addBaiduSpeech() {
        this.permissions.push(...baiduSpeechRecognition)
        return this
    }

    addXfSpeech() {
        this.permissions.push(...IFLYTEKSpeechRecognition)
        return this
    }

    addStatic() {
        this.permissions.push(...friendlyLeagueStatistics)
        return this
    }
}