/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 14:23:39
 * @LastEditTime: 2023-12-23 14:38:18
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.helper.ts
 */
import defaultsDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../../../configuration';
import { AndroidPermissionsConfigImpl } from './android.permissions.config.impl';
import { Permissions } from './permissions';

export class AndroidPermissionsConfigHelper {
    protected permissions: Permissions = new Permissions()

    private impls: AndroidPermissionsConfigImpl[] = []


    getCollectAndroidPermissionsConfigImpl(impls: AndroidPermissionsConfigImpl[]) {
        this.impls = impls

    }


    getReferencPermissions() {
        this.impls.forEach(i => {
            i.permissions.setPermissions(this.permissions.getPermissions())
        })
    }


    getCollectConfig(): Partial<UniConfigurationParsingOptions> {
        return this.impls.reduce((pre, cur) => {
            return defaultsDeep(pre, cur.getConfig())
        }, {})
    }

}