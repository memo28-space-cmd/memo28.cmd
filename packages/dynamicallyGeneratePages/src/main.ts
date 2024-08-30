/*
 * @Author: @memo28.repo
 * @Date: 2024-05-19 20:18:31
 * @LastEditTime: 2024-08-30 09:18:06
 * @Description: 
 * @FilePath: /memo28.cmd/packages/dynamicallyGeneratePages/src/main.ts
 */
import { program } from 'commander';
// @ts-ignore
import pkg from '../package.json';
import { dev } from './features/cmd/dev/dev';



program
    .description("生成Pages.json的路由配置")
    .version(pkg.version);

dev()

program.parse()
