//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  s_list_tasks: function() {
    wx.navigateTo({
      url: '../s_tasks/s_tasks'
    })
  },
  t_assignment: function() {
    wx.navigateTo({
      url: '../t_assignment/t_assignment'
    })
  },
  t_tasks: function() {
    wx.navigateTo({
      url: '../t_tasks/t_tasks'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
