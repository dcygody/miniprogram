//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: '你好 傻狗',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        name: 'DCY',
        students: [{
                id: 110,
                name: '老王',
                age: 23
            },
            {
                id: 111,
                name: '老李',
                age: 24
            },
            {
                id: 112,
                name: '老六',
                age: 25
            },
            {
                id: 113,
                name: '老吴',
                age: 26
            }
        ],
        counter: 0
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    //点击按钮
    handlerBthClickPlu() {
        //错误做法
        //this.data.counter += 1
        //console.log(this.data.counter)

        this.setData({
            counter: this.data.counter + 1
        })
    },

    handlerBthClickSub() {
        this.setData({
            counter: this.data.counter - 1
        })
    }
})

//编程范式
//1. 命令式编程
//2.声明式编程