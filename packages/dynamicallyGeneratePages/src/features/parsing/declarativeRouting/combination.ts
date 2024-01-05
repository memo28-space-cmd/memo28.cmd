import {writeFile} from 'fs'


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


        writeFile(this.pathIsGenerated, content, 'utf-8', (err) => {

            if (err) {
                console.log("生成路由文件失败:", err.message)
            } else {
                console.log("生成路由文件成功")
            }
        })
    }

}
