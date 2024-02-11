/*
 * @Author: @memo28.repo
 * @Date: 2023-12-29 10:22:55
 * @LastEditTime: 2024-02-11 20:15:23
 * @Description: 
 * @FilePath: /cmdRepo/packages/dynamicallyGeneratePages/src/index.ts
 */
import type { defineConfigTypes } from './features/rules/defineConfig'
import { defineConfig } from './features/rules/defineConfig'
import type { definePageOptions } from './features/rules/definePageConfig/definePage'
import { definePageConfig } from './features/rules/definePageConfig/definePage'
import { getMode } from './features/rules/mode'

export type {
    defineConfigTypes,
    definePageOptions
}

export {
    defineConfig,
    definePageConfig, getMode
}

