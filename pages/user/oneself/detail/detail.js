// pages/resume/click/purchase.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   show:false,
   message:{},
   userId:'',
   lookUserId:'',
   phone:'',
   phoneStr:'',
   buyed:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let id = options.id;
     var that = this;
     console.log()
     if(id){
       that.setData({ userId: id,lookUserId:app.globalData.userId})
       wx.request({
         method:'POST',
         url: queryUrl + 'user/index',
         data: {userId:id},
         success: function (res) {
           console.log(res);
          if(res.data.status){
              //var phone = message.phone;
            let phoneStr = res.data.data.phone.substr(0, 3) + "****" + res.data.data.phone.substr(7);
            that.setData({ message: res.data.data, phoneStr: phoneStr, phone: res.data.data.phone})
          }else{
            wx.showToast({
              title: res.data.msg,
              icon:'none'
            })
          }
         }
       });
     }else{
       wx.showToast({
         title: '获取信息失败',
         icon:'none'
       })
     }

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
  /*购买说明显隐*/ 
  purchase:function(e) {
    let show = !this.data.show;
    console.log(show)
    this.setData({
      show: show
    })
  },
  closeBuy:function(){
    this.setData({show:false})
  },
  handleClick: function (e) {
    console.log("点击");
    var videoId = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../video/video?videoId='+videoId+'&userId='+this.data.userId,
    })
      
   },
  handleLongPress: function (e) { 
    console.log('长按')
    var that = this;
    var videoId = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    var message = that.data.message;
    wx.showModal({
      title: '美助圈提醒您',
      content: '确认删除这段视频吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.request({
            method: 'POST',
            url: queryUrl + 'video/delete',
            data: { userId: that.data.userId, videoId: videoId},
            success(res) {
              console.log(res.data)
              wx.showToast({
                title: '删除成功',
                icon:'none'
              })
              message.video.splice(index, 1);
              that.setData({ message: message })

            }
          })
          
          
        } else if (res.cancel) {
          console.log('用户点击取消')
          return;
        }
      }
    })
    
   },
  goResume:function(){
    wx.navigateTo({
      url: '../resume/resume?userId='+ this.data.userId,
    })
  },
  goBuy:function(){
    var that = this;
    wx.request({
      url: queryUrl + 'user/buy',
      data: { userId: that.data.userId, lookUserId:that.data.lookUserId},
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        console.log('调起支付');
        wx.requestPayment({
          'timeStamp': res.data.timeStamp,
          'nonceStr': res.data.nonceStr,
          'package': res.data.package,
          'signType': 'MD5',
          'paySign': res.data.paySign,
          'success': function (res) {
            console.log('success');
            wx.showToast({
              title: '购买成功',
              icon: 'success',
              duration: 2000
            });
            that.setData({ phoneStr: that.data.phone, buyed: true })
          },
          'fail': function (res) {
            console.log('fail');
            wx.showToast({
              title: '购买失败',
              icon: 'success',
              duration: 2000
            });
          },
          'complete': function (res) {
            console.log('complete');

            // setTimeout(function () {
               
            // }, 500)

          }
        });
      },
      fail: function (res) {
        console.log(res.data)
      }
    });
  }
})