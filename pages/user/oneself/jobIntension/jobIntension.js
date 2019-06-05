// pages/user/oneself/jobIntension/jobIntension.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobSalary:'3000以下',
    city:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadInfo();  
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
  selectSalary:function(){
    wx.navigateTo({
      url: '../salary/salary',
    })
  },
  selectCity:function(){
     wx.navigateTo({
       url: '../selectCity/selectCity',
     })
  },
  loadInfo: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        // success  
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },

  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'http://api.map.baidu.com/geocoder/v2/?ak=ev790l0FyY0AB8iIwwKCcggE76XD5RBh&location=' + latitude + ',' + longitude + '&output=json&pois=1',
      //这里的ak 是去百度地图api获取的需要自己登陆获取一下  地址：https://lbsyun.baidu.com/index.php?title=wxjsapi
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        console.log(res);
        var city = res.data.result.addressComponent.city;

        console.log("城市为" + city)
        page.setData({ city: city });
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  }
})