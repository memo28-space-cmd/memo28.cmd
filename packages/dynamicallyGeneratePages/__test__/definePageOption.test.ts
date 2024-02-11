/*
 * @Author: @memo28.repo
 * @Date: 2024-02-11 20:08:47
 * @LastEditTime: 2024-02-11 20:12:33
 * @Description: 
 * @FilePath: /cmdRepo/packages/dynamicallyGeneratePages/__test__/definePageOption.test.ts
 */

import { describe, expect, it } from 'vitest';
import { definePageConfig, definePageOptions } from '../src/index';

describe('definePageConfig', () => {

    it('should return the default page config when no options are provided', () => {
        const result = definePageConfig({});
        expect(result).toEqual({
            pages: {
                style: {
                    "app-plus": {},
                    h5: {}
                }
            }
        });
    });

    it('should return the merged page config when options are provided', () => {
        const options: definePageOptions = {
            pages: {
                style: {
                    "app-plus": {
                        backgroundColor: 'red'
                    },
                    h5: {
                        backgroundColor: 'blue'
                    }
                }
            }
        };
        const result = definePageConfig(options);
        expect(result).toEqual({
            pages: {
                style: {
                    "app-plus": {
                        backgroundColor: 'red'
                    },
                    h5: {
                        backgroundColor: 'blue'
                    }
                }
            }
        });
    });
});