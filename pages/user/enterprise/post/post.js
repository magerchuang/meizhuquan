// pages/user/enterprise/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    skill:'',
    desc:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    money:''
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
  selectCity: function () {
    wx.navigateTo({
      url: '../../oneself/selectCity/selectCity',
    })
  },
  skill:function(){
    wx.navigateTo({
      url: '../skill/skill',
    })
  },
  money:function(){
    wx.navigateTo({
      url: '../../oneself/salary/salary',
    })
  },
  desc:function(){
    wx.navigateTo({
      url: '../describe/describe',
    })
  }
    
  
})