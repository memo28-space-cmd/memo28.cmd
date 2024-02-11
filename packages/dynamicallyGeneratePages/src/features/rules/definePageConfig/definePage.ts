/*
 * @Author: @memo28.repo
 * @Date: 2023-12-29 12:41:15
 * @LastEditTime: 2024-02-11 20:12:27
 * @Description: 
 * @FilePath: /cmdRepo/packages/dynamicallyGeneratePages/src/features/rules/definePageConfig/definePage.ts
 */

import defaultDeep from 'lodash.defaultsdeep';
import { pages } from "./pages";

export interface definePageOptions {
    /**
     *
     *
     * @public
     */
    pages: Partial<Omit<pages, 'path'>>
}

export function definePageConfig(opt?: Partial<definePageOptions>): definePageOptions {
    const h: definePageOptions = {
        pages: {
            style: {
                "app-plus": {},
                h5: {}
            }
        }
    }
    return defaultDeep(opt, h)
}
