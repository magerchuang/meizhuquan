// pages/user/index/index.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    openId:'',
    Unauthorized:false,
    user: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      version: app.globalData.version,
      userId: app.globalData.userId,
      openId: app.globalData.openId
    })
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.showLoading({
      title: '加载中'
    })
    //获取用户信息
    wx.request({
      method:'POST',
      url: queryUrl + 'my/userInfo',
      data: { userId: that.data.userId },
      success: function (res) {
        wx.hideLoading();
        that.setData({
          user: res.data
        })
        console.log(res.data)
        if (res.data.getAuth) {
          wx.login({
            success: function (res) {
              wx.request({
                url: queryUrl + 'auth/getOpenId',
                data: { code: res.code },
                success: function (res1) {
                  console.log(res1);
                  //app.globalData.openId = res1.data.openid;
                  that.setData({
                    openId: res1.data.openId,
                    sessionKey: res1.data.sessionKey
                  })
                }
              });
            }
          })
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goOne:function(){
    wx.navigateTo({
      url: '../oneself/selfCenter/selfCenter',
    })
  },
  goCom: function () {
    wx.navigateTo({
      url: '../enterprise/center/center',
    })
  },
  goWallet:function(){
    wx.navigateTo({
      url: '../oneself/wallet/wallet',
    })
  },
  getUserInfo: function (e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      //console.log(e.detail.userInfo);
      var that = this;
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          //console.log(res);
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              withCredentials: true,
              success: function (res1) {
                console.log(res1)
                //插入登录的用户的相关信息到数据库
                wx.request({
                  url: queryUrl + 'auth/login',
                  data: {
                    openId: that.data.openId,
                    nickname: res1.userInfo.nickName,
                    headImg: res1.userInfo.avatarUrl,
                    country: res1.userInfo.country,
                    province: res1.userInfo.province,
                    city: res1.userInfo.city,
                    gender: res1.userInfo.gender,
                    encryptedData: res1.encryptedData,
                    iv: res1.iv,
                    sessionKey: that.data.sessionKey
                  },
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (res2) {
                    wx.hideToast();
                    wx.showToast({
                      title: '拉取成功',
                      icon: 'none'
                    });
                    console.log("用户信息更新成功");
                    //获取用户信息
                    wx.request({
                      url: queryUrl + 'user/userInfo',
                      data: { 'userId': that.data.userId },
                      success: function (res3) {
                        that.setData({
                          user: res3.data
                        })
                      }
                    })
                  }
                });
              }
            })
          }
        }
      })

    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '美助圈提醒您',
        content: '您点击了拒绝授权，将无法获取您的头像和昵称！',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
})