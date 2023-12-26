import {Permissions} from './permissions'
import {
    AndroidPermissionsConfigImpl,
    androidPermissionsConfigImplDoNotExportToUsers
} from './android.permissions.config.impl'
import {UniConfigurationParsingOptions} from "../../../configuration";
import {PushV1, PushV2} from '../../../configuration/app/distribute/push'
import {uniPush} from "../../../configuration/app/distribute/android.permissions";


export type userAndroidPermissionsConfigPush = Omit<AndroidPermissionsConfigPush, androidPermissionsConfigImplDoNotExportToUsers>

export class AndroidPermissionsConfigPush implements AndroidPermissionsConfigImpl {
    permissions: Permissions = new Permissions()
    private config: Partial<UniConfigurationParsingOptions> = {}

    getConfig(): Partial<UniConfigurationParsingOptions> {
        return this.config;
    }


    addPushV1(opt: PushV1) {
        const h: Partial<UniConfigurationParsingOptions> = {
            'app-plus': {
                distribute: {
                    sdkConfigs: {
                        push: {
                            unipush: opt
                        }
                    }
                }

            }
        }
        this.permissions.push(uniPush)
        this.config = h
        return this
    }

    addPushV2(opt: PushV2) {
        this.permissions.push(uniPush)
        const h: Partial<UniConfigurationParsingOptions> = {
            'app-plus': {
                distribute: {
                    sdkConfigs: {
                        push: {
                            unipush: opt
                        }
                    }
                }

            }
        }
        this.config = h
        return this
    }

}
