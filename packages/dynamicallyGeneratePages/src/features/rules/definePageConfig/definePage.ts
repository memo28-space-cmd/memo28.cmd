import {pages} from "./pages";
import defaultDeep from 'lodash.defaultsdeep'

export interface definePageOptions {
    /**
     *
     *
     * @public
     */
    pages: Partial<Omit<pages, 'path'>>
}

export function definePageConfig(opt: definePageOptions): definePageOptions {
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
