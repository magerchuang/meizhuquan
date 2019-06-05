// pages/user/selfCenter/selfCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex:1,
    nothingStore: false,
    nothingBuy: false,
    nothingGet: false,
    tabIndex:1,
    qdIndex:1,
    number:1,
    imgSrc: '../../../../images/headimg1.png',
    itemImg: '../../../../images/item_img.png',
    sexy: ["20人一下", "20-49人", "50-99人", "100-499人", "500-100-人","1000人以上"],
    age: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    edu: ["不限","大专", "本科", "硕士", "博士"],
    startTime: '',
    endTime: '',
    itemStime:'',
    itemEtime:'',
    isRuleTrue: false,
    isShow: false,
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
    border: '',
    addQuan:false,
    color: '',
    borderColor: false,
    wages: ["3000以下", "3000-3999", "4000-4999", "5000-5999", "6000-6999", "7000-7999", "8000-8999", "9000-9999", "10000-14999", "15000-19999", "20000-24999", "25000-29999", "30000-34999", "35000-39999", "40000-49999", "50000-69999", "70000-99999", "100000及以上"],
    stTime: '',
    edTime: '',
    post: '',
    years:["不限","无经验","1-3年","3-5年","5-10年","10年以上"],
    startrecord:true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.animation = wx.createAnimation();
    // this.animationData = wx.createAnimation();
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
  toptab: function (e) {
    // console.log(e);
    let i = e.currentTarget.dataset.index;
    this.setData({
      curIndex: i
    })
  },
  cvTab: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({ tabIndex: index })
  },
  updateImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          imgSrc: tempFilePaths[0]
        })
        /* wx.uploadFile({
           url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
           filePath: tempFilePaths[0],
           name: 'file',
           formData: {
             user: 'test'
           },
           success(res) {
             const data = res.data
             // do something
           }
         })*/
      }
    })
  },
  SexyChange: function (e) {
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  ageChange: function (e) {
    this.setData({
      i: e.detail.value
    })
  },
  eduChange: function (e) {
    this.setData({
      e: e.detail.value
    })
  },
  yearsChange: function (e) {
    this.setData({
       y: e.detail.value
    })
  },
  stimeChange: function (e) {
    console.log(e);
    this.setData({
      startTime: e.detail.value
    })
  },
  etimeChange: function (e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  translate: function () {
    this.setData({
      isRuleTrue: true
    })
    this.animation.translate(-320, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  selectTrade: function (e) {
    var that = this;
    console.log(e);
    let indx = e.currentTarget.dataset.index;
    var trade = that.data.trade
    for (let i = 0; i < trade.length; i++) {
      trade[i].selected = false
    }
    let selected = trade[indx].selected
    trade[indx].selected = !selected
    let selectedTrade = e._relatedInfo.anchorRelatedText

    that.setData({
      selectedTrade: selectedTrade,
      trade: trade
    })

  },
  success: function () {
    if (this.data.selectedTrade==''){
       wx.showToast({
         title: '请选择行业',
         icon:'none'
       })
       return false;
    }
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(320, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  wagesChange: function (e) {
    this.setData({
      w: e.detail.value
    })
  },
  stChange: function (e) {
    console.log(e);
    this.setData({
      stTime: e.detail.value
    })
  },
  edChange: function (e) {
    console.log(e);
    this.setData({
      edTime: e.detail.value
    })
  },
  post: function (e) {
    this.setData({
      isShow: true
    })
    this.animationData.translate(-320, 0).step()
    this.setData({ animationData: this.animationData.export() })
  },
  pBtn: function () {
    this.setData({
      isShow: false
    })
    this.animationData.translate(320, 0).step()
    this.setData({ animationData: this.animationData.export() })
  },
goCamera:function(){
  wx.navigateTo({
    url: '../../camera/camera',
  })
},
  error(e) {
    console.log(e.detail)
  },
  bindXzChange:function(e){
    console.log(e);
    this.setData({key:e.detail.value})
  },
  addItem:function(){
    wx.navigateTo({
      url: '../baseInfo/baseInfo',
    })
  },
  editInfo: function () {
    wx.navigateTo({
      url: '../editInfo/editInfo',
    })
  },
  qdTab:function(e){
     let index = e.currentTarget.dataset.index;
     this.setData({
        qdIndex:index
     })
  },
  clause:function(){
    wx.navigateTo({
      url: '../clause/clause',
    })
  },
  goAddQuan:function(){
    this.setData({
      addQuan:true
    }) 
  },
  StimeChange:function(e){
     let val = e.detail.value;
     this.setData({
       itemStime:val
     })
  },
  EtimeChange:function(e){
    let val = e.detail.value;
    this.setData({
      itemEtime: val
    })
  },
  itemUpImg:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          itemImg: tempFilePaths[0]
        })
        /* wx.uploadFile({
           url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
           filePath: tempFilePaths[0],
           name: 'file',
           formData: {
             user: 'test'
           },
           success(res) {
             const data = res.data
             // do something
           }
         })*/
      }
    })
  }
})