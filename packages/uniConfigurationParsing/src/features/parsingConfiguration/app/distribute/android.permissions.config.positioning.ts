/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 23:46:09
 * @LastEditTime: 2023-12-23 14:28:33
 * @Description:  定位相关 (系统，高德，百度)
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.positioning.ts
 */
import defaultsDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../../../configuration';
import { amap, baiduMap, bdMaps, scottMaps, userGeolocation } from '../../../configuration/app/distribute';
import { AndroidPermissionsConfigImpl, androidPermissionsConfigImplDoNotExportToUsers } from './android.permissions.config.impl';
import { Permissions } from './permissions';

export type userAndroidPermissionsConfigPositioning = Omit<AndroidPermissionsConfigPositioning, androidPermissionsConfigImplDoNotExportToUsers>

export class AndroidPermissionsConfigPositioning implements AndroidPermissionsConfigImpl {
    public permissions: Permissions = new Permissions();


    private config: Partial<UniConfigurationParsingOptions> = {}

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

        this.config = defaultsDeep(this.config, userGeolocation.configureAlternatePath)

        return this
    }

    /**
     * 高德定位
     * 
     * @public
     */
    addGaodePositioning(opt: amap) {
        this.permissions.push(scottMaps)
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

        this.config = defaultsDeep(this.config, config)
        return this
    }

    addBaiduPosition(opt: baiduMap) {
        this.permissions.push(bdMaps)

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

        this.config = defaultsDeep(this.config, config)
        return this
    }

    getConfig() {
        return this.config
    }
}

