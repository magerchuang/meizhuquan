// pages/enterprise/camerademo/camerademo.js
var timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startrecord: true,
    camera: "back",
    picture: '',
    videoSrc: '',
    vupdate: false,
    time: 30,
    txt: '点击拍摄',
    disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
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
    this.setData({
      vupdate: false,
      time: 30,
      txt: '点击拍摄',
      disabled: false
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
  /**开始录制**/
  startRecord() {
    var that = this;
    var currentTime = that.data.time;
    timer = setInterval(function () {
      currentTime--;
      //console.log(currentTime);
      if (currentTime <= 0) {
        clearInterval(timer)
        that.setData({
          startrecord: true,
          vupdate: true,
        })
      }
      that.setData({ time: currentTime, txt: '拍摄中' })
      console.log(that.data.time)
    }, 1000)

    this.ctx.startRecord({
      success: (res) => {

        that.setData({
          startrecord: false
        })
        wx.showToast({
          title: '开始录制',
          icon: 'none'
        })
      }
    })
  },
  /**停止录制*/
  stopRecord() {
    var that = this;
    clearInterval(timer);
    this.ctx.stopRecord({
      success: (res) => {
        console.log(res);
        console.log('停止录制---');
        that.setData({
          startrecord: true,
          vupdate: true,
          time: 30,
          txt: '停止录制',
          disabled: true,
          picture: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
        wx.showToast({
          title: '停止录制',
          icon: 'none'
        })
        // console.log(res.tempFilePath)
      }
    })
  },
  cameraback: function () {
    var that = this;
    if (that.data.camera == "back") {
      that.setData({ camera: "front" })
    } else {
      that.setData({ camera: "back" })
    }
  },

  videoDelete: function () {
    var that = this;
    wx.showModal({
      title: '美助圈提示',
      content: '确认删除上一段视频么？',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            picture: '',
            txt: '点击拍摄',
            disabled: false,
            videoSrc: '',
            vupdate: false
          })
          wx.showToast({
            title: '删除成功！',
            icon: 'none',
            mask: true
          })
        } else if (res.cancel) {
          console.log('用户点击了关闭');
        }
      }
    })
  },
  videoUpdate: function (e) {
    wx.navigateTo({
      url: '../publish/publish?picture=' + this.data.picture + '&videosrc=' + this.data.videoSrc,
    })
  },
  goBack: function () {
    wx.navigateBack();
  }
})
