/*
 * @Author: @memo28.repo
 * @Date: 2024-02-11 19:57:46
 * @LastEditTime: 2024-02-11 20:05:05
 * @Description: 
 * @FilePath: /cmdRepo/packages/error/__test__/pathEmpty.test.ts
 */

import { resolve } from 'path';
import { describe, expect, it } from 'vitest';
import { verifyPathExistsSync } from '../src/index';

describe("verifyPathExistsSync", () => {

    it("have dir", () => {
        const path = verifyPathExistsSync({ packageName: "package", field: "field" }, [resolve("./__test__")])?.[0]
        expect(path).not.toBeUndefined()
    })

    it("not find dir", () => {
        expect(() => {
            verifyPathExistsSync({ packageName: "package", field: "field" }, [resolve("../__test__")])?.[0]
        }).toThrowError()
    })
})