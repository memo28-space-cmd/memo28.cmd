/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 10:32:33
 * @LastEditTime: 2023-12-24 20:31:32
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/common/generalConfiguration.ts
 */

import { UniConfigurationParsingOptions } from ".."

export interface eachSideGeneralConfiguration {
    usingComponents?: boolean
}

export interface userConfigurationAlternativePath {
    [key: string]: any

    /**
     * 配置替换路径 用户忽略
     * @public
     */
    configureAlternatePath: Partial<UniConfigurationParsingOptions>
}