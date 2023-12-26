
export interface PushV2 {
    /**
     *
     * 离线推送
     *
     * @public
     *
     */
    offline: boolean
    /**
     * 华为推送
     *
     * @public
     */
    "hms" : {},
    /**
     * oppo 推送
     *
     * @public
     */
    "oppo" : {},
    /**
     *
     * vivo 推送
     *
     * @public
     */
    "vivo" : {},
    /**
     *
     * 小米推送
     *
     * @public
     */
    "mi" : {},
    /**
     *
     * 魅族
     *
     * @public
     */
    "meizu" : {},
    /**
     *
     * google FCM 推送
     *
     * @public
     */
    "fcm" : {}


}

export interface PushV1 {
    /**
     *
     * 推送小图标配置
     *
     * @public
     *
     */
    icons: {
        small: {
            /**
             *
             * 18 * 18
             *
             * @public
             *
             */
            ldpi: string
            /**
             *
             * 24 * 24
             *
             * @public
             *
             */
            mdpi: string
            /**
             *
             * 36 * 36
             *
             * @public
             *
             */
            hdpi: string
            /**
             *
             * 48 * 48
             *
             * @public
             *
             */
            xhdpi: string
            /**
             *
             * 72 * 72
             *
             *
             * @public
             */
            xxhdpi: string

        }

    }
}
