<template>
  <div class="adress-box">
    <div class="new-adress">
      <van-button type="primary" round custom-class="button-style" @click="routerTo">添加新地址</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    routerTo () {
      this.$router.push('../../pages/newAdress/main')
    }
  }
}
</script>

<style>
.adress-box {
  width: 750rpx;
  box-sizing: border-box;
  padding: 20rpx 20rpx;
}
.adress-box .new-adress .button-style{
  width: 100%
}
.new-adress {
  width: 750rpx;
  box-sizing: border-box;
  padding: 20rpx 40rpx;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 80rpx;
}
</style>
