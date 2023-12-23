/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 14:46:13
 * @LastEditTime: 2023-12-23 14:51:34
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.speech.ts
 */
import defaultsDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../../../configuration';
import { baiduSpeechRecognition } from '../../../configuration/app/distribute/index';
import { baiduSpeech } from '../../../configuration/app/distribute/speech';
import { AndroidPermissionsConfigImpl, androidPermissionsConfigImplDoNotExportToUsers } from './android.permissions.config.impl';
import { Permissions } from './permissions';


export type userAndroidPermissionsConfigSpeech = Omit<AndroidPermissionsConfigSpeech, androidPermissionsConfigImplDoNotExportToUsers>

export class AndroidPermissionsConfigSpeech implements AndroidPermissionsConfigImpl {
    permissions: Permissions = new Permissions();


    private config: Partial<UniConfigurationParsingOptions> = {}


    getConfig(): Partial<UniConfigurationParsingOptions> {
        return this.config
    }

    addBaiduSpeech(opt: baiduSpeech) {
        this.permissions.push(baiduSpeechRecognition)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Speech: {}
                },
                "distribute": {
                    sdkConfigs: {
                        speech: {
                            baidu: opt
                        }
                    }
                }
            }
        }

        this.config = defaultsDeep(this.config, h)
        return this
    }
}