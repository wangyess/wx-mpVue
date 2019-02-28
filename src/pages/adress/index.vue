<template>
  <div class="adress-box">
    <div class="new-adress">
      <van-button
        type="primary"
        round
        custom-class="button-style"
        @click="routerTo"
      >添加新地址</van-button>
    </div>

    <div class="card-box" v-for="(item, index) in addressArray" :key="item.defaultValue">
      <div class="item-card">
        <div class="item-user">
          <div>
            <p>{{item.consigneeName}}</p>
          </div>
          <div>
            <p>{{item.phoneNumber}}</p>
          </div>
        </div>
        <div class="item-address">
          <p>{{item.theArea}}{{item.detailAddress}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      addressArray: []
    }
  },
  onShow () {
    this.getData()
  },
  methods: {
    getData () {
      let data = wx.getStorageSync('addressArray')
      console.log(data)
      if (data.length > 0) {
        this.addressArray = data
      }
    },
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
.adress-box .new-adress .button-style {
  width: 100%;
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
.card-box {
  width: 100%;
  height: 200rpx;
  border-radius: 30rpx;
  background: white;
  margin-bottom: 40rpx;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.card-box:nth-last-child(1){
   margin-bottom: 180rpx;
}
.item-card {
  padding: 30rpx 30rpx;
  box-sizing: border-box;
}
.item-user {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-user p {
  font-size: 16px;
  line-height: 2em;
  color: rgb(65, 65, 65);
}
.item-address {
  font-size: 16px;
  line-height: 2em;
  color: rgb(99, 99, 99);
}
</style>
