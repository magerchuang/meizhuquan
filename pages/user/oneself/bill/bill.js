// pages/user/oneself/bill/bill.js
var util = require('../../../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
   date:'' ,
   zc:'0.00',
   sr:'200.00',
   identity:1,
   identitys:1,
   endDate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
     var date = util.formatDate(new Date());
     this.setData({date:'本月',endDate:date})
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
  bindDateChange:function(e){
    var that = this;
    var nowDate = util.formatDate(new Date());
    console.log(nowDate);
    var selectDate = e.detail.value
   if(nowDate == selectDate){
     that.setData({
       date: ' 本月'
     })
   }else{
     that.setData({
       date: selectDate
     })
   }
    
  }
})