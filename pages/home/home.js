const app=getApp()
Page({
    data:{
        name:'home'
    },
    onload(){

    },
    getUserInfo(e) {
        console.log(121212);
        console.log(e);
      },
      getPhoneNumber(e){
        console.log('获取手机号',e.detail);
      }
})