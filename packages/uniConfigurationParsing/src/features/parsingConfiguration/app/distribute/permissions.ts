/*
 * @Author: @memo28.repo
 * @Date: 2023-12-22 15:55:25
 * @LastEditTime: 2023-12-24 21:36:19
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/permissions.ts
 */
import { androidDefaultPermissions } from '../../../configuration/app/distribute/index';



export class Permissions {
    private permissions: string[] = [...androidDefaultPermissions];

    setPermissions(permissions: string[]) {
        this.permissions = permissions
        return this
    }

    push(permissions: string[]) {
        this.permissions.push(...permissions)
        return this
    }


    getPermissions() {
        return this.permissions
    }
}