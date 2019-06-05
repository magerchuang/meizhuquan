// pages/user/oneself/baseInfo/baseInfo.js
var util = require("../../../../utils/util.js");
var date = util.formatTime(new Date)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: [
      { name: '男', value: '男' },
      { name: '女', value: '女'}
    ],
    workDate:'',
    birthDate:'',
    nowDate: date,
    sexy:'',
    headImg:'../../../../images/headimg.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var date = util.formatDate(new Date);
    that.setData({
      workDate:date,
      birthDate: date
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
  radioChange(e){
    const sex = e.detail.value;
    console.log(sex);
    this.setData({
      sexy:sex
    })
  },
  bindDateChange: function(e){
    const workDate = e.detail.value;
    //console.log(e);
    this.setData({
      workDate : workDate
    })
  },
  bindbirthdayChange:function(e) {
    const birthDate = e.detail.value;
    //console.log(e);
    //console.log(birthDate);
    this.setData({
      birthDate: birthDate
    })
  },
  picChange(e){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          headImg: tempFilePaths[0]
        })
      }
    })
  }
})