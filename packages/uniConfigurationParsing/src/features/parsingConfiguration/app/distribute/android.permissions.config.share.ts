/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 14:04:50
 * @LastEditTime: 2023-12-23 14:43:38
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.share.ts
 */
import defaultsDeep from 'lodash.defaultsdeep';
import { UniConfigurationParsingOptions } from '../../../configuration';
import { qqShare as qqSharePermissions, weiBoShare as weiBoSharePermissions, wxShare as wxSharePermissions } from '../../../configuration/app/distribute/index';
import { qqShare, sinaShare, wxShare } from '../../../configuration/app/distribute/share';
import { AndroidPermissionsConfigImpl, androidPermissionsConfigImplDoNotExportToUsers } from './android.permissions.config.impl';
import { Permissions } from './permissions';

export type userAndroidPermissionsConfigShare = Omit<AndroidPermissionsConfigShare, androidPermissionsConfigImplDoNotExportToUsers>

export class AndroidPermissionsConfigShare implements AndroidPermissionsConfigImpl {
    permissions: Permissions = new Permissions()

    private config: Partial<UniConfigurationParsingOptions> = {}

    getConfig(): Partial<UniConfigurationParsingOptions> {
        return this.config
    }

    addWxShare(opt: wxShare) {
        this.permissions.push(wxSharePermissions)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Share: {}
                },
                "distribute": {
                    sdkConfigs: {
                        share: {
                            weixin: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    addQQShare(opt: qqShare) {
        this.permissions.push(qqSharePermissions)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Share: {}
                },
                "distribute": {
                    sdkConfigs: {
                        share: {
                            qq: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    addWeiboShare(opt: sinaShare) {
        this.permissions.push(weiBoSharePermissions)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    Share: {}
                },
                "distribute": {
                    sdkConfigs: {
                        share: {
                            sina: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }
}