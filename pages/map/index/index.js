Page({

  /**
   * 页面的初始数据
   */
  data: {

    latitude: 24.4795100000,
    longitude: 118.0894800000,
    markers: [
      {
        id: 0,
        latitude: 24.7555700000,
        longitude: 118.0824000000,
        iconPath: "../../../images/resume/img45.png",
        width:70,
        height:70,
        callout: {
         
        }

      },
      {
        id: 1,
        latitude: 24.5131500000,
        longitude: 118.1468600000,
        iconPath: "../../../images/resume/img45.png",
        width: 70,
        height: 70,
        callout: {
          
        }

      },
      {
        id: 2,
        latitude: 24.7235700000,
        longitude: 118.1517300000,
        iconPath: "../../../images/resume/img45.png",
        width: 70,
        height: 70,
        callout: {
         
        }

      },
      {
        id: 3,
        latitude: 24.5759000000,
        longitude: 118.0972700000,
        iconPath: "../../../images/resume/img45.png",
        width: 70,
        height: 70,
        callout: {
        
        }

      },
      {
        id: 4,
        latitude: 24.4846000000,
        longitude: 118.0329300000,
        iconPath: "../../../images/resume/img45.png",
        width: 70,
        height: 70,
        callout: {
         
        }

      },
      {
        id: 5,
        latitude: 24.5196000000,
        longitude: 118.3478900000,
        iconPath: "../../../images/resume/img45.png",
        width: 70,
        height: 70,
        callout: {
         
        }

      },
    ],
    mapWidth: '',
    mapHeight: ''

  },
  toaddress: function (e) {
    console.log(e)
    var id = e.markerId
    console.log(id)
    // wx.openLocation({
    //   latitude: this.data.markers[id].latitude,
    //   longitude: this.data.markers[id].longitude,
    // })
    wx.navigateTo({
      url: '/pages/index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sy = wx.getSystemInfoSync(),
      mapWidth = sy.windowWidth * 2,
      mapHeight = sy.windowHeight * 2;
    this.setData({
      mapWidth: mapWidth,
      mapHeight: mapHeight
    })
  },

  setMapHeight: function (params) {
    var that = this;
    that.setData({
      mapHeight: (windowHeight - bottomHeight) + 'px'
    })
    var controlsWidth = 40;
    var controlsHeight = 48;
    //设置中间部分指针
    that.setData({
      controls: [{
        id: 1,
        iconPath: '../../../images/resume/center-location.png',
        position: {
          left: (windowWidth - controlsWidth) / 2,
          top: (windowHeight - bottomHeight) / 2 - controlsHeight * 3 / 4,
          width: controlsWidth,
          height: controlsHeight
        },
        clickable: true
      }]
    })
  },

})