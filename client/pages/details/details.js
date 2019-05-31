// client/pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodDetails: {},
    windowWidth: 0
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
    wx.getStorage({
      key: 'commodDetails',
      success: (res) => {
        var data = JSON.parse(res.data)
        this.setData({
          commodDetails: data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'windowWidth',
      success: (res) => {
        this.setData({
          windowWidth: res.data
        })
      },
    })
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