/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 14:17:14
 * @LastEditTime: 2023-12-23 14:19:25
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.impl.ts
 */

import { UniConfigurationParsingOptions } from '../../../configuration';
import { Permissions } from './permissions';

export type androidPermissionsConfigImplDoNotExportToUsers = 'permissions' | 'getConfig'

export abstract class AndroidPermissionsConfigImpl {
    abstract permissions: Permissions

    abstract getConfig(): Partial<UniConfigurationParsingOptions>
}