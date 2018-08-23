//const AV = require('./libs/av-weapp-min.js');
const AV = require("/utils/av-weapp-min.js");

//初始化 id 和 key  这个俩个跟网路服务气有关 没了服务器项目有唯一的id和key
AV.init({
  appId: 'wII1QlmcVtP8TeRKa8AqFxpT-gzGzoHsz',
  appKey: 'iAN0ahWpO1kyNOJELpeMLgMB',
});

console.log(AV);

//app.js
App({

  onLoad: function() {
    //用户系统 即用用户信息登陆 前提在服务器上写上自己的  AppID和AppSecret
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
    }).catch(console.error);

  },

  onLaunch: function() {


    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})