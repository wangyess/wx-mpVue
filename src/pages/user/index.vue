<template>
  <div class="big-box">
    <div class="header-card">
       <div class="header-img">
           <img :src="user.userDetail.avatarUrl" alt="">
       </div>
       <div class="des-text"> 
         <div class="item">
           <p>{{user.userDetail.nickName}}</p>
         </div>
         <div class="item">
           <p>{{user.userDetail.country}}{{user.userDetail.province}}{{user.userDetail.city}}</p>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  onShow () {
    this.get_user_data()
  },
  mounted () {

  },
  methods: {
    get_user_data () {
      var that = this
      wx.getStorage({
        key: 'userData',
        success (res) {
          console.log(res.data)
          that.user = res.data
        },
        fail (err) {
          console.log(err)
          that.tiao()
        }
      })
    },
    tiao () {
      setTimeout(function () {
        var url = '../../pages/authorization/main'
        wx.navigateTo({url})
      }, 2000)
    }
  }
}
</script>

<style>
.big-box{
  display: flex;
  flex-direction:column;
  align-items:flex-start;
}
.header-card{
  width: 100%;
  height: 280rpx;
  padding: 40rpx 20rpx;
  flex-wrap: nowrap;
  background: white;
  box-sizing: border-box;
}
.header-img{
  float: left;
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
  overflow: hidden;
  background: seagreen
}
.header-img img{
  width: 100%;
  height: 100%;
}
.des-text{
  float: left;
  margin-left: 40rpx;
}
.des-text .item{
  height: 100rpx;
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
  align-items: center;
}
</style>
