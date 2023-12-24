/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 21:01:42
 * @LastEditTime: 2023-12-24 21:01:21
 * @Description:
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/main.ts
 */
import { program } from 'commander';
import { existsSync, readFileSync, writeFile } from 'fs';
import { resolve } from 'path';
import * as ts from 'typescript';
import { setMode } from './features/userProvidesHelpAssistant/mode';


// @ts-ignore
import pkg from '../package.json';


program
    .description("通过强大的代码提示、类型检查，以及模块化配置，改善 manifest.json 文件的编写体验，提高开发效率。")
    .version(pkg.version);


const rootMutConfigPathTs = resolve('./mut.config.ts')

const rootMutConfigPathJs = resolve('./mut.config.js')

const manifestPath = resolve('./manifest.json')

program
    .command('dev')
    .description("一watch方式启动观察配置文件变化")
    .option("--p <chat>", "修改配置文件路径")
    .option("--m <chat>", "定义模式。--m=dev , --m=prod")
    .action((str, options) => {

        if (str.m) {
            console.log("mode: ", str.m)
            setMode(str.m)
        }

        let path = str.p ? resolve(str.p) : rootMutConfigPathTs
        if (!existsSync(path)) {
            if (!existsSync(rootMutConfigPathJs)) {
                console.log('未发现配置文件')
                return
            } else {
                path = rootMutConfigPathJs
            }
        }

        console.log(`发现配置文件 => ${path}`)

        const fileContent = readFileSync(path, 'utf-8')

        const result = ts.transpileModule(fileContent, {
            compilerOptions: {
                module: ts.ModuleKind.CommonJS
            }
        })


        const r = eval(result.outputText)

        const content = JSON.stringify(r, null, 2)


        writeFile(manifestPath, content, 'utf-8', (err) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log("写入成功!")
            }
        })

    })


program.parse()

