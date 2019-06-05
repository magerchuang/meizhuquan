// pages/push/push.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    frontCamera: true,
    cameraContext: {},
    pushUrl: "",
    mode: "SD",
    muted: false,
    enableCamera: true,
    orientation: "vertical",
    beauty: 6.3,
    whiteness: 3.0,
    backgroundMute: false,
    debug: false,
    headerHeight: app.globalData.headerHeight,
    statusBarHeight: app.globalData.statusBarHeight,
  },
  onSwitchCameraClick: function () {
    this.data.frontCamera = !this.data.frontCamera;
    this.setData({
      frontCamera: this.data.frontCamera
    })
    this.data.cameraContext.switchCamera();
  },
  onBeautyClick: function () {
    if (this.data.beauty != 0) {
      this.data.beauty = 0;
      this.data.whiteness = 0;
    } else {
      this.data.beauty = 6.3;
      this.data.whiteness = 3.0;
    }

    this.setData({
      beauty: this.data.beauty,
      whiteness: this.data.whiteness
    })
  },
  onLogClick: function () {
    this.setData({
      debug: !this.data.debug
    })
  },
  onMuteClick: function () {
    this.setData({
      muted: !this.data.muted
    })
  },
  onPushEvent: function (e) {
    console.log(e.detail.code);

    if (e.detail.code == -1307) {
      this.stop();
      wx.showToast({
        title: '推流多次失败',
      })
    }
  },

  stop: function () {
    this.setData({
      playing: false,
      pushUrl: "",
      mode: "SD",
      muted: false,
      enableCamera: true,
      orientation: "vertical",
      beauty: 6.3,
      whiteness: 3.0,
      backgroundMute: false,
      debug: false
    })
    this.data.cameraContext.stop();
  },

  createContext: function () {
    var self = this;
    this.setData({
      cameraContext: wx.createLivePusherContext('camera-push'),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    this.setData({
      mode: "SD",
      orientation: "vertical",
      enableCamera: true,
      pushUrl: 'rtmp://47125.livepush.myqcloud.com/live/2?txSecret=cdf8a46fadde9759ccccb9e4dfd2acf6&txTime=5CC47C7F',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onLoad onReady");
    //this.createContext();
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onLoad onShow");
    // 保持屏幕常亮
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onLoad onHide");

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onLoad onUnload");
    this.stop();

    wx.setKeepScreenOn({
      keepScreenOn: false,
    })
  },


  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {
  //   console.log("onLoad onShareAppMessage");
  //   return {
  //     // title: 'RTMP推流',
  //     // path: '/pages/push/push',
  //     path: 'rtmp://47125.livepush.myqcloud.com/live/aeb7338f4b?bizid=47125&txSecret=7e43919a77bc52a9edf89d0f51f5a7d9&txTime=5CC47C7F',
  //     imageUrl: 'https://mc.qcloudimg.com/static/img/dacf9205fe088ec2fef6f0b781c92510/share.png'
  //   }
  // },
  onBack: function () {
    wx.navigateBack({
      delta: 1
    });
  },
  startPush: function () {
    var self = this;
    // 防止两次点击操作间隔太快
    var nowTime = new Date();
    if (nowTime - this.data.tapTime < 1000) {
      return;
    }
    if (!self.data.pushUrl || self.data.pushUrl.indexOf("rtmp://") != 0) {
      wx.showModal({
        title: '提示',
        content: '推流地址不合法，请点击自动生成按钮先获取腾讯云推流地址',
        showCancel: false
      });
      return;
    }
    
    this.setData({
      'tapTime': nowTime,
      cameraContext: wx.createLivePusherContext('camera-push'),
    }, () => {
      self.data.cameraContext.start();
    })
  }
})