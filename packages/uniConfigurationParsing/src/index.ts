/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 09:35:53
 * @LastEditTime: 2023-12-21 14:39:17
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/index.ts
 */
import { UniConfigurationParsingOptions } from './features/configuration/index';
import { ParsingConfiguration } from './features/parsingConfiguration/index';


const h: UniConfigurationParsingOptions = {
    name: "",
    appid: '',
    versionCode: 100,
}

const finalConfig = new ParsingConfiguration(h)
    .addAndroidPermissions((config) => {
        config.addPositioningSystem({
            platform: ['android']
        }).addScottMap({
            name: 'as',
            appkey_android: '12',
            appkey_ios: 'q3',
            __platform__: ['android']
        })
            .addBaiduMap({
                __platform__: ['android'],
                appkey_android: '',
                appkey_ios: ''
            })
    })
    .completeDefault()
    .done()

console.log(finalConfig['app-plus']?.distribute?.sdkConfigs)

