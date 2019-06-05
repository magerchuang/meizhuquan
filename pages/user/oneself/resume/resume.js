// pages/user/oneself/resume/resume.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:'',
    userInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let userId= options.userId
   if(userId){
     wx.request({
       method:'POST',
       url: queryUrl +'resume/index',
       data:{userId:userId},
       success:(res)=>{
          this.setData({
            userId:userId,
            userInfo:res.data.data
          })
          console.log(res.data.data)
       }
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

  }
})