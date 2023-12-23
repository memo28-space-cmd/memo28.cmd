/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 09:54:39
 * @LastEditTime: 2023-12-23 14:42:20
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/index.ts
 */

import defaultDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../configuration/index';
import { AndroidPermissions, androidPermissionsConfigFn } from './app/distribute/android.permissions';
import { ParseVersion } from './parseVersion';

export class ParsingConfiguration {
    private h: UniConfigurationParsingOptions = {
        name: '',
        appid: ""
    }

    private parseVersion: null | ParseVersion = null
    private androidPermissions: AndroidPermissions = new AndroidPermissions()


    constructor(private uniConfigurationParsingOptions: UniConfigurationParsingOptions) {
        this.h = this.uniConfigurationParsingOptions
        this.androidPermissions.maniFest.setMainFast(this.h)
        this.parseVersion = new ParseVersion(this.uniConfigurationParsingOptions)
    }
    /**
     * 
     * 补全默认值
     * 
     * @public 
     */
    completeDefault() {
        this.h = {
            ...this.h,
            debug: this.h?.debug || false,
            description: '',
            ...this.parseVersion?.done(),
            transformPx: this.h?.transformPx || false,
            uniStatistics: {
                enable: this.h?.uniStatistics?.enable || true
            },
            vueVersion: this.h?.vueVersion || '3',
            "mp-alipay": this.h['mp-alipay'] || {
                usingComponents: true
            },
            "mp-baidu": this.h['mp-baidu'] || {
                usingComponents: true
            },
            "mp-toutiao": this.h['mp-toutiao'] || {
                usingComponents: true
            },
        }
        return this
    }

    addAndroidPermissions(fn: androidPermissionsConfigFn) {
        this.androidPermissions.addModule(fn)
        this.h = defaultDeep(this.h, {
            "app-plus": {
                distribute: {
                    android: {
                        abiFilters: this.h['app-plus']?.distribute?.android?.abiFilters || ['arm64-v8a', 'arm64-v8a', 'arm64-v8a'],
                        minSdkVersion: this.h['app-plus']?.distribute?.android?.minSdkVersion || 19,
                        targetSdkVersion: this.h['app-plus']?.distribute?.android?.targetSdkVersion || 26,
                        permissions: this.androidPermissions.getPermissions()
                    }
                }
            }
        } as Partial<UniConfigurationParsingOptions>,
            this.androidPermissions.getConfig()
        )
        return this
    }

    done() {
        return this.h
    }
}

