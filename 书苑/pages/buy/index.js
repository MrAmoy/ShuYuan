//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    hidden: true

  },

  bname: "",
  username: "",
  phone: "",
  address: "",

  bindInputBlur: function (e) {
    var that = this;
    this.bname = e.detail.value;
  },
  bindInputBlur1: function (e) {
    var that = this;
    this.username = e.detail.value;
  },
  bindInputBlur2: function (e) {
    var that = this;
    this.phone = e.detail.value;
  },
  bindInputBlur3: function (e) {
    var that = this;
    this.address = e.detail.value;
  },

  //点击按钮发送弹幕
  save: function () {
    var that = this;
    that.setData({
      bname: this.bname,
      username1: this.username,
      address1: this.address,
      phone1: this.phone,
      hidden: false
    });
  }
})
