// pages/index/index.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var start;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//第N个视频

    show: false,
    layer:false,
    autoplay: true,
    videoContext:null,
    percent: 0,
    isPlay: true,
    fullScreen: false,
    orientation: "vertical",
    objectFit: "contain",
    muted: false,
    backgroundMuted: false,
    debug: false,

    button_num: 0,
    arr: [],
    iscode: false,
    winHeight: 0,
    vid: 0,
    pagey: '',
    vsrc: [],
    index_num:1,
    userId:'',
    videoId:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    qqmapsdk = new QQMapWX({
      key: 'USJBZ-3LH6D-JWD4K-PYRYA-3DR32-SMBVJ' // 必填
    });
    var userId = options.userId;
    var videoId = options.videoId;
    if(userId && videoId){
       that.setData({userId:userId,videoId:videoId})
       console.log('userId---'+userId +'videoId----'+videoId)
    }
    
   // that.setData({userId:app.globalData.userId});
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  timeupdate: function (e) {
    var val = e.detail.currentTime;
    var max = e.detail.duration;
    var percent = Math.round(val / max * 10000) / 100;
    this.setData({ percent: percent })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let vm = this;
    vm.indexLoad();

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
  // 分享
  onShareAppMessage: function (res) {
    // console.log(res);
    if (res.from === "button") { }
    return {
      title: "哈哈",
      desc: "我是中国人",
      path: "pages/resume/click/purchase",
      imageUrl: "../../../images/pic3.png",
      success: function (res) {
        console.log("成功", res);

      }
    }
  },
  //收藏与否
  handle: function (e) {
    var that = this;
    var vid = that.data.vid;
    var vArr = that.data.vsrc;
    wx.request({
      method: 'POST',
      url: queryUrl + 'video/fav ',
      data: { userId: that.data.userId, videoId: vArr[vid].id },
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
        vArr[vid].fav_state = res.data.data.fav;
        that.setData({ vsrc: vArr })
      }
    })
  },
  // 点击播放按钮
  play: function () {
    var that = this;
    console.log(that.data.index_num)
    that.setData({
      index_num: that.data.index_num + 1
    });
    if (that.data.index_num % 2 == 1) {
      console.log('播放')
      console.log(that.data.isPlay)
      that.videoContext.play()
      that.setData({ isPlay: true })
    } else {
      console.log('暂停')
      console.log(that.data.isPlay)
      that.videoContext.pause()
      that.setData({ isPlay: false })
    }
  },
  // 开始播放
  bindPlay: function () {
    this.videoContext.play()
  },

  // 暂停播放
  bindPause: function () {
    this.videoContext.pause();
  },

  // 播放完毕
  bindEnded: function () {
    this.bindPlay()
  },
  // 下面主要模仿滑动事件
  touchstart: function (e) {
    this.setData({
      pagey: e.changedTouches[0].pageY
    })
    console.log(e.changedTouches[0].pageY)
  },
  touchmove: function (e) {

  },
  touchend: function (e) {
    console.log("--" + e.changedTouches[0].pageY)
    if (e.changedTouches[0].pageY - this.data.pagey > 100) {

      var isZero = this.data.vid == 0
      console.log(isZero);
      var id = this.data.vid == 0 ? 0 : this.data.vid - 1
      if (isZero) {
        wx.showToast({
          title: '已是第一个！',
        })
      } else {
        this.setData({
          isPlay: true,
          index_num: 1,
          vid: id,
          index: 1

        })
        var that = this
        setTimeout(function () {
          that.bindPlay()
        }, 500)
      }
    } else if (this.data.pagey - e.changedTouches[0].pageY > 100) {
      var islast = this.data.vid == this.data.vsrc.length - 1
      var lid = this.data.vid == this.data.vsrc.length - 1 ? this.data.vsrc.length - 1 : this.data.vid + 1
      if (islast) {
        wx.showToast({
          title: '已是最后一个！',
        })
      } else {
        this.setData({
          isPlay: true,
          index_num: 1,
          vid: lid,
          index: 1
        })
      }
      var that = this
      setTimeout(function () {
        that.bindPlay()
      }, 500)
    }
  },
  indexLoad: function () {
    var that = this;
    wx.request({
      method:'POST',
      url: queryUrl + 'user/video',
      data: { userId: that.data.userId, videoId: that.data.videoId},
      success: function (res) {
        console.log(res);
        if (res.data.status) {
          that.setData({
            vsrc: res.data.data
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    });
  },
  goBack:function(){
    wx.navigateBack();
  }

})



