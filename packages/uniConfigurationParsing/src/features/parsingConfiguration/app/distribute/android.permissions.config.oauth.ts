/*
 * @Author: @memo28.repo
 * @Date: 2023-12-22 16:00:33
 * @LastEditTime: 2023-12-23 14:30:10
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.oauth.ts
 */
import defaultsDeep from 'lodash.defaultsdeep';
import { qqOAuth as qqOAuthPermissions, wxOAuth as wxOAuthPermissions } from '../../../configuration/app/distribute';
import { faceBookOAuth, googleOAuth, qqOAuth, sinaOAuth, wxOAuth } from '../../../configuration/app/distribute/oauth';
import { UniConfigurationParsingOptions } from '../../../configuration/index';
import { AndroidPermissionsConfigImpl, androidPermissionsConfigImplDoNotExportToUsers } from './android.permissions.config.impl';
import { Permissions } from './permissions';


export type userAndroidPermissionsConfigOauth = Omit<AndroidPermissionsConfigOauth, androidPermissionsConfigImplDoNotExportToUsers>

export class AndroidPermissionsConfigOauth implements AndroidPermissionsConfigImpl {
    permissions: Permissions = new Permissions()
    private config: Partial<UniConfigurationParsingOptions> = {}


    getConfig() {
        return this.config
    }

    /**
     * 
     * 一键登录
     * 
     * @see https://uniapp.dcloud.net.cn/univerify
     * 
     * @public
     */
    addUniverify() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            univerify: {},
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    /**
     * 
     * 苹果登陆
     * 
     * @public
     */
    addAppleLogin() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            apple: {},
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    /**
     * 
     * 微信登陆
     * 
     * @public
     */
    addWxLogin(opt: wxOAuth) {
        this.permissions.push(wxOAuthPermissions)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            weixin: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }


    /**
     * 
     * 
     * qq login
     * 
     * @public
     * 
     */
    addQQLogin(opt: qqOAuth) {
        this.permissions.push(qqOAuthPermissions)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            qq: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    /**
     * 
     * 
     * weiBo login
     * 
     * 
     * @public
     * 
     */
    addWeiboLogin(opt: sinaOAuth) {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            sina: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    /**
     * 
     * 谷歌登陆
     * 
     * @public
     */
    addGoogleLogin(opt: googleOAuth) {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            google: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)

        return this
    }

    /**
     * 
     * @public
     */
    addFacabookLogin(opt: faceBookOAuth) {

        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    OAuth: {}
                },
                distribute: {
                    sdkConfigs: {
                        oauth: {
                            facebook: opt
                        }
                    }
                }
            }
        }

        this.config = defaultsDeep(this.config, h)

        return this
    }
}