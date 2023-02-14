// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabbarActive: 'mine',
    tabList:[
      {name:'home',icon:'home-o',label:'首页'},
      {name:'home_2',icon:'search',label:'中间页'},
      {name:'mine',icon:'contact',label:'我的'},
    ]
  },
  

  onLoad() {
      console.log('初始化===');
  },
  tabbarChange(e){
    console.log('tabberChange',e.detail,this.data);
    let {tabList}=this.data
    let newTab=tabList.find(item=>item.name==e.detail)
    this.setData({ tabbarActive: e.detail });
    wx.setNavigationBarTitle({
      title:newTab.label
    })
  },
 
})
