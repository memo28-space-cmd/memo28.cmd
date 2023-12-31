import {Package} from "../common/package";

export interface pathOptions {
    field: string
}

export class ThrowPathEmpty extends Error {
    constructor(private msg: string) {
        super(msg);
    }
}

/**
 *
 * 验证路径为字符串时是否为空
 *
 * @param opt - 传入包配置和字段
 * @param path - 传入路径
 *
 * @public
 */
export function verifyPathEmpty(opt: Package & pathOptions, path: string[] = []): void {
    for (let i = 0; i < path?.length; i++) {
        const cur = path[i]
        if (!cur?.trim().length) {
            throw new ThrowPathEmpty(`${opt.packageName}: ${opt.field}字段：路径不能为空`)
        }
    }
}
