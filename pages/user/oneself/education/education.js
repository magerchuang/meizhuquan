// pages/user/oneself/baseInfo/baseInfo.js
var util = require("../../../../utils/util.js");
var date = util.formatTime(new Date)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edu: ["MBA","博士","硕士","本科","大专","中专及以下"],
    abroad: [
      { name: '是', value: '是' },
      { name: '否', value: '否' ,checked:true}
    ],
    enterDate: '',
    endDate: '',
    nowDate: date,
    study: '',
    headImg: '../../../../images/headimg.png',
    index:0,
    undergo:"在校经历"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var date = util.formatDate(new Date);
    that.setData({
      enterDate: date,
      endDate: date
    })
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
  radioChange(e) {
    const study = e.detail.value;
    console.log(study);
    this.setData({
      study: study
    })
  },
  bindEnterDateChange: function (e) {
    const enterDate = e.detail.value;
    //console.log(e);
    this.setData({
      enterDate: enterDate
    })
  },
  bindEndChange: function (e) {
    const endDate = e.detail.value;
    //console.log(e);
    //console.log(birthDate);
    this.setData({
      endDate: endDate
    })
  },
  bindPickerChange(e){
    const index = e.detail.value;
   // console.log(e);
    //console.log(birthDate);
    this.setData({
      index: index
    })
  },
  undergo:function(){
    wx.navigateTo({
      url: '../undergo/undergo',
    })
  }
})