<template>
  <div class="row">
    <div class="slider-box">
      <div
        class="item"
        @click="addClass(1)"
      >
        <p v-bind:class="[1==num ? 'active': 'defaultClass']">徐凤年</p>
      </div>
      <div
        class="item"
        @click="addClass(2)"
      >
        <p v-bind:class="[2==num ? 'active': 'defaultClass']">小泥人</p>
      </div>
      <div
        class="item"
        @click="addClass(3)"
      >
        <p v-bind:class="[3==num ? 'active': 'defaultClass']">白狐脸</p>
      </div>
      <div
        class="item"
        @click="addClass(4)"
      >
        <p v-bind:class="[4==num ? 'active': 'defaultClass']">福禄球</p>
      </div>
    </div>
    <div class="box-shadow"></div>
    <div class="content">
      <div
        class="card"
        v-for="user in users"
      >
        <div class="title">
          <h4>{{user.username}}</h4>
        </div>
        <div class="subtitle">
          <span>{{user.name}}</span>
        </div>
        <div class="contant">
          <p>Phone - </p>
          <p><span>{{user.phone}}</span></p>
        </div>
        <div class="contant">
          <p>Email - </p>
          <p><span>{{user.email}}</span></p>
        </div>
        <div class="c-text">
          <p>{{user.company.bs}},{{user.company.catchPhrase}}.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      num: 1,
      users: []
    }
  },
  mounted () {
    wx.login({
      success (res) {
        if (res.code) {
          console.log(res)
        }
      }
    })
    this.get_data()
  },
  methods: {
    get_data () {
      var that = this
      wx.request({
        url: 'https://jsonplaceholder.typicode.com/users', // 仅为示例，并非真实的接口地址
        method: 'GET',
        dataType: 'json',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.users = res.data
          console.log(that.users)
        }
      })
    },
    addClass (index) {
      this.num = index
    }
  }
}
</script>

<style scoped>
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
.slider-box {
  font-size: 16px;
  color: rgb(185, 185, 185);
}
.active {
  color: rgb(22, 22, 22);
}
.defaultClass {
  color: rgb(185, 185, 185);
}
.box-shadow {
  width: 100%;
  height: 2rpx;
  background: #f1f1f1;
  position: fixed;
  box-shadow: 0px 1px 4px 1px #f1f1f1;
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
  padding: 10rpx 10rpx;
  overflow: hidden;
  box-sizing: border-box;
}

.card .subtitle span {
  font-size: 16px;
  color: rgb(92, 92, 92);
}
.card .contant {
  margin-top: 20rpx;
}
.card .contant p {
  font-size: 14px;
  color: rgb(83, 83, 83);
}
.card .contant p span {
  font-size: 12px;
  color: rgb(104, 104, 104);
}
.card .c-text p {
  font-size: 14px;
  line-height: 1.5em;
  margin-top: 20rpx;
  text-align: justify;
text-justify: newspaper;
word-break: break-all;
  color: rgb(117, 117, 117);
}
</style>
