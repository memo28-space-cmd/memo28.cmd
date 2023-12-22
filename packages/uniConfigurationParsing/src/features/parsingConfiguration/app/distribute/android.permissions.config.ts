/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 23:21:48
 * @LastEditTime: 2023-12-22 22:50:16
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.ts
 */

import defaultsDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../../../configuration';
import { IFLYTEKSpeechRecognition, alipay, baiduSpeechRecognition, bluetooth, contact, facialRecognitionVerify, fingerprint, friendlyLeagueStatistics, iBeacon, messaging, qqOAuth, qqShare, scottMaps, uniPush, userGeolocation, weiBoShare, wxOAuth, wxPay, wxShare } from '../../../configuration/app/distribute/index';
import { ManiFest } from '../../comon/getMainfast';
import { AndroidPermissionsConfigMap } from './android.permissions.config.map';
import { AndroidPermissionsConfigOauth, userAndroidPermissionsConfigOauth } from './android.permissions.config.oauth';
import { AndroidPermissionsConfigPay, userAndroidPermissionsConfigPay } from './android.permissions.config.pay';
import { AndroidPermissionsConfigPositioning } from './android.permissions.config.positioning';

/**
 * 
 * 添加配置
 * 
 * @public
 * 
 */
export class AndroidPermissionsConfig {

    private permissions: string[] = [];

    /**
     * 
     * 限制类型是为了不让用户外部访问
     * 
     * @public
     * 
     */
    public androidPermissionsConfigPositioning: Omit<AndroidPermissionsConfigPositioning, 'maniFest' | 'setPermissions' | 'getPermissions' | 'getConfig' | 'permissions'> = new AndroidPermissionsConfigPositioning()

    public androidPermissionsConfigOauth: userAndroidPermissionsConfigOauth = new AndroidPermissionsConfigOauth()

    public androidPermissionsConfigPay: userAndroidPermissionsConfigPay = new AndroidPermissionsConfigPay()

    /**
     * 
     * 
     * 限制类型是为了不让用户外部访问
     * 
     * @public
     */
    public androidPermissionsConfigMap: Omit<AndroidPermissionsConfigMap, 'getPermissions' | 'setPermissions' | 'getConfig' | 'permissions'> = new AndroidPermissionsConfigMap()

    constructor() {
        (this.androidPermissionsConfigPay as AndroidPermissionsConfigPay).permissions.setPermissions(this.permissions);
        (this.androidPermissionsConfigOauth as AndroidPermissionsConfigOauth).permissions.setPermissions(this.permissions);
        (this.androidPermissionsConfigPositioning as AndroidPermissionsConfigPositioning).permissions.setPermissions(this.permissions);
        (this.androidPermissionsConfigMap as AndroidPermissionsConfigMap).permissions.setPermissions(this.permissions)
    }

    maniFest: ManiFest = new ManiFest()

    getManiFestMergeConfig() {
        return defaultsDeep(this.maniFest.getMainFast(),
            (this.androidPermissionsConfigPositioning as AndroidPermissionsConfigPositioning).getConfig(),
            (this.androidPermissionsConfigMap as AndroidPermissionsConfigMap).getConfig(),
            (this.androidPermissionsConfigOauth as AndroidPermissionsConfigOauth).getConfig(),
            (this.androidPermissionsConfigPay as AndroidPermissionsConfigPay).getConfig()
        )
    }

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

    addWebviewX5() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    'Webview-x5': {}
                }
            }
        }
        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), h))
        return this
    }

    addUIWebview() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    UIWebview: {}
                }
            }
        }
        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), h))
        return this
    }

    addVideoPlayer() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    VideoPlayer: {}
                }
            }
        }
        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), h))

        return this
    }


    /**
     * 
     * 新增 SQLite 模块
     * 
     * @public
     * 
     */
    addSQLite() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    SQLite: {}
                }
            }
        }
        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), h))
        return this
    }
    /**
     * 
     * uni 云端一体安全网络
     * 
     * @public
     * 
     */
    addSecureNetwork() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    SecureNetwork: {}
                }
            }
        }
        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), h))
        return this
    }

    /**
     * 
     * 新增录音模块
     * 
     * @public
     */
    addRecord() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Record: {}
                }
            }
        }
        this.maniFest.setMainFast(defaultsDeep(this.maniFest.getMainFast(), h))
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
     * message 短信 彩信 邮件消息
     */

    addMessage() {
        this.permissions.push(...messaging)
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