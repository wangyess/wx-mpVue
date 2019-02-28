<template>
  <div class="version">
    <div class="logo-box">
      <div class="logo">
        <img
          src="../../../static/images/handao.jpg"
          alt=""
        >
      </div>
      <p>版本号 - V1.0.0</p>
    </div>
    <van-cell-group>
      <van-cell
        title="检查更新"
        @click="checkVersion"
        is-link
      />
    </van-cell-group>
    <van-toast id="van-toast" mask />
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast'
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    checkVersion () {
      Toast.loading({
        mask: true,
        message: '检查中...',
        loadingType: 'spinner',
        duration: '10000000000'
      })
      var that = this
      var timer = setTimeout(function () {
        that.show = false
        if (!that.show) {
          Toast.clear()
          Toast('当前已经是最新版本')
          clearTimeout(timer)
        }
      }, 5000)
    }
  }
}
</script>

<style>
.version {
  width: 750rpx;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.logo-box {
  width: 750rpx;
  font-size: 15px;
  line-height: 2.5em;
  color: rgb(95, 95, 95);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  margin-top: 200rpx;
}
.logo img {
  width: 100%;
  height: 100%;
}
</style>

