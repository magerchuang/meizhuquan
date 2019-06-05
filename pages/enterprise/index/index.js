// pages/index/index.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var start;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,//第N个视频

    show: false,
    autoplay: true,
    videoContext: null,
    percent: 0,
    isPlay: true,
    fullScreen: false,
    playUrl: [],
    orientation: "vertical",
    objectFit: "contain",
    muted: false,
    backgroundMuted: false,
    debug: false,
    headerHeight: app.globalData.headerHeight,
    statusBarHeight: app.globalData.statusBarHeight,

    styleClass: "stamps",
    fstyleClass: "filtrate_bg",
    wstyleClass: "wz_resume",
    curIndex: 0,
    btn: "btn_footer",
    button_num: 0,
    yc_num: "filtrate_num",
    arr: [],
    iscode: false,
    category: [
      {
        "id": "1",
        "title": "年龄",
        "sub": [
          { "title": "20~24", "id": "111" },
          { "title": "20~24", "id": "111" },
          { "title": "20~24", "id": "111" }]
      },
      {
        "id": "2",
        "title": "学历",
        "sub": [
          { "title": "研究生", "id": "333" },
          { "title": "本科", "id": "333" },
          { "title": "大专", "id": "333" }
        ]
      },
      {
        "id": "3",
        "title": "兼职",
        "sub": [
          { "title": "导游", "id": "333" },
          { "title": "礼仪", "id": "333" },
          { "title": "外展演出", "id": "333" },
          { "title": "导购", "id": "333" },
          { "title": "主播", "id": "333" },
          { "title": "服务员", "id": "333" },
          { "title": "老师", "id": "333" }
        ]
      },
      {
        "id": "4",
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
        "id": "5",
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
        "id": "5",
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
    show: [false, false, false, false, false, false],
    winHeight: 0,
    quan: [
      { "id": 1, "name": "樱桃拿铁咖啡", "startTime": "2019.04.01", "endTime": "2019.04.15", "money": "30", "imgUrl": "../../images/resume/img35.png", "status": false },
      { "id": 2, "name": "樱桃拿铁咖啡", "startTime": "2019.04.01", "endTime": "2019.04.15", "money": "30", "imgUrl": "../../images/resume/img35.png", "status": false },
      { "id": 3, "name": "樱桃拿铁咖啡", "startTime": "2019.04.01", "endTime": "2019.04.15", "money": "30", "imgUrl": "../../images/resume/img35.png", "status": false },
      { "id": 4, "name": "樱桃拿铁咖啡", "startTime": "2019.04.01", "endTime": "2019.04.15", "money": "30", "imgUrl": "../../images/resume/img35.png", "status": false },
      { "id": 5, "name": "樱桃拿铁咖啡", "startTime": "2019.04.01", "endTime": "2019.04.15", "money": "30", "imgUrl": "../../images/resume/img35.png", "status": false },
      { "id": 6, "name": "樱桃拿铁咖啡", "startTime": "2019.04.01", "endTime": "2019.04.15", "money": "30", "imgUrl": "../../images/resume/img35.png", "status": false },
    ],
    vid: 0,
    pagey: '',
    vsrc: [{
      "videoUrl": "http://1259143038.vod2.myqcloud.com/63d69926vodcq1259143038/c48d89c55285890789178842948/Njk0u1YMXHEA.mp4",
      "collected": "234",
      "looked": "121",
      "author": "马云云",
      "desc": "高端助理招聘平台",
      "music": "马云云原生创作"
    },
    {
      "videoUrl": "http://v2018.zhuoxuncn.com/zhuoxunvideo/20181220/0104_1.mp4",
      "collected": "987",
      "looked": "12",
      "author": "李四",
      "desc": "跑什么？还跑！",
      "music": "羽泉-奔跑"


    },
    {
      "videoUrl": "http://v2018.zhuoxuncn.com/zhuoxunvideo/20181123/27.mp4",
      "collected": "1000",
      "looked": "100000",
      "author": "张三",
      "desc": "简单爱",
      "music": "周杰伦-简单爱"


    }
    ],
    index_num: 1,
    city: '',
    latitude: '',
    longitude: ''

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    qqmapsdk = new QQMapWX({
      key: 'USJBZ-3LH6D-JWD4K-PYRYA-3DR32-SMBVJ' // 必填
    });
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });
    wx.request({
      url: queryUrl + 'company/index',
      data: {},
      success: function (res) {
        console.log(res);
        if (res.data.status) {
          that.setData({
            vsrc: res.data.data
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    });
    wx.login({
      success: function (res) {
        var code = res.code;
        if (code) {
          wx.request({
            url: queryUrl + 'auth/getOpenId',
            data: { code: code },
            success: function (res1) {
              that.setData({
                openId: res1.data.openId
              })
              //更新全局变量openId
              app.globalData.openId = res1.data.openId;
              console.log('globalData openId：' + app.globalData.openId);
              //检测用户是否已注册
              if (res1.data.openId != '') {
                wx.request({
                  url: queryUrl + 'auth/index',
                  data: { openId: res1.data.openId, shopCode: that.data.shopCode },
                  success: function (res2) {
                    //更新本页面shopCode
                    that.setData({
                      userId: res2.data.user.id
                    })
                    //更新全局变量userId
                    app.globalData.userId = res2.data.user.id;
                    console.log('globalData userId：' + app.globalData.userId);

                  }
                })
              }
            }
          })
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });
    this.videoContext = wx.createVideoContext('myVideo')
    console.log(this.data.videoContext);
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  timeupdate: function (e) {
    var val = e.detail.currentTime;
    var max = e.detail.duration;
    var percent = Math.round(val / max * 10000) / 100;
    this.setData({ percent: percent })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let vm = this;
    vm.getUserLocation();
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
    this.videoContext.pause();
    this.setData({ isPlay: true, index_num: 1 })
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
  // 送券-显示
  stamps: function () {
    this.setData({
      styleClass: "stamps_show"
    })
  },
  // 送券-隐藏
  hide_cu: function () {
    this.setData({
      styleClass: "stamps"
    })
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
  //  男女选项
  tab_radio: function (e) {
    let i = e.currentTarget.dataset.index;
    this.setData({
      curIndex: i
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
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../user/enterprise/detail/detail?id='+id,
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
  handle() {
    let iscode = !this.data.iscode
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      iscode
    })
    //提示用户
    wx.showToast({
      title: iscode ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },
  jianli: function () {
    wx.redirectTo({
      url: '/pages/resume/index/index'
    })
  },
  qiye: function () {
    wx.redirectTo({
      url: '/pages/enterprise/index/index'
    })
  },
  vip: function (e) {
    console.log(e);
    wx.redirectTo({
      url: '/pages/map/index/index'
    })
  },
  wode: function (e) {
    console.log(e);
    wx.redirectTo({
      url: '/pages/user/index/index'
    })
  },

  // videoTouchStart:function(e){
  //   console.log(e);
  // },
  // check:function(e){
  //   console.log(e);
  //   var checkIndex = e.currentTarget.dataset.index;
  //   var arr = this.data.quan;
  //   var status = arr[checkIndex].status;

  //   arr[checkIndex].status = !status;
  //    this.setData({
  //      quan:arr
  //    })
  //   // console.log(this.data.arrStatus)
  // },
  // 点击播放按钮
  play: function () {
    var that = this;
    console.log(that.data.index_num)
    that.setData({
      index_num: that.data.index_num + 1
    });
    if (that.data.index_num % 2 == 1) {
      console.log('播放')
      //console.log(that.videoContext.onTimeUpdate);
      that.videoContext.play()
      that.setData({ isPlay: true })
      // that.setData({
      //   display_play: 'none'
      // })
    } else {
      console.log('暂停')
      that.videoContext.pause()
      //console.log(that.videoContext.onTimeUpdate);
      that.setData({ isPlay: false })
      // that.setData({
      //   display_play: 'block'
      // })
    }
  },
  // 开始播放
  bindPlay: function () {
    this.videoContext.play()
  },

  // 暂停播放
  bindPause: function () {
    this.videoContext.pause();
  },

  // 播放完毕
  bindEnded: function () {
    this.bindPlay()
  },
  // 下面主要模仿滑动事件
  touchstart: function (e) {
    this.setData({
      pagey: e.changedTouches[0].pageY
    })
    console.log(e.changedTouches[0].pageY)
  },
  touchmove:function(e){

  },
  touchend: function (e) {
    console.log("--" + e.changedTouches[0].pageY)
    if (e.changedTouches[0].pageY - this.data.pagey > 100) {

      var isZero = this.data.vid == 0
      console.log(isZero);
      var id = this.data.vid == 0 ? 0 : this.data.vid - 1
      if (isZero) {
        wx.showToast({
          title: '已是第一个！',
        })
      } else {
        this.setData({
          vid: id,
          index: 1

        })
        var that = this
        setTimeout(function () {
          that.bindPlay()
        }, 500)
      }
    } else if (this.data.pagey - e.changedTouches[0].pageY > 100) {
      var islast = this.data.vid == this.data.vsrc.length - 1
      var lid = this.data.vid == this.data.vsrc.length - 1 ? this.data.vsrc.length - 1 : this.data.vid + 1
      if (islast) {
        wx.showToast({
          title: '已是最后一个！',
        })
      } else {
        this.setData({
          vid: lid,
          index: 1
        })
      }
      var that = this
      setTimeout(function () {
        that.bindPlay()
      }, 500)
    }
  },
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: (res) => {
        console.log(JSON.stringify(res))
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          vm.getLocation();
        }
        else {
          //调用wx.getLocation的API
          vm.getLocation();
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        vm.setData({
          province: province,
          city: city,
          latitude: latitude,
          longitude: longitude
        })

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  }

})



