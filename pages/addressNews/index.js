var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;


const add=getApp()
Page({
    data:{
      longitude:'116.404053',
      latitude:'39.91517',
      markers:[{
        longitude:116.404053,
        latitude:39.91517,
        id: 0,
        width: 34,
        height: 49,
        callout:{
          color:'red',
          bgColor:'#ccc',
          content:'内容区'
        }
      }]
    },
    onLoad(){
      qqmapsdk = new QQMapWX({
        key: 'MFJBZ-NTL32-TD3UM-CJSRW-RJCDV-KVBRW'
    });
    qqmapsdk.reverseGeocoder({
      longitude:116.404053,
      latitude:39.91517,
      success:res=>{
        console.log('逆解析',res);
      },
      fail:err=>{
        console.log('错误',err);
      },
      complete:res=>{
        console.log('complete',res);
      }
    })
      wx.setNavigationBarTitle({
        title: '地址新增',
      })
      console.log('初始化定位');
      wx.getLocation({
        type: 'gcj02',
        success (res) {
         console.log('res',res);
        }
       })
    },
    regionchange(e){
      console.log('拖动',e);
      if (e.type=='begin') {
          console.log('前',e.detail);
      }else{
        console.log('后',e.detail.centerLocation);
        this.setData({
          markers:[{
            longitude:e.detail.centerLocation.longitude,
            latitude:e.detail.centerLocation.latitude,
            id: 0,
            width: 34,
            height: 49,
            callout:{
              color:'red',
              bgColor:'#ccc',
              content:'内容区'
            }
          }]
        })
      }
    
    },
    getAddress(){
      console.log(111);
      wx.chooseAddress({
        success: (res) => {
          console.log('获取本地地址',res);
        },
      })
    }
})