<template>
  <div class="big-box">

    <div class="notice-box">
      <van-notice-bar text="有位非常漂亮的女同事，有天起晚了没有时间化妆便急忙冲到公司。结果那天她被记旷工了……吃惊" />
    </div>

    <div class="login-box">
      <div class="login-img">
        <img v-show="!login"
          src="../../../static/images/handao.jpg"
          alt=""
        >
        <img v-show="login" :src="user.userDetail.avatarUrl" alt="">
      </div>
      <div class="user-detail">
          <p @click="routerTo">登陆</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      login: false
    }
  },
  onShow () {
    this.get_user_data()
  },
  mounted () {

  },
  methods: {
    routerTo () {
      this.$router.push('/pages/authorization/main')
    },
    get_user_data () {
      var that = this
      wx.getStorage({
        key: 'userData',
        success (res) {
          if (res) {
            console.log(res.data)
            that.user = res.data
            that.login = true
          }
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
        wx.navigateTo({ url })
      }, 2000)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.big-box {
  width: 750rpx;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.notice-box {
  width: 750rpx;
}
.login-box {
  width: 750rpx;
  padding: 40rpx 20rpx;
  box-sizing: border-box;
  background: #c7c7c7;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.login-box .login-img {
  width: 130rpx;
  height: 130rpx;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
}
.login-box .login-img img {
  width: 100%;
  height: 100%;
}
.login-box .user-detail{
  font-size: 16px;
  margin-left:30rpx; 
}
</style>
