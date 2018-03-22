// pages/detail/detail.js
Page({
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //请求图书信息详情
    console.log(options.image);
    console.log(options.bname);
    console.log(options.author);
    console.log(options.abstract);
    that.setData({
      image: options.image,
      bname: options.bname,
      author: options.author,
      abstract1: options.abstract,
    })
    wx.setNavigationBarTitle({
      title: options.bname,
    })
  }
})