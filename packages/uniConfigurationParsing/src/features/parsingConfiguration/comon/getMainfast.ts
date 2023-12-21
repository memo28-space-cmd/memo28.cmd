/*
 * @Author: @memo28.repo
 * @Date: 2023-12-21 14:15:31
 * @LastEditTime: 2023-12-21 14:18:48
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/comon/getMainfast.ts
 */

import { UniConfigurationParsingOptions } from "../../configuration";


export class ManiFest {

    private config: Partial<UniConfigurationParsingOptions> = {}

    setMainFast(config: Partial<UniConfigurationParsingOptions>) {
        this.config  = config
        return this
    }

    getMainFast() {
        return this.config
    }
}