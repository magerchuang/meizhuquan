// pages/user/publish/publish.js
var app = getApp();
var queryUrl = app.globalData.queryUrl;
const VodUploader = require('../../../lib/vod-web-sdk-v5.1');
var nowDate = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vsrc:'',
    city: '',
    latitude: '',
    longitude: '',
    location:'',
    text:'',
    signature:'',
    thumb:'',
    picture:'',
    content:'',
    disabled:false
  },
  getSignature: function (callback) {
    wx.request({
      url: queryUrl + 'video/upload_sign',
      method: 'POST',
      data: {
        Action: 'GetVodSignatureV2'
      },
      dataType: 'json',
      success: function (res) {
        if (res.data && res.data.signature) {
          callback(res.data.signature);
        } else {
          return '获取签名失败';
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(nowDate.nowDate(new Date()));
    var that = this;
    // qqmapsdk = new QQMapWX({
    //   key: 'USJBZ-3LH6D-JWD4K-PYRYA-3DR32-SMBVJ' // 必填
    // });
    var picture = options.picture;
    var vsrc = options.videosrc;
    if (picture && vsrc){
        that.setData({
          picture: picture,
          vsrc:vsrc
        })
     }
    console.log('picture---' + picture);
    console.log('vsrc---' + vsrc);
   // this.getLocationDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   // this.getSignature();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({disabled:false})
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
  /**点击发布**/
  chooseFile:function(){
    var that = this;
    console.log('发布');
    if(that.data.content ==''){
      wx.showToast({
        title: '说点什么吧！',
        icon: 'none'
      })
      return; 
    }else if(that.data.location == ''){
        wx.showToast({
          title: '请添加所在位置',
          icon:'none'
        })
        return;
    }
    wx.showLoading({
      title: '上传中...',
      mask:true
    })
    that.setData({disabled:true})
    //上传视频首帧图片
    wx.uploadFile({
      url: queryUrl + 'video/uploadImg',
      filePath: that.data.picture,
      name: 'image',
      formData: {},
      success(res) {
        console.log(res.data);
        //do something
        const json = JSON.parse(res.data)
        that.setData({ thumb: json.thumb, picture: json.picture})
      }
    })
   // console.log(that.getSignature)
    var file = {tempFilePath: that.data.vsrc};
    VodUploader.start({
      videoFile: file, //必填，把chooseVideo回调的参数(file)传进来
      fileName: nowDate.nowDate(new Date()) +'_'+  app.globalData.userId, //选填，视频名称，强烈推荐填写(如果不填，则默认为“来自微信小程序”)
      getSignature: that.getSignature, //必填，获取签名的函数
      success: function (result) {
        console.log('success');
        console.log(result);
      },
      error: function (result) {
        console.log('error');
        console.log(result);
      },
      progress: function (result) {
        console.log('progress');
        console.log(result);
        wx.showLoading({
          title: '已上传98%',
        })
      },
      finish: function (result) {
        console.log('finish');
        console.log(result);
        wx.request({
          url: queryUrl + 'video/add',
          method: 'POST',
          data: {
            videoName: result.videoName, 
            videoUrl: result.videoUrl, 
            fileId: result.fileId,
            picture: that.data.picture,
            userId: app.globalData.userId,
            thumb:that.data.thumb,
            content:that.data.content,
            latitude: that.data.latitude,
            longitude: that.data.longitude,
            location: that.data.location
          },
          dataType: 'json',
          success: function (res) {
            wx.hideLoading();
            if (res.data.status) {
              wx.showToast({
                title: '上传成功'
              });
              setTimeout(()=>{
                wx.reLaunch({
                  url: '../../index/index',
                })
              },500)
              
            } else {
              wx.showToast({
                title: '上传失败'
              });
            }
          }
        });

      }
    });
  },
  bindinput:function(e){
    console.log(e);
    this.setData({
       content:e.detail.value
    })
  },
  goLocal: function (e) {
    var that = this;
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
      success(res) {
        console.log(res.authSetting['scope.userLocation']);
        if (!res.authSetting['scope.userLocation']) {
          wx.openSetting({
            success(res) {
              //console.log(res.authSetting)
              // res.authSetting = {
              //   "scope.userInfo": true,
              //   "scope.userLocation": true
              // }
            }
          })
        }
        else {
          wx.chooseLocation({
            success: function (res) {
              that.setData({
                location: res.address,
                latitude: res.latitude,
                longitude: res.longitude
              })
              //console.log(res);
            },
            complete: function () {
            }
          })
        }
      }
    })
  }
})