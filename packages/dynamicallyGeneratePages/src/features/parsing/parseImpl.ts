/**
 *
 * 解析实现
 *
 * @public
 *
 */
export abstract class ParseImpl {

    /**
     *
     * 判断 WhetherMakeUpTheConfig 参数 补齐 dycPage.config.ts  文件
     *
     * @public
     *
     */
    abstract verifyWhetherMakeUpTheConfigHandler(): this

    /**
     *
     * 更新
     *
     * @public
     */
    abstract updatePagesHandler(): this


    /**
     *
     *
     * 新增页面 pages 配置
     *
     * @public
     *
     */
    abstract increasePagesHandler(): this
}
