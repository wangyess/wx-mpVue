<template>
  <div class="big-box">
    <div class="container">
       <div class="img-box">
         <img src="../../../static/images/user.png" alt="">
       </div>
    </div>
    <div class="des-text">
        <p>悍刀行申请获得以下权限:</p>
        <p>获得你的公开信息(昵称, 头像等)</p>
    </div>
    <div class="btn-box">
      <button
        class="btn-btn"
        open-type="getUserInfo"
        lang="zh_CN"
        @getuserinfo="bindGetUserInfo"
      >授权登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: null,
      userDetail: null
    }
  },
  mounted () {
    this.get_user_code()
  },
  methods: {
    // 获取登录code
    get_user_code () {
      var that = this
      wx.login({
        success (res) {
          if (res.code) {
            that.code = res.code
          }
        }
      })
    },
    // 获取用户信息
    bindGetUserInfo (e) {
      this.userDetail = e.mp.detail.userInfo
      const user = {
        code: this.code,
        userDetail: this.userDetail
      }
      wx.setStorage({
        key: 'userData',
        data: user
      })
      var url = '../../pages/user/main'
      wx.switchTab({url})
    }
  }
}
</script>

<style>
page{
  background: #fff;
}
.big-box{
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
}
.container{
  width: 100%;
  padding: 100rpx 0 60rpx 0;
}
.img-box{
  width: 400rpx;
  height: 400rpx;
  border-radius: 50%;
}
.img-box img{
  width: 100%;
  height: 100%;
}
.des-text{
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.des-text p{
  font-size: 16px;
  line-height: 2em;
  color: rgb(116, 116, 116);
}
.des-text p:first-child{
  font-weight: 800;
  color: rgb(46, 46, 46);
}
.btn-box{
  width: 100%;
  margin-top: 60rpx;
}
.btn-btn{
  width: 90%;
  color:white;
  border-radius: 20rpx;
  background: rgb(80, 80, 80);
}
</style>