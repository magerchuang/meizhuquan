// pages/user/enterprise/scale/scale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salary: ["20人以下", "20-50人", "50-100人", "100-500人", "500-1000人", "1000人以上"],
    selected: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  select: function (e) {
    let gm = e.currentTarget.dataset.gm;
    let index = e.currentTarget.dataset.index;
    console.log(gm)
    this.setData({ selected: index });
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    var info = prevPage.data //取上页data里的数据也可以修改
    prevPage.setData({ gm: gm })//设置数据
    setTimeout(function () {
      wx.navigateBack()
    }, 300)
  }
})