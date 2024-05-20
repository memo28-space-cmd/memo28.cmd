/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:18:31
 * @LastEditTime: 2024-05-20 09:30:27
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/features/parsing/declarativeRouting/combination.ts
 */
import { writeFile, writeFileSync } from 'fs'


export class Combination {

    constructor(private list: string[], private pathIsGenerated?: string) {
    }


    generateContext() {


        let h = ''

        this.list.forEach(c => {
            h += `
            \n
            ${c}
            \n
            `
        })

        return `
        import { SimpleRouteJump } from '@memo28.uni/utils';
        
        export default {
        ${h}
        }
        `

    }


    generate() {
        if (!this.pathIsGenerated?.trim().length) {
            return this
        }

        const content = this.generateContext()

        writeFileSync(this.pathIsGenerated, content, { encoding: 'utf-8' })
        console.log("生成路由文件成功")
    }

}
