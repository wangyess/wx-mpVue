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
        <p v-bind:class="[2==num ? 'active': 'defaultClass']" @click="goTheRouter">小泥人</p>
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
        v-for="(user, index) in users"
        :key="index"

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
    <div class="user-box">
      <div class="user-detail">
        <div class="user-Iofo">
          <p @click="changeName">姓名 ：<span>{{name}}</span></p>
          <p>年龄 ：<span>{{age}}</span>&nbsp;&nbsp;&nbsp;&nbsp; 性别 ：<span>{{sex}}</span></p>
        </div>
        <div class="user-des">
          <p>{{zuoyouming}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('indexPage')

export default {
  data () {
    return {
      num: 1,
      users: [],
      zuoyouming: null
    }
  },
  computed: {
    ...mapState({
      age: state => state.age,
      name: state => state.name,
      sex: state => state.sex
    })
  },
  mounted () {
    this.getUserInfo()
    this.getSetting()
    this.get_fly_data()
    this.zuoyouming = this.mergeText()
  },
  methods: {
    ...mapGetters([
      'mergeText'
    ]),
    ...mapMutations([
      'ChineseName',
      'EnglishName'
    ]),
    ...mapActions([
      'switchName'
    ]),
    changeName () {
      this.switchName()
    },
    goTheRouter () {
      this.$router.push('/pages/authorization/main')
    },
    getUserInfo () {
      wx.login({
        success (res) {
          if (res.code) {
            console.log(res)
          }

          // wx.getUserInfo({
          //   lang: 'zh_CN',
          //   success (res) {
          //     const userInfo = res.userInfo
          //     console.log(userInfo)
          //   }
          // })
        }
      })
    },
    // 查看权限
    getSetting () {
      wx.getSetting({
        success (res) {
          // 允许获取头像
          console.log(res.authSetting['scope.userInfo'])
          // res.authSetting = {
          //   "scope.userInfo": true,
          //   "scope.userLocation": true
          // }
        }
      })
    },
    get_fly_data () {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          this.users = res
        })
        .catch((err) => console.log(err))
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
.user-box {
  margin: 0rpx 20rpx 40rpx 20rpx;
}
.user-detail {
  font-size: 14px;
  line-height: 1.5em;
  padding: 10rpx 10rpx;
  background: white;
}
.user-Iofo p {
  color: rgb(105, 105, 105);
}
.user-Iofo p span {
  color: rgb(68, 68, 68);
}
.user-des p {
  color: rgb(105, 105, 105);
}
</style>
