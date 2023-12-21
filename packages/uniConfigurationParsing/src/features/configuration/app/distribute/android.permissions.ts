/*
 * @Author: @memo28.repo
 * @Date: 2023-12-20 10:25:24
 * @LastEditTime: 2023-12-20 23:17:06
 * @Description: 
 * @FilePath: /cmdRepo/packages/uniConfigurationParsing/src/features/configuration/app/distribute/android.permissions.ts
 */


// TODO: 广告模块待补全  (https://uniapp.dcloud.net.cn/tutorial/app-permission-android.html#uni-ad)

/**
 * 
 * 安卓 默认权限
 * 
 * @public
 * 
 */
export const androidDefaultPermissions = [
    "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\"/>",
    "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\"/>",
    "<uses-permission android:name=\"android.permission.VIBRATE\"/>",
    "<uses-permission android:name=\"android.permission.READ_LOGS\"/>",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>",
    "<uses-feature android:name=\"android.hardware.camera.autofocus\"/>",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
    "<uses-permission android:name=\"android.permission.CAMERA\"/>",
    "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\"/>",
    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\"/>",
    "<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>",
    "<uses-permission android:name=\"android.permission.FLASHLIGHT\"/>",
    "<uses-feature android:name=\"android.hardware.camera\"/>",
    "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
]


/**
 * 
 * 低功耗蓝牙配置
 * 
 * @public
 */
export const bluetooth = [
    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
    "<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
]

/**
 * 
 * 通讯录
 * 
 * @public
 * 
 */
export const contact = [
    "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
    "<uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>",
    "<uses-permission android:name=\"android.permission.READ_CONTACTS\"/>"
]

/**
 * 
 * 指纹识别
 * 
 * @public
 * 
 */
export const fingerprint = [
    "<uses-permission android:name=\"android.permission.USE_FINGERPRINT\"/>"
]

/**
 * 
 * 实人认证
 * 
 * @public
 * 
 */
export const facialRecognitionVerify = [
    "<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.CAMERA\" />",
    "<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
    "<uses-permission android:name=\"android.permission.FOREGROUND_SERVICE\" />",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
    "<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />"
]

/**
 * 
 * 摇一摇
 * 
 * @public
 * 
 */
export const iBeacon = [
    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
    "<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
]

/**
 * 
 * 高德地图
 * 
 * @public
 */
export const scottMaps = [
    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_LOCATION_EXTRA_COMMANDS\" />",
    "<uses-permission android:name=\"android.permission.BLUETOOTH\" />",
    "<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />"
]

/**
 * 
 * 百度地图
 * 
 * @public
 */

export const bdMaps = [
    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
    "<uses-permission android:name=\"android.permission.INTERNET\"/>",
    "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\" />",
    "<uses-permission android:name=\"android.permission.READ_LOGS\" />",
    "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
]

/**
 * 短彩邮件消息
 * 
 * @public
 */
export const messaging = [
    "<uses-permission android:name=\"android.permission.RECEIVE_SMS\"/>",
    "<uses-permission android:name=\"android.permission.SEND_SMS\"/>",
    "<uses-permission android:name=\"android.permission.WRITE_SMS\"/>",
    "<uses-permission android:name=\"android.permission.READ_SMS\"/>"
]

/**
 * 
 * 微信登陆
 * 
 * @public
 */
export const wxOAuth = [
    "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
]

/**
 * qq登陆
 * 
 * @public
 */
export const qqOAuth = [
    "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
]


/**
 * 
 *  支付宝支付
 * 
 *  @public
 */

export const alipay = [
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />"
]

/**
 * 
 * 微信支付
 * 
 * @public
 */

export const wxPay = [
    "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
]


/**
 * 
 * 消息推送
 * 
 * @public
 */
export const uniPush = [
    // <!--个推通道必需权限  权限说明：  https://docs.getui.com/getui/question/sdk/ -->
    "<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
    "<uses-permission android:name=\"android.permission.VIBRATE\" />",
    "<uses-permission android:name=\"android.permission.GET_TASKS\" />",
    // <!--个推通道 可选权限 用于电子围栏  -->
    "<uses-permission android:name=\"android.permission.BLUETOOTH\" />（可选）",
    "<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />（可选）",
    "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />（可选）",
    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />（可选）",
    // <!--厂商通道必需权限  小米-->
    "<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_ADDED\" />",
    "<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_CHANGED\" />",
    "<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_INSTALL\" />",
    "<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_REPLACED\" />",
    "<uses-permission android:name=\"android.permission.RESTART_PACKAGES\" />",
    "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
    // <!--厂商通道必需权限  魅族-->
    "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\" />",
    // <!--厂商通道必需权限 华为-->
    "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\" />"
]

/**
 * 
 * 微信分享
 * 
 * @public
 */
export const wxShare = [
    "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
]

/**
 * 
 * qq 分享
 * 
 * @public
 */
export const qqShare = [
    "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
]

/**
 * 
 * 微博分享
 * 
 * @public
 * 
 */

export const weiBoShare = [
    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
]


/**
 * 
 * 百度语音识别
 * 
 * @public
 * 
 */
export const baiduSpeechRecognition = [
    "<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
    "<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
    "<uses-permission  android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
]


/**
 * 
 * 讯飞语音识别
 * 
 * @public
 */

export const IFLYTEKSpeechRecognition = [
    "<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
    "<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
]

/**
 * 
 * 友盟统计 
 * 
 * @public
 */

export const friendlyLeagueStatistics = [
    "<uses-permission android:name=\"android.permission.READ_LOGS\" />",
    "<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
    "<uses-permission android:name=\"android.permission.RECEIVE_USER_PRESENT\" />"
]

/**
 * 
 * 
 * uniAd 穿山甲 & GroMore 广告联盟
 * 
 * @public
 */

export const uniAdPangolin = [
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
    "<uses-permission android:name=\"android.permission.INTERNET\"/>",
    "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\"/>",
    "<uses-permission android:name=\"android.permission.SYSTEM_ALERT_WINDOW\"/>",
    "<uses-permission android:name=\"android.permission.VIBRATE\"/>",
    "<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\"/>",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>",
    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\"/>",
    "<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>"

]

/**
 * 
 * 腾讯优量汇广告联盟
 * 
 * @public
 * 
 */

export const tencentAdvertising = [
    "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
    "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\" />",
    "<uses-permission android:name=\"android.permission.QUERY_ALL_PACKAGES\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
    "<uses-permission android:name=\"android.permission.REORDER_TASKS\" />",
    "<uses-permission android:name=\"android.permission.VIBRATE\" />",
]

