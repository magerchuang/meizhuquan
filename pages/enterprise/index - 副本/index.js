// pages/resume/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    styleClass: "stamps",
    fstyleClass: "filtrate_bg",
    wstyleClass: "wz_resume",
    curIndex: 0,
    remuneration:0,
    btn: "btn_footer",
    button_num: 0,
    yc_num: "filtrate_num",
    arr: [],
    category: [
      {
        "id": "1",
        "title": "文职类助理",
        "sub": [
          { "title": "总裁助理", "id": "333" },
          { "title": "董事长助理", "id": "333" },
          { "title": "总经理助理", "id": "333" },
          { "title": "薪酬助理", "id": "333" },
          { "title": "人事助理", "id": "333" },
          { "title": "行政助理", "id": "333" },
          { "title": "财务助理", "id": "333" },
          { "title": "会计助理", "id": "333" },
          { "title": "审计助理", "id": "333" },
          { "title": "校长助理", "id": "333" }
        ]
      },
      {
        "id": "2",
        "title": "销售类助理",
        "sub": [
          { "title": "商务助理", "id": "333" },
          { "title": "市场助理", "id": "333" },
          { "title": "销售助理", "id": "333" },
          { "title": "导购助理", "id": "333" },
          { "title": "客服助理", "id": "333" },
          { "title": "售后助理", "id": "333" },
          { "title": "猎头助理", "id": "333" },
          { "title": "培训助理", "id": "333" },
          { "title": "金融助理", "id": "333" }
        ]
      },
      {
        "id": "3",
        "title": "技能类助理",
        "sub": [
          { "title": "设计师助理", "id": "333" },
          { "title": "研发助理", "id": "333" },
          { "title": "外展演出", "id": "333" },
          { "title": "Web前端助理", "id": "333" },
          { "title": "律师助理", "id": "333" },
          { "title": "机械维修保养助理", "id": "333" },
          { "title": "摄影助理", "id": "333" },
          { "title": "室内设计师助理", "id": "333" },
          { "title": "PCB设计师助理", "id": "333" },
          { "title": "工程助理", "id": "333" },
          { "title": "主播助理(兼模特)", "id": "333" },
          { "title": "外贸助理", "id": "333" },
          { "title": "产品助理", "id": "333" },
          { "title": "Java开发助理", "id": "333" },
          { "title": "C++开发助理", "id": "333" },
          { "title": "UI设计师助理", "id": "333" },
          { "title": "医生助理", "id": "333" },
          { "title": "运营助理", "id": "333" },
          { "title": "游戏设计师助理", "id": "333" },
          { "title": "综艺频道SNS助理", "id": "333" },
          { "title": "产品创意设计助理", "id": "333" },
        ]
      },
      
    ],
    show: [false, false, false],
    winHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });
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
 
  // 筛选-显示
  filtrate: function (e) {
    console.log(e);
    this.setData({
      fstyleClass: "filtrate_bg_show",
      btn: "btn_footer_show"
    })
  },
  // 文字简历
  wzjl: function () {
    this.setData({
      wstyleClass: "wz_resume_show"
    })
  },
  hide_wz: function () {
    this.setData({
      wstyleClass: "wz_resume"
    })
  },
  //  企业规模
  tab_radio: function (e) {
    let i = e.currentTarget.dataset.index;
    this.setData({
      curIndex: i
    })
  },
  // 薪酬范围
  tab_remuneration: function (e) {
    let j = e.currentTarget.dataset.index;
    this.setData({
      remuneration: j
    })
  },
  checkbox: function (e) {
    var idx = e.currentTarget.dataset.idx;//获取当前点击的下标
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var disabled = e.currentTarget.dataset.disabled;//获取当前点击的disabled
    if (!disabled) {
      var checkboxArr = this.data.category;//选项集合
      checkboxArr[idx].sub[index].checked = !checkboxArr[idx].sub[index].checked;//改变当前选中的checked值
      this.setData({
        category: checkboxArr
      });
    }
    // 判断筛选的个数
    let arr = this.data.arr;
    var category = this.data.category;
    arr.splice(0, category[idx].sub.length)
    for (let i = 0; i < category[idx].sub.length; i++) {
      if (category[idx].sub[i].checked) {
        console.log(category[idx].sub[i].checked);

        arr.push(category[idx].sub[i]);
        if (arr.length >= 5) {
          this.setData({
            yc_num: "filtrate_num_show"
          })
        }
      }
    }
    console.log(arr);
  },
  // 点击更多
  more: function (e) {
    var i = e.currentTarget.dataset.i;//获取当前点击的下标 
    var on = e.currentTarget.dataset.on;//获取当前点击的显示状态
    var show = this.data.show;
    if (on) {
      show[i] = false;
    }
    else {
      show[i] = true;
    }
    this.setData({
      show: show
    });
  },
  // 重置按钮
  btn_reset: function (e) {
    var cate = this.data.category;
    let r = e.currentTarget.dataset.index;
    for (var i = 0; i < cate.length; i++) {
      for (var j = 0; j < cate[i].sub.length; j++) {
        cate[i].sub[j].checked = false
      }
    }
    console.log(cate);
    this.setData({
      category: cate,
      curIndex: 0,
      remuneration:0,
      button_num: r,
      yc_num: "filtrate_num"
    });
  },
  // 确定按钮
  btn_submit: function (e) {
    let r = e.currentTarget.dataset.index;
    this.setData({
      button_num: r,
      fstyleClass: "filtrate_bg",
      btn: "btn_footer",
    });
  },
  // 出视
  show: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../click/purchase',
    })
  },
  // 分享
  onShareAppMessage: function (res) {
    // console.log(res);
    if (res.from === "button") { }
    return {
      title: "哈哈",
      desc: "我是中国人",
      path: "pages/resume/click/purchase",
      imageUrl: "../../../images/pic3.png",
      success: function (res) {
        console.log("成功", res);

      }
    }
  },
})



