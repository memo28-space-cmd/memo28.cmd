/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 10:04:10
 * @LastEditTime: 2023-12-20 10:19:54
 * @Description:  解析版本号
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/parsingConfiguration/parseVersion.ts
 */

import { UniConfigurationParsingOptions } from "../configuration";

/**
 * 解析版本号
 * 
 * @public
 */
export class ParseVersion {

    constructor(private opt: UniConfigurationParsingOptions) {

    }

    /**
     * 
     * 版本号 或者 版本名 都为空时
     * 
     * @public
     * 
     */
    private neitherNameNorCodeIsEmpty(): Partial<UniConfigurationParsingOptions> {
        if (!this.opt.versionCode && !this.opt.versionName) {
            return {
                versionCode: 1,
                versionName: '0.0.1'
            }
        }
        return {}
    }

    /**
     * 
     * 版本名不为空
     * 
     * @returns 
     */
    private versionNumberNotEmpty(): Partial<UniConfigurationParsingOptions> {
        if (this.opt.versionCode && !this.opt.versionName) {
            const name = `${this.opt.versionCode}`
            let finalyName = ''
            for (const iterator of name) {
                finalyName += `${iterator}.`
            }

            return {
                versionCode: this.opt.versionCode,
                versionName: finalyName.substring(0, finalyName.length - 1)
            }
        }
        return {}
    }


    done(): Partial<UniConfigurationParsingOptions> {
        if (this.opt.versionCode && !this.opt.versionName) return this.versionNumberNotEmpty()
        return this.neitherNameNorCodeIsEmpty()
    }

}