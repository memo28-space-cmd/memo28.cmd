
/**
 *
 * @see https://uniapp.dcloud.net.cn/collocation/pages#h5
 *
 * @public
 *
 */
export interface pageStyleH5 {
    titleNView: Partial<pageStyleH5WithTitleNView>
    pullToRefresh: Partial<pageStyleH5WithPullToRefresh>
}

interface pageStyleH5WithTitleNView {
    /**
     * 背景颜色，颜色值格式为"#RRGGBB"。
     *
     * @public
     */
    backgroundColor: string

    /**
     * 自定义按钮，参考 buttons
     *
     * @public
     */
    buttons: Partial<{
        /**
         *
         *
         * 按钮样式，可取值见：buttons 样式
         *
         * 使用 type 值设置按钮的样式时，会忽略 fontSrc 和 text 属性。
         *
         * @defaultValue none
         *
         * @public
         *
         */
        type: 'forward' | 'back' | 'share' | 'favorite' | 'home' | 'menu' | 'close' | 'none'
        /**
         *
         * 默认与标题文字颜色一致
         *
         * 按钮上文字颜色
         *
         * @public
         *
         */
        color: string

        /**
         *
         *
         * 默认值为灰色半透明
         *
         * 按钮的背景颜色，仅在标题栏type=transparent时生效
         *
         * @public
         *
         */
        background: string

        /**
         *
         * 按钮上显示的角标文本，最多显示3个字符，超过则显示为...
         *
         * @public
         */
        badgeText: string

        /**
         * 按钮在标题栏上的显示位置，可取值"left"、"right"
         *
         * @defaultValue right
         *
         * @public
         *
         */


        float: 'left' | 'right'

        /**
         *
         * 按钮上文字的粗细。可取值"normal"-标准字体、"bold"-加粗字体。
         *
         * @public
         */
        fontWeight: 'normal' | 'bold'

        /**
         *
         * 按钮上文字大小
         *
         * @public
         */
        fontSize: string

        /**
         *
         * 按钮上文字使用的字体文件路径。
         *
         * @public
         *
         */
        fontSrc: string

        /**
         *
         * 是否显示选择指示图标（向下箭头）
         *
         * @defaultValue false
         *
         * @public
         *
         */
        select: boolean
        /**
         *
         * 按钮上显示的文字。使用字体图标时 unicode 字符表示必须 '\u' 开头，如 "\ue123"（注意不能写成"\e123"）。
         *
         * @public
         *
         */
        text: string

        /**
         *
         * 按钮的宽度，可取值： "*px" - 逻辑像素值，如"10px"表示10逻辑像素值，不支持rpx，按钮的内容居中显示； "auto" - 自定计算宽度，根据内容自动调整按钮宽度
         *
         * @defaultValue 44px
         *
         * @public
         */
        width: string
    }>[]

    /**
     * 标题文字颜色
     *
     * @public
     */
    titleColor: string


    /**
     *
     * 标题文字内容
     *
     * @public
     */
    titleText: string

    /**
     *
     * 标题文字字体大小
     *
     * @public
     */
    titleSize: string

    /**
     *
     * 导航栏样式。"default"-默认样式；"transparent"-透明渐变。
     *
     * @public
     */
    type: 'default' | 'transparent'

    /**
     *
     *
     * 导航栏上的搜索框样式，详见 [searchInput](https://uniapp.dcloud.net.cn/collocation/pages#h5-searchinput)
     *
     * 如果 h5 节点没有配置，默认会使用 app-plus 下的配置。
     *
     * 配置了 h5 节点，则会覆盖 app-plus 下的配置。
     *
     *
     * @public
     *
     */
    searchInput: Partial<{
        /**
         *
         * 是否自动获取焦点
         *
         * @defaultValue false
         *
         * @public
         *
         */
        autoFocus: boolean


        /**
         *
         * 非输入状态下文本的对齐方式。可取值： "left" - 居左对齐； "right" - 居右对齐； "center" - 居中对齐。
         *
         * @public
         */
        align: 'center' | 'left' | 'right'

        /**
         *
         * 背景颜色
         *
         * @public
         */
        backgroundColor: string

        /**
         *
         * 输入框的圆角半径，取值格式为"XXpx"，其中XX为像素值（逻辑像素），不支持rpx。
         *
         * @defaultValue 0px
         *
         * @public
         *
         */
        borderRadius: string


        /**
         *
         * 提示文本
         *
         * @public
         *
         */
        placeholder: string


        /**'
         *
         * 提示文本颜色
         *
         * @public
         *
         */
        placeholderColor: string

        /**
         *
         * 是否可输入
         *
         * @defaultValue false
         *
         * @public
         */
        disabled: boolean
    }>
}

interface pageStyleH5WithPullToRefresh {
    /**
     *
     * 颜色值格式为"#RRGGBB"
     *
     * @defaultValue #2BD009
     *
     *
     * @public
     */
    color: string
    /**
     *
     * 下拉刷新控件的起始位置。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。
     *
     * @public
     *
     */
    offset: string
}

