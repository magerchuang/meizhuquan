// pages/user/selfCenter/selfCenter.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
import WxValidate from '../../../../utils/WxValidate';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fstyleClass: "filtrate_bg",
    curIndex:1,
    nothing:false,
    nocompany:false,
    tabIndex:1,
    imgSrc:'../../../../images/headimg1.png',
    sexy:["男","女"],
    age:[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
    edu:["大专","本科","硕士","博士"],
    wstartTime:'',
    wendTime:'',
    isRuleTrue:false,
    isShow:false,
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
    selectedTrade:'',
    con_trade:'',
    border:'',
    index:'',
    color:'',
    borderColor:false,
    wages: ["3000以下", "3000-3999", "4000-4999", "5000-5999", "6000-6999", "7000-7999", "8000-8999", "9000-9999", "10000-14999", "15000-19999", "20000-24999", "25000-29999", "30000-34999", "35000-39999", "40000-49999", "50000-69999", "70000-99999", "100000及以上"],
    stTime:'',
    edTime:'',
    post:'',
    arr:[],
    yc_num: "filtrate_num",
    category: [
      {
        "id": "1",
        "title": "文职类助理",
        "sub": [
          { "title": "总裁助理", "id": "1", "disabled": false},
          { "title": "董事长助理", "id": "2", "disabled": false},
          { "title": "总经理助理", "id": "3", "disabled": false},
          { "title": "薪酬助理", "id": "4", "disabled": false},
          { "title": "人事助理", "id": "5", "disabled": false},
          { "title": "行政助理", "id": "6", "disabled": false},
          { "title": "财务助理", "id": "7", "disabled": false},
          { "title": "会计助理", "id": "8", "disabled": false},
          { "title": "审计助理", "id": "9", "disabled": false},
          { "title": "校长助理", "id": "10", "disabled": false}
        ]
      },
      {
        "id": "2",
        "title": "销售类助理",
        "sub": [
          { "title": "商务助理", "id": "11", "disabled": false},
          { "title": "市场助理", "id": "12", "disabled": false},
          { "title": "销售助理", "id": "13", "disabled": false},
          { "title": "导购助理", "id": "14", "disabled": false},
          { "title": "客服助理", "id": "15", "disabled": false},
          { "title": "售后助理", "id": "16", "disabled": false },
          { "title": "猎头助理", "id": "17", "disabled": false },
          { "title": "培训助理", "id": "18", "disabled": false },
          { "title": "金融助理", "id": "19", "disabled": false }
        ]
      },
      {
        "id": "3",
        "title": "技能类助理",
        "sub": [
          { "title": "设计师助理", "id": "20" ,"disabled":false},
          { "title": "研发助理", "id": "21", "disabled": false},
          { "title": "外展演出", "id": "22", "disabled": false},
          { "title": "Web前端助理", "id": "23", "disabled": false},
          { "title": "律师助理", "id": "24", "disabled": false},
          { "title": "机械维修保养助理", "id": "25", "disabled": false},
          { "title": "摄影助理", "id": "26", "disabled": false},
          { "title": "室内设计师助理", "id": "27", "disabled": false},
          { "title": "PCB设计师助理", "id": "28", "disabled": false },
          { "title": "工程助理", "id": "29", "disabled": false},
          { "title": "主播助理(兼模特)", "id": "30", "disabled": false},
          { "title": "外贸助理", "id": "31", "disabled": false},
          { "title": "产品助理", "id": "32", "disabled": false},
          { "title": "Java开发助理", "id": "33", "disabled": false },
          { "title": "C++开发助理", "id": "34", "disabled": false},
          { "title": "UI设计师助理", "id": "35", "disabled": false},
          { "title": "医生助理", "id": "36", "disabled": false },
          { "title": "运营助理", "id": "37", "disabled": false},
          { "title": "游戏设计师助理", "id": "38", "disabled": false},
          { "title": "综艺频道SNS助理", "id": "39", "disabled": false},
          { "title": "产品创意设计助理", "id": "40", "disabled": false},
        ]
      },
    ],
    show: [false, false, false],
    userId:'',
    delivery:[],//已投的简历
    buy:[],//已购买的企业
    userSexy:'',//性别
    userAge:'',//年龄
    education:'',//学历,
    userWages:'',//期望薪资，
    companyName:'',//公司名称
    companyPost: '',//公司职位,
    eStartTime:'',//教育经历开始时间
    eEndTime:'',//教育经历结束时间
    eSchoolName:'',//学校名称
    eSchoolSpecial:'',//专业，
    city:'',
    nickname:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({userId:app.globalData.userId})
     this.initValidate();//初始化表单验证
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation();
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
  toptab:function(e){
   // console.log(e);
  wx.showLoading({
    title: '加载中...',
    mask:true
  })
    let i = e.currentTarget.dataset.index;
    this.setData({
      curIndex:i
    })
    if(i == 1){
      wx.hideLoading();
    }else if(i == 2){
      wx.request({
        method:'POST',
        url: queryUrl + 'resume/delivery',
        data:{userId:this.data.userId},
        success:(res)=>{
          wx.hideLoading();
          console.log(res.data.data);
          if(res.data.data.length>0){
            this.setData({ delivery: res.data.data })
          }else{
             this.setData({nothing:true})
          }
          
        }
      })
    }else if(i == 3){
      wx.request({
        method: 'POST',
        url: queryUrl + 'resume/buy',
        data: { userId: this.data.userId },
        success: (res) => {
          console.log(res.data.data);
          wx.hideLoading();
          if (res.data.data.length > 0) {
 
            this.setData({ buy: res.data.data })
          } else {
            this.setData({ nocompany: true })
          }
        }
      })
    }else if(i == 4){
      wx.hideLoading();
    }
  },
  cvTab:function(e){
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    let index = e.currentTarget.dataset.index;
    this.setData({ tabIndex: index });
    if(index == 1){
      wx.hideLoading()
    }else if(index == 2){
      wx.request({
        method:'POST',
        url: queryUrl + 'resume/index',
        data:{userId:this.data.userId},
        success:(res)=>{
          wx.hideLoading()
          console.log(res.data.data);
          let result = res.data.data;
          this.setData({
            imgSrc: result.head_img,//基本信息--头像
            nickname: result.nickname,//基本信息--名称
            userSexy: result.gender,//基本信息--性别
            userAge: result.age,//基本信息--年龄
            education: result.education_degree,//基本信息--学历
            wstartTime: result.work_experience[0].start_time,//工作经历--开始时间
            wendTime: result.work_experience[0].end_time,//工作经历--结束时间
            companyName: result.work_experience[0].company,//工作经历--公司名称
            companyPost: result.work_experience[0].job,//工作经历--工作职位
            eStartTime: result.edu_experience[0].start_time,//教育--开始时间
            eEndTime: result.edu_experience[0].end_time,//教育--结束时间
            eSchoolName: result.edu_experience[0].company,//教育--学校名称
            eSchoolSpecial: result.edu_experience[0].subject,//教育--专业
            city: result.job_intension.city,//求职意向--城市
            selectedTrade: result.job_intension.industry,//求职意向--所属行业
            post: result.job_intension.job,//求职意向--求职职位
            userWages: result.job_intension.salary,//求职意向--期望薪资
          })
        }
      })
    }
  },
  updateImg:function(){
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
  SexyChange:function(e){
    console.log(e)
    let i = e.detail.value; 
    this.setData({
      userSexy: this.data.sexy[i]
    })
  },
  ageChange:function(e){
    let i = e.detail.value;
    this.setData({
      userAge: this.data.age[i]
    })
  },
  eduChange:function(e){
    let i = e.detail.value;
    this.setData({
      education: this.data.edu[i]
    })
  },
  stimeChange:function(e){
    console.log(e);
    let t = e.detail.value
    this.setData({
      wstartTime: t
    })
  },
  etimeChange: function (e) {
    let t = e.detail.value
    this.setData({
      wendTime: t
    })
  },
  translate: function (e) {
    console.log(e);
    this.setData({
      isRuleTrue: true
    })
    this.animation.translate(-320, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  selectTrade:function(e){
    var that = this;
   // console.log(e);
    let indx = e.currentTarget.dataset.index;
    var trade = that.data.trade
    for (let i = 0; i < trade.length; i++) {
      trade[i].selected = false
    }
    let selected = trade[indx].selected;
    trade[indx].selected = !selected
    //let selectedTrade = e._relatedInfo.anchorRelatedText
    //console.log(selectedTrade);
    that.setData({
      con_trade: trade[indx].name,
      trade: trade
    })
    console.log(that.data.trade[indx].selected)
  },
  success: function (e) {
    var val = e.currentTarget.dataset.val
    this.setData({
      isRuleTrue: false,
      selectedTrade:val
    })
    this.animation.translate(320, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  chongzhi:function(e){
    console.log(e);
    var cate = this.data.trade;
    console.log(cate);
    for(let i=0; i<cate.length; i++){
      cate[i].selected = false;
    }
    this.setData({
      trade:cate,
      con_trade:''
    })
  },
  wagesChange:function(e){
    this.setData({
      w: e.detail.value
    })
  },
  stChange:function(e){
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
  post:function(e){
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
  reset:function(e){
    var that = this;
    console.log(e);
    let indx = e.currentTarget.dataset.index;
    var trade = that.data.trade
    for (let i = 0; i < trade.length; i++) {
      trade[i].selected = true
    }
    let selected = trade[indx].selected;
    trade[indx].selected = !selected
    //let selectedTrade = e._relatedInfo.anchorRelatedText
    console.log(selectedTrade);
    that.setData({
      selectedTrade: '',
      trade: trade
    })
  },
  // 筛选-显示
  post: function (e) {
    console.log(e);
    this.setData({
      fstyleClass: "filtrate_bg_show",
      btn: "btn_footer_show"
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
    console.log(e);
    var cate = this.data.category;
    let r = e.currentTarget.dataset.index;
    for (var i = 0; i < cate.length; i++) {
      for (var j = 0; j < cate[i].sub.length; j++) {
        cate[i].sub[j].checked = false;
        cate[i].sub[j].disabled = false;
      }
    }
    // console.log(cate);
    this.setData({
      category: cate,
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
  goCamera:function(){
    console.log('goCamera')
    wx.navigateTo({
      url: '../../camera/camera',
    })
  },
  checkboxChange:function(e){
    console.log(e);
    var cate = this.data.category;
    var selected = e.detail.value;
    var post;
    if (selected.length == 5 || selected.length > 5){
      wx.showToast({
        title: '筛选数量不能超过5个哦',
        icon:'none',
         mask:true
      })
      var selc = selected.slice(0, 5)
      for (let i = 0; i < cate.length; i++) {
        for (let j = 0; j < cate[i].sub.length; j++) {
          cate[i].sub[j].disabled = true
        }
      }
      post = selc.join('/')
      console.log(post)
      this.setData({ category: cate, post: post })
    }else{
      for (let i = 0; i < cate.length; i++) {
        for (let j = 0; j < cate[i].sub.length; j++) {
          cate[i].sub[j].disabled = false
        }
      }
    }
  },
  //表单验证
  initValidate:function(){
    // 验证字段的规则
    const rules = {
      userName: {
        required: true,
      },
      userSex: {
        required: true,
      },
      userAddr: {
        required: true,
      },
      
      userSchName: {
        required: true
      },
      userWx: {
        required: true,
      },
      userPhone: {
        required: true,
        tel: true,
      },
      userYzm: {
        required: true,
      }
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      userName: {
        required: '请输入您的名字',
      },
      userSex: {
        required: '请输入您的性别',
      },
      userAddr: {
        required: '请输入您的地址',
      },
      userSchName: {
        required: '请输入学校名称',
      },
      userWx: {
        required: '请输入微信号',
      },
      userPhone: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },
      userYzm: {
        required: '请输入验证码',
      }
    }

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)

    // // 自定义验证规则
    // this.WxValidate.addMethod('assistance', (value, param) => {
    //   return this.WxValidate.optional(value) || (value.length >= 1 && value.length <= 2)
    // }, '请勾选1-2个敲码助手')
  },
  formSubmit:function(e){
    const params = e.detail.value
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      console.log(error)
      wx.showModal({
        title: '美助圈提示您',
        content: error.msg,
        showCancel:false,
        success(res) {
          
        }
      })
      return false
    }
  }
})