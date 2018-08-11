var app = getApp();
var server = require('../../utils/server');
//var imgSrc1 = require("/images/a2.png");
Page({
	data: {},
	onLoad: function () {
	},
	onShow: function () {
		this.setData({
			userInfo: app.globalData.userInfo
		});
	},

  onTap: function () {
    wx:wx.navigateTo({       //可以返回
      url: '/page/mine/er',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });

    // wx: wx.redirectTo({        //不可以返回
    //   url: '../posts/post',
    //   // success: function(res) {},
    //   // fail: function(res) {},
    //   // complete: function(res) {},
    // })
  },


});

// Page({
//   data: {
//     imgSrc: "/images/a2.png"
//   }
// })