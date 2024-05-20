/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:43:51
 * @LastEditTime: 2024-05-19 20:44:54
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/features/rules/debugger.ts
 */

let debuggerTrigger = false

export function getDebugger() {
    return debuggerTrigger
}

export function setDebugger(debug: boolean) {
    debuggerTrigger = debug
}


