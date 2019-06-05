// pages/user/enterprise/guild/guild.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salary: ["不限","电子商务","游戏","媒体","广告营销","数据服务","医疗健康","生活服务","O2O","旅游","分类信息","音乐/视频/阅读","在线教育","社交网络","人力资源服务","企业服务","信息安全","智能硬件","移动互联网","互联网","计算机软件","通信/网络设备","广告/公关/会展","互联网金融","物流/仓储","贸易/进出口","咨询","工程施工","汽车生产","其他行业"],
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
    let hy = e.currentTarget.dataset.hy;
    let index = e.currentTarget.dataset.index;
    console.log(hy)
    this.setData({ selected: index });
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    var info = prevPage.data //取上页data里的数据也可以修改
    prevPage.setData({ hy: hy })//设置数据
    setTimeout(function () {
      wx.navigateBack()
    }, 300)
  }
})