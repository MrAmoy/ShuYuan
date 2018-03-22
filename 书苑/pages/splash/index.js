// pages/splash/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "images": [
      {
        "path": "../../images/002.jpg"
      },
      {
        "path": "../../images/005.jpg"
      },
      {
        "path": "../../images/slide21.jpeg"
      },
      {
        "path": "../../images/006.jpg"
      }      
    ]
  },

  //按钮的绑定事件
  handleStart: function (e) {
    //点击按钮后我们要进行页面的跳转
    wx.switchTab({
      url: '../books/index',
    })

  }

})