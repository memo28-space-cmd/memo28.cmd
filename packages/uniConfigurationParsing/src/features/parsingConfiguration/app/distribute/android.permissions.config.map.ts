/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 23:45:35
 * @LastEditTime: 2023-12-22 00:29:34
 * @Description: 地图配置相关 (高德，百度，google)
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.map.ts
 */

import { UniConfigurationParsingOptions } from "../../../configuration";
import { amap, baiduMap, bdMaps, googleMap, scottMaps } from "../../../configuration/app/distribute";

export class AndroidPermissionsConfigMap {

    private config: Partial<UniConfigurationParsingOptions> = {}


    private permissions: string[] = [];


    setPermissions(permissions: string[]) {
        this.permissions = permissions
        return this
    }

    getPermissions() {
        return this.permissions;
    }


    addGaodeMap(opt: Omit<amap, '__platform__'>) {
        this.permissions.push(...scottMaps)
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
        this.permissions.push(...bdMaps)
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
