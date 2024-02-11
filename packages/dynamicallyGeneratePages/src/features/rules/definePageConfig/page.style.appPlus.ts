/*
 * @Author: @memo28.repo
 * @Date: 2023-12-29 13:16:52
 * @LastEditTime: 2024-02-11 20:10:38
 * @Description: 
 * @FilePath: /cmdRepo/packages/dynamicallyGeneratePages/src/features/rules/definePageConfig/page.style.appPlus.ts
 */
export interface pageStyleAppPlus {
    [key: string]: any
    /**
     *
     * 窗体背景色。无论vue页面还是nvue页面，在App上都有一个父级原生窗体，该窗体的背景色生效时间快于页面里的css生效时间
     *
     * App (vue 页面需要将 body 背景色设为透明)
     */
    background: string


    /**
     *
     * 页面回弹效果，设置为 "none" 时关闭效果。
     *
     * App-vue（nvue Android无页面级bounce效果，仅list、recycle-list、waterfall等滚动组件有bounce效果）
     *
     * @public
     */
    bounce: string

    /**
     *
     *
     * 侧滑返回功能，可选值："close"（启用侧滑返回）、"none"（禁用侧滑返回）
     *
     * App-iOS
     *
     * @public
     *
     */
    popGesture: 'close' | 'none'


    /**
     *
     * iOS软键盘上完成工具栏的显示模式，设置为 "none" 时关闭工具栏。
     *
     * App-iOS
     *
     * @public
     *
     */
    softinputNavBar: 'auto'

    /**
     *
     * App
     *
     * 软键盘弹出模式，支持 adjustResize、adjustPan 两种模式
     *
     * @public
     */
    softinputMode: 'adjustPan' | 'adjustResize'


    /**
     *
     * 下拉刷新
     *
     * @public
     *
     */
    pullToRefresh: {}

    /**
     *
     *
     * 滚动条显示策略，设置为 "none" 时不显示滚动条。
     *
     *
     * @public
     *
     */
    scrollIndicator: string

    /**
     *
     * 窗口显示的动画效果
     *
     * @public
     */
    animationType: 'pop-in'


    /**
     *
     *
     * 窗口显示动画的持续时间，单位为 ms。
     *
     *
     * @defaultValue 300
     *
     * @public
     *
     */
    animationDuration: number
}
