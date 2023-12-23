/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 23:45:35
 * @LastEditTime: 2023-12-23 14:31:36
 * @Description: 地图配置相关 (高德，百度，google)
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.map.ts
 */

import { UniConfigurationParsingOptions } from "../../../configuration";
import { amap, baiduMap, bdMaps, googleMap, scottMaps } from "../../../configuration/app/distribute";
import { AndroidPermissionsConfigImpl, androidPermissionsConfigImplDoNotExportToUsers } from './android.permissions.config.impl';
import { Permissions } from './permissions';

export type userAndroidPermissionsConfigMap = Omit<AndroidPermissionsConfigMap, 'androidPermissionsConfigImplDoNotExportToUsers'>

export class AndroidPermissionsConfigMap implements AndroidPermissionsConfigImpl {

    private config: Partial<UniConfigurationParsingOptions> = {}


    public permissions: Permissions = new Permissions();





    addGaodeMap(opt: Omit<amap, '__platform__'>) {
        this.permissions.push(scottMaps)
        const config: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Maps: {}
                },
                distribute: {
                    sdkConfigs: {
                        maps: {
                            amap: opt
                        }
                    }
                }
            }
        }
        this.config = config
        return this
    }

    addBaiduMap(opt: Omit<baiduMap, '__platform__'>) {
        this.permissions.push(bdMaps)
        const config: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Maps: {}
                },
                distribute: {
                    sdkConfigs: {
                        maps: {
                            baidu: opt
                        }
                    }
                }
            }
        }
        this.config = config
        return this

    }

    addGoogleMap(opt: googleMap) {
        const config: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Maps: {}
                },
                distribute: {
                    sdkConfigs: {
                        maps: {
                            google: opt
                        }
                    }
                }
            }
        }
        this.config = config
        return this
    }

    getConfig() {
        return this.config
    }

}
