/*
 * @Author: @memo28.repo
 * @Date: 2023-12-22 16:36:04
 * @LastEditTime: 2023-12-22 17:11:37
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/app/distribute/android.permissions.config.pay.ts
 */
import defaultsDeep from 'lodash.defaultsdeep';
import { alipay, wxPay as wxPayPermissions } from '../../../configuration/app/distribute';
import { aliPay, paypalPay, stripePay, wxPay } from '../../../configuration/app/distribute/pay';
import { UniConfigurationParsingOptions } from '../../../configuration/index';
import { Permissions } from './permissions';

export type userAndroidPermissionsConfigPay = Omit<AndroidPermissionsConfigPay, 'permissions' | 'getConfig'>

export class AndroidPermissionsConfigPay {
    permissions: Permissions = new Permissions()
    private config: Partial<UniConfigurationParsingOptions> = {}

    getConfig() {
        return this.config
    }

    addApplePay() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    "Payment": {}
                },
                distribute: {
                    sdkConfigs: {
                        payment: {
                            appleiap: {}
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }


    addAliPay(opt: aliPay) {
        this.permissions.push(alipay)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    "Payment": {}
                },
                distribute: {
                    sdkConfigs: {
                        payment: {
                            alipay: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    addWxPay(opt: wxPay) {
        this.permissions.push(wxPayPermissions)
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    "Payment": {}
                },
                distribute: {
                    sdkConfigs: {
                        payment: {
                            weixin: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    addPaypalPay(opt: paypalPay) {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    "Payment": {}
                },
                distribute: {
                    sdkConfigs: {
                        payment: {
                            paypal: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    addStripePay(opt: stripePay) {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    "Payment": {}
                },
                distribute: {
                    sdkConfigs: {
                        payment: {
                            stripe: opt
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

    addGoolePay() {
        const h: Partial<UniConfigurationParsingOptions> = {
            "app-plus": {
                modules: {
                    "Payment": {}
                },
                distribute: {
                    sdkConfigs: {
                        payment: {
                            google: {}
                        }
                    }
                }
            }
        }
        this.config = defaultsDeep(this.config, h)
        return this
    }

}
