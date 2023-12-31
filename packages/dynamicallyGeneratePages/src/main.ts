import {program} from 'commander';
// @ts-ignore
import pkg from '../package.json';
import {dev} from './features/cmd/dev/dev'


program
    .description("生成Pages.json的路由配置")
    .version(pkg.version);

dev()

program.parse()
