<template>
  <div class="big-box">
    <!-- notice -->
    <div class="notice-box">
      <van-notice-bar text="有位非常漂亮的女同事，有天起晚了没有时间化妆便急忙冲到公司。结果那天她被记旷工了……吃惊" />
    </div>
    <!-- login -->
    <div class="login-box">
      <div class="login-img">
        <img
          v-if="!login"
          src="../../../static/images/handao.jpg"
          alt=""
        >
        <img
          v-else
          :src="user.userDetail.avatarUrl"
          alt=""
        >
      </div>
      <div class="user-detail">
        <p
          v-if="!login"
          @click="routerTo"
        >登陆</p>
        <p v-else>{{user.userDetail.nickName}}</p>
      </div>
    </div>
    <!-- item -->
    <div class="items-box">
      <div class="item-card">
        <van-cell-group>
        <van-cell title="收货地址" icon="location-o" is-link url="../../pages/adress/main" link-type="navigateTo" />
        <van-cell title="联系客服" icon="audio" is-link />
        <van-cell title="关于我们" icon="friends-o" is-link />
        <van-cell title="版本信息" icon="new-o" is-link />
        </van-cell-group>
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
.login-box .user-detail {
  font-size: 16px;
  font-weight: 500;
  margin-left: 30rpx;
}
.items-box {
  width: 750rpx;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
