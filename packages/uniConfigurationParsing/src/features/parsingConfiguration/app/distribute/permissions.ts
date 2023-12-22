/*
 * @Author: @memo28.repo
 * @Date: 2023-12-22 15:55:25
 * @LastEditTime: 2023-12-22 15:57:03
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/permissions.ts
 */


export class Permissions {
    private permissions: string[] = [];

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