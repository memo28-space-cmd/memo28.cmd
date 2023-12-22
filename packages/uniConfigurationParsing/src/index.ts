/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 09:35:53
 * @LastEditTime: 2023-12-22 16:30:26
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/index.ts
 */
import { UniConfigurationParsingOptions } from './features/configuration/index';
import { ParsingConfiguration } from './features/parsingConfiguration/index';
export { ParsingConfiguration, UniConfigurationParsingOptions };


const h: UniConfigurationParsingOptions = {
    name: "",
    appid: '',
    versionCode: 100,
}

const finalConfig = new ParsingConfiguration(h)
    .addAndroidPermissions((config) => {
        config.androidPermissionsConfigOauth.addAppleLogin()
        config.androidPermissionsConfigPositioning.addBaiduPosition({
            appkey_android: '12',
            appkey_ios: '123',
            __platform__: ['android']
        }).addPositioningSystem({
            platform: ['android']
        })

        config.androidPermissionsConfigMap.addGaodeMap({
            appkey_android: '12',
            appkey_ios: '123',
            name: '123'
        })
    })
    .completeDefault()
    .done()

console.log(finalConfig['app-plus'])

