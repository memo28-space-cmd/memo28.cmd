/*
 * @Author: @memo28.repo
 * @Date: 2023-12-29 10:22:55
 * @LastEditTime: 2024-05-20 10:13:22
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/index.ts
 */
import { getDebugger, setDebugger } from './features/rules/debugger'
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
    definePageConfig, getDebugger, getMode, setDebugger
}

