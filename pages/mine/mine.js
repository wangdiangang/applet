const app=new getApp()
Page({
    data:{

    },
    onLOad(){
        
    },
    clickCell(){
        console.log('点击了我的地址');
        wx.navigateTo({
          url: '../address/address',
        })
    },

})