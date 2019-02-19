<template>
  <div class="row">
    <div class="slider-box">
      <div>
        <p>徐凤年</p>
      </div>
      <div>
        <p>小泥人</p>
      </div>
      <div>
        <p>白狐脸</p>
      </div>
      <div>
        <p>福禄球</p>
      </div>
    </div>
    <div class="box-shadow">
    
    </div>
    <div class="content">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      home: 'this is home',
      minHeight: 500
    }
  },
  computed: {
    getHeight () {
      var that = this
      wx.getSystemInfo({
        success (res) {
          that.minHeight = res.windowHeight
        }
      })
    }
  },
  methods: {
  }
}
</script>

<style scoped>
page {
  background: rgb(233, 164, 164);
}
.row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  position: relative;
}
.slider-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80rpx;
  background: white;
  position: fixed;
  top: 4rpx;
  left: 0;
  right: 0;
}
.slider-box p {
  font-size: 16px;
  color: rgb(185, 185, 185);
}
.active {
  color: rgb(22, 22, 22);
}
.box-shadow{
  width: 100%;
  height: 2rpx;
  background: #f1f1f1;
  position: fixed;
  box-shadow: 0px 1px 4px 1px #f1f1f1
}
.content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 84rpx;
  padding: 40rpx 20rpx;
}
.card {
  width: 345rpx;
  height: 500rpx;
  background: white;
  margin-bottom: 20rpx;
}
</style>
