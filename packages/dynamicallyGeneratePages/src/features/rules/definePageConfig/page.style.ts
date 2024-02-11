import { pageStyleAppPlus } from "./page.style.appPlus";
import { pageStyleH5 } from "./page.style.h5";
import { pageStyleWeixin } from "./page.style.weixin";

export interface PageStyle {
    /**
     *
     * 该配置只对主包生效用于定义路由的列表顺序
     *
     * 索引值越大 越靠前
     *
     * @public
     *
     */
    orderIndex: number
    /**
     *
     * 导航栏标题文字内容
     *
     * @public
     */
    navigationBarTitleText: string
    /**
     *
     *    是否开启下拉刷新，详见[页面生命周期](https://uniapp.dcloud.net.cn/tutorial/page#lifecycle)。
     *
     * 是否开启下拉刷新
     *
     * @public
     */
    enablePullDownRefresh: boolean
    /**
     *
     * 导航栏背景颜色（同状态栏背景色）
     *
     * APP与H5为#F8F8F8，小程序平台请参考相应小程序文档
     *
     * @public
     */
    navigationBarBackgroundColor: string

    /**
     *
     * 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
     *
     * @public
     */
    navigationBarTextStyle: 'black' | 'white'

    /**
     *
     * 导航栏阴影，配置参考下方
     *
     * @public
     */
    navigationBarShadow: {}

    /**
     *
     * 导航栏样式，仅支持 default/custom。custom即取消默认的原生导航栏
     *
     * 微信小程序 7.0+、百度小程序、H5、App（2.0.3+）
     *
     * @public
     */
    navigationStyle: 'default' | 'custom'

    /**
     *
     * 微信小程序（iOS）、百度小程序（iOS）
     *
     *
     * 设置为 true 则页面整体不能上下滚动（bounce效果），只在页面配置中有效，在globalStyle中设置无效
     *
     * @defaultValue false
     *
     * @public
     */
    disableScroll: boolean

    /**
     *
     * 微信小程序、百度小程序、抖音小程序、飞书小程序、京东小程序
     *
     * 窗口的背景色
     *
     * @public
     *
     */
    backgroundColor: string


    /**
     *
     * 下拉 loading 的样式，仅支持 dark/light
     *
     * @public
     *
     */
    backgroundTextStyle: 'dark' | 'light'

    /**
     *
     * 页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](https://uniapp.dcloud.net.cn/tutorial/page#lifecycle)
     *
     * @defaultValue 50
     *
     * @public
     */
    onReachBottomDistance: number


    /**
     *
     * 顶部窗口的背景色（bounce回弹区域） 仅 iOS 平台
     *
     * @public
     */
    backgroundColorTop: string

    /**
     *
     * 底部窗口的背景色（bounce回弹区域）
     *
     * 仅 iOS 平台
     *
     * @public
     */
    backgroundColorBottom: string


    /**
     *
     * 是否禁用滑动返回
     *
     * @defaultValue false
     *
     * @public
     */
    disableSwipeBack: boolean


    /**
     *
     * 支付宝小程序、H5、App
     *
     *
     * 导航栏图片地址（替换当前文字标题），支付宝小程序内必须使用https的图片链接地址
     *
     *
     * @public
     */
    titleImage: string


    /**
     *
     * 支付宝小程序、H5、APP
     *
     * 导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明
     *
     * @defaultValue none
     *
     * @public
     *
     */
    transparentTitle: string


    /**
     *
     * 支付宝小程序、H5
     *
     * 导航栏点击穿透
     *
     * @public
     */
    titlePenetrate: string

    /**
     *
     * 设置编译到 App 平台的特定样式，配置项参考下方 app-plus
     *
     * @public
     *
     */
    'app-plus': Partial<pageStyleAppPlus>


    /**
     *
     *
     * 设置编译到 H5 平台的特定样式，配置项参考下方 H5
     *
     * @public
     *
     */
    'h5': Partial<pageStyleH5>
    /**
     *
     * 设置编译到 mp-alipay 平台的特定样式，配置项参考下方 MP-ALIPAY
     *
     * @public
     *
     */
    'mp-alipay': {
        [key: string]: any
    }

    /**
     *
     * 设置编译到 mp-weixin 平台的特定样式
     *
     * @public
     *
     */
    'mp-weixin': pageStyleWeixin


    /**
     *
     * 设置编译到 mp-baidu 平台的特定样式
     *
     * @public
     *
     */
    'mp-baidu': {
        [key: string]: any
    }

    /**
     *
     * 设置编译到 mp-toutiao 平台的特定样式
     *
     * @public
     *
     */
    'mp-toutiao': {
        [key: string]: any
    }

    /**
     *
     * 设置编译到 mp-lark 平台的特定样式
     *
     * @public
     *
     */
    'mp-lark': {
        [key: string]: any
    }

    /**
     *
     * 设置编译到 mp-qq 平台的特定样式
     *
     * @public
     *
     */
    'mp-qq': {
        [key: string]: any
    }

    /**
     *
     * 设置编译到 mp-kuaishou 平台的特定样式
     *
     * @public
     */
    'mp-kuaishou': {
        [key: string]: any
    }
    /**
     *
     * @public
     */
    'mp-jd': {
        [key: string]: any
    }


    /**
     *
     * 引用小程序组件，参考 小程序组件
     *
     * @public
     *
     */
    usingComponents: {}


    /**
     *
     * 当存在 leftWindow时，当前页面是否显示 leftWindow
     *
     * @public
     *
     */
    leftWindow: boolean

    /**
     *
     * 当存在 topWindow 时，当前页面是否显示 topWindow
     *
     * @public
     */
    topWindow: boolean


    /**
     *
     * H5
     *
     * 当存在 rightWindow时，当前页面是否显示 rightWindow
     *
     * @defaultValue true
     *
     * @public
     */
    rightWindow: boolean


    /**
     *
     * H5（2.9.9+）
     *
     * 单位px，当浏览器可见区域宽度大于maxWidth时，两侧留白，当小于等于maxWidth时，页面铺满；不同页面支持配置不同的maxWidth；maxWidth = leftWindow(可选)+page(页面主体)+rightWindow(可选)
     *
     * @public
     */
    maxWidth: number


}
