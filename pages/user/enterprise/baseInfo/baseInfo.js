// pages/user/enterprise/baseInfo/baseInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wages: ["3000以下", "3000-3999", "4000-4999", "5000-5999", "6000-6999", "7000-7999", "8000-8999", "9000-9999", "10000-14999", "15000-19999", "20000-24999", "25000-29999", "30000-34999", "35000-39999", "40000-49999", "50000-69999", "70000-99999", "100000及以上"],
    trade: [
      { name: "电子商务", selected: false },
      { name: "游戏", selected: false },
      { name: "媒体", selected: false },
      { name: "广告营销", selected: false },
      { name: "数据服务", selected: false },
      { name: "医疗健康", selected: false },
      { name: "生活服务", selected: false },
      { name: "O2O", selected: false },
      { name: "旅游", selected: false },
      { name: "分类信息", selected: false },
      { name: "音乐/视频/阅读", selected: false },
      { name: "在线阅读", selected: false },
      { name: "社交网络", selected: false },
      { name: "人力资源服务", selected: false },
      { name: "企业服务", selected: false },
      { name: "信息安全", selected: false },
      { name: "智能硬件", selected: false },
      { name: "移动互联网", selected: false },
      { name: "物联网", selected: false },
      { name: "计算机软件", selected: false },
      { name: "通信/网络设备", selected: false },
      { name: "广告/公关/会展", selected: false },
      { name: "互联网金融", selected: false },
      { name: "物流/仓储", selected: false },
      { name: "贸易/进出口", selected: false },
      { name: "咨询", selected: false },
      { name: "工程施工", selected: false },
      { name: "汽车生产", selected: false },
      { name: "其他行业", selected: false }
    ],
    selectedTrade: '',
    isShow: false,
    edu: ["不限", "大专", "本科", "硕士", "博士"],
    years: ["不限", "无经验", "1-3年", "3-5年", "5-10年", "10年以上"]
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
    this.animationData = wx.createAnimation();
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
 
  bindXzChange: function (e) {
    console.log(e);
    this.setData({ key: e.detail.value })
  },
  post: function (e) {
    this.setData({
      isShow: true
    })
    // this.animationData.translate(-320, 0).step()
    // this.setData({ animationData: this.animationData.export() })
  },
  pBtn: function () {
    this.setData({
      isShow: false
    })
    this.animationData.translate(320, 0).step()
    this.setData({ animationData: this.animationData.export() })
  },
  eduChange: function (e) {
    this.setData({
      e: e.detail.value
    })
  },
  yearsChange:function(e){
    this.setData({
      y: e.detail.value
    })
  }
})