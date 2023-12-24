/*
 * @Author: @memo28.repo
 * @Date: 2023-12-24 20:48:51
 * @LastEditTime: 2023-12-24 20:50:30
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/mut.config.ts
 */

import { ParsingConfiguration, UniConfigurationParsingOptions, getMode } from './index';

const h: UniConfigurationParsingOptions = {
    name: '',
    appid: '',
    versionCode: 1,
    versionName: '12',
    "app-plus": {
        modules: {}
    }
}

console.log(getMode(),'getMode')

const finalConfig = new ParsingConfiguration(h).addAndroidPermissions((config) => {
    config.androidPermissionsConfigMap.addBaiduMap

    config.androidPermissionsConfigOauth.addWxLogin
}).done()

export default finalConfig
