// client/pages/all/all.js
import commodArrayData from '../../data/all.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  /**
   * 进入详情页
   */
  showDetail: function (event) {
    var details = JSON.stringify(event.currentTarget.dataset.details)
    wx.setStorage({
      key: "commodDetails",
      data: details
    })
    wx.navigateTo({
        url: '/pages/details/details',
    })
  },
  clipKouLing: function (event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.kouling,
      success: function (res) {
        wx.showModal({
          title: '提示',
          content: '淘口令复制成功，请打开手机淘宝查看',
          showCancel: false
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: commodArrayData
    })
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

  }
})