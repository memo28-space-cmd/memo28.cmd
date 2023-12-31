import {Package} from "../common/package";
import {pathOptions} from "./pathEmpty";
import {verifyPathEmpty} from './pathEmpty'
import {fmtPackagePath} from "./fmt";
import {globSync} from 'glob'

type pathExistsSyncOptions = {
} & Package & pathOptions

export class ThrowPathExistsSync extends Error {
    constructor(private msg: string) {
        super(msg);
    }
}

export function verifyPathExistsSync(opt: pathExistsSyncOptions, path?: string[]): string[] {
    verifyPathEmpty(opt, path)

    const pathList = globSync(path || [], {ignore: 'node_modules/**'})

    if (!pathList.length) {
        //  路径文件不存在
        throw new ThrowPathExistsSync(`${fmtPackagePath(opt)}路径文件不存在 -> ${path}`)
    }

    return pathList
}
