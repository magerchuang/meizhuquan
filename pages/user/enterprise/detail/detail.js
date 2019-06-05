// pages/resume/click/purchase.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   show:false,
   message:{}
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let id = options.id;
     var that = this;
     if(id){
       wx.request({
         url: queryUrl + 'company/user',
         data: {userId:id},
         success: function (res) {
           console.log(res);
          if(res.data.status){
              that.setData({message:res.data.data})
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
  purchase:function(e) {
    let show = !this.data.show;
    console.log(show)
    this.setData({
      show: show
    })
  }
})