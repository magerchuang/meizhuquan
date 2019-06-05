// pages/user/oneself/salary/salary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salary: ["3000以下", "3000-3999", "4000-4999", "5000-5999", "6000-6999", "7000-7999", "8000-8999", "9000-9999", "10000-14999", "15000-19999", "20000-24999", "25000-29999", "30000-34999", "35000-39999", "40000-49999", "50000-69999", "70000-99999", "100000及以上",],
    selected:null
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
  select:function(e){
     let index = e.currentTarget.dataset.index;
     let money = e.currentTarget.dataset.money;
     console.log(index)
     this.setData({selected:index})
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    //var info = prevPage.data //取上页data里的数据也可以修改
    prevPage.setData({ money: money })//设置数据
    setTimeout(function () {
      wx.navigateBack()
    }, 300)
    
  }
})