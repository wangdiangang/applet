const app = new getApp()
Page({
  data:{
    addressList:[
      {
        userName:'五道杠',
        address:'中共中央国务院，辽宁省委东山县，龙泉山庄药膳部，常务经理李宝库',
        phone:'13800138000',
        id:'123'
      },
      {
        userName:'撒十多万',
        address:'中共中央国务院',
        phone:'17768298976',
        id:'456'
      }
    ]
  },
  onLoad(){
    console.log('我的地址初始化');
  },
  bindEdit(e){
    console.log('编辑',e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../addressNews/index',
    })
  },
  filterValue(val){
      console.log(val);
      return val
  }
})