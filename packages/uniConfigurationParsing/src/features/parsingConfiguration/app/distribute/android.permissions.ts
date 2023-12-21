/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 23:17:40
 * @LastEditTime: 2023-12-21 14:23:15
 * @Description:  app模块配置解析
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.ts
 */
import { ManiFest } from '../../comon/getMainfast';
import { AndroidPermissionsConfig } from './android.permissions.config';


export type androidPermissionsConfigFn = (androidPermissionsConfig: AndroidPermissionsConfig) => void

/**
 * 
 * 配置app模块
 * 
 * @public
 * 
 */
export class AndroidPermissions {
    private permissions: string[] = [];

    maniFest: ManiFest = new ManiFest()
    private androidPermissionsConfig: AndroidPermissionsConfig = new AndroidPermissionsConfig()

    addModule(fn: androidPermissionsConfigFn) {
        this.androidPermissionsConfig.maniFest.setMainFast(this.maniFest.getMainFast())
        fn(this.androidPermissionsConfig)
        this.permissions = this.androidPermissionsConfig.getPermissions()
    }

    getConfig() {
        const config = this.androidPermissionsConfig.maniFest.getMainFast()
        this.maniFest.setMainFast(config)
        return config

    }

    getPermissions() {
        return this.permissions
    }

}