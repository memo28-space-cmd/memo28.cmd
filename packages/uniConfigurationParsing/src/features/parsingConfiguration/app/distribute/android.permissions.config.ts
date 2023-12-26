/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 23:21:48
 * @LastEditTime: 2023-12-25 11:19:52
 * @Description:
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.ts
 */

import defaultsDeep from 'lodash.defaultsdeep';
import {UniConfigurationParsingOptions} from '../../../configuration';
import {
    IFLYTEKSpeechRecognition,
    bluetooth,
    contact,
    facialRecognitionVerify,
    fingerprint,
    friendlyLeagueStatistics,
    iBeacon,
    messaging,
    uniPush,
    wifi,
} from '../../../configuration/app/distribute/index';
import {ManiFest} from '../../comon/getMainfast';
import {AndroidPermissionsConfigHelper} from './android.permissions.config.helper';
import {AndroidPermissionsConfigImpl} from './android.permissions.config.impl';
import {AndroidPermissionsConfigMap, userAndroidPermissionsConfigMap} from './android.permissions.config.map';
import {AndroidPermissionsConfigOauth, userAndroidPermissionsConfigOauth} from './android.permissions.config.oauth';
import {AndroidPermissionsConfigPay, userAndroidPermissionsConfigPay} from './android.permissions.config.pay';
import {
    AndroidPermissionsConfigPositioning,
    userAndroidPermissionsConfigPositioning
} from './android.permissions.config.positioning';
import {AndroidPermissionsConfigShare, userAndroidPermissionsConfigShare} from './android.permissions.config.share';
import {AndroidPermissionsConfigSpeech, userAndroidPermissionsConfigSpeech} from './android.permissions.config.speech';
import {userAndroidPermissionsConfigPush, AndroidPermissionsConfigPush} from './android.permissions.config.push'

/**
 *
 * 添加配置
 *
 * @public
 *
 */
export class AndroidPermissionsConfig extends AndroidPermissionsConfigHelper {


    /**
     *
     * 限制类型是为了不让用户外部访问
     *
     * @public
     *
     */
    public androidPermissionsConfigPositioning: userAndroidPermissionsConfigPositioning = new AndroidPermissionsConfigPositioning()

    public androidPermissionsConfigPush: userAndroidPermissionsConfigPush = new AndroidPermissionsConfigPush()

    public androidPermissionsConfigSpeech: userAndroidPermissionsConfigSpeech = new AndroidPermissionsConfigSpeech()

    public androidPermissionsConfigShare: userAndroidPermissionsConfigShare = new AndroidPermissionsConfigShare()

    public androidPermissionsConfigOauth: userAndroidPermissionsConfigOauth = new AndroidPermissionsConfigOauth()

    public androidPermissionsConfigPay: userAndroidPermissionsConfigPay = new AndroidPermissionsConfigPay()

    /**
     *
     *
     * 限制类型是为了不让用户外部访问
     *
     * @public
     */
    public androidPermissionsConfigMap: userAndroidPermissionsConfigMap = new AndroidPermissionsConfigMap()

    constructor() {
        super()
        this.getCollectAndroidPermissionsConfigImpl([
            this.androidPermissionsConfigPay as unknown as AndroidPermissionsConfigImpl,
            this.androidPermissionsConfigMap as unknown as AndroidPermissionsConfigImpl,
            this.androidPermissionsConfigOauth as unknown as AndroidPermissionsConfigImpl,
            this.androidPermissionsConfigPositioning as unknown as AndroidPermissionsConfigImpl,
            this.androidPermissionsConfigShare as unknown as AndroidPermissionsConfigImpl,
            this.androidPermissionsConfigSpeech as unknown as AndroidPermissionsConfigImpl,
            this.androidPermissionsConfigPush as unknown as AndroidPermissionsConfigImpl
        ])
        this.getReferencPermissions()
    }

    maniFest: ManiFest = new ManiFest()

    getManiFestMergeConfig() {
        return defaultsDeep(this.maniFest.getMainFast(),
            this.getCollectConfig()
        )
    }

    getPermissions() {
        return this.permissions.getPermissions()
    }

    addBluetooth(): this {
        this.permissions.push(bluetooth)
        return this
    }

    addContact() {
        this.permissions.push(contact)
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
        this.permissions.push(fingerprint)
        return this
    }

    /**
     * 实人认证
     *
     * @public
     */
    addFacialRecognitionVerify() {
        this.permissions.push(facialRecognitionVerify)
        return this
    }

    addIBeacon() {
        this.permissions.push(iBeacon)
        return this
    }

    addWifi() {
        this.permissions.push(wifi)
        return this
    }

    /**
     *
     * message 短信 彩信 邮件消息
     */

    addMessage() {
        this.permissions.push(messaging)
        return this
    }


    addXfSpeech() {
        this.permissions.push(IFLYTEKSpeechRecognition)
        return this
    }

    addStatic() {
        this.permissions.push(friendlyLeagueStatistics)
        return this
    }
}
