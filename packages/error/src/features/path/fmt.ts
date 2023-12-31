import {Package} from "../common/package";
import {pathOptions} from "./pathEmpty";

export function fmtPackagePath(opt: Package & pathOptions) {
    return `${opt.packageName}: ${opt.field}字段`
}
