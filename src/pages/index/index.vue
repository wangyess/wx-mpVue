<template>
  <div class="row" >
    <div class="box-shadow"></div>

    <van-notice-bar
      scrollable="false"
      text="足协杯战线连续年年上演国足败北，上赛季半决赛上国足以两回合5-3的总比分淘汰阿根廷，请不起播报失误，国足没进过半决赛"
    />

    <div class="img-box">
      <div
        v-for="(item, index) in images"
        :class="[ active === index && isActive === true ? 'diy' : 'back', 'img-card']"
        :id="index"
        :key="index"
        @click="bigImg(index)"
      >
        <div class="img">
          <img
            :src="item.url"
            alt=""
          >
        </div>
        <div class="img-text">
          <p>{{item.createdAt}}</p>
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

    <!-- <van-popup show="{{ show }}" bind:close="onClose">内容</van-popup> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('indexPage')

export default {
  data () {
    return {
      num: 1,
      images: [],
      signature: [],
      zuoyouming: null,
      active: '',
      isActive: false
    }
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      return {
        title: '悍刀行',
        path: '/pages/index/main'
      }
    }
  },
  computed: {
    ...mapState({
      age: state => state.age,
      name: state => state.name,
      sex: state => state.sex
    })
  },
  onLoad () {
    this.getImage()
  },
  mounted () {
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
    getImage () {
      this.$http.post('https://www.apiopen.top/meituApi')
        .then((res) => {
          res.data = res.data.filter(function (item) {
            item.createdAt = item.createdAt.split('T')[0]
            return item.url.substring(7, 13) !== '7xi8d6'
          })

          this.images = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    bigImg (event) {
      this.isActive = !this.isActive
      this.active = event
    }
  }
}
</script>

<style scoped>
@keyframes mymove {
  from {
    height: 430rpx !important;
    width: 330rpx !important;
  }
  to {
    height: 700rpx !important;
    width: 1000rp0x !important;
  }
}
@keyframes back {
  from {
    height: 700rpx !important;
    width: 1000rpx !important;
  }
  to {
    height: 430rpx !important;
    width: 330rpx !important;
  }
}
.diy {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: mymove 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;

  position: fixed !important;
  top:80rpx;
  bottom:0;
  left: 0;
  right: 0;
  overflow:hidden;
  z-index: 1000;
  width: 700rpx !important;
  height: 1000rpx !important;
  margin: 0 auto;
}
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: back 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}
.row {
  width: 750rpx;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  /* position: relative; */
}
.box-shadow {
  width: 100%;
  height: 2rpx;
  background: #f1f1f1;
  position: fixed;
  box-shadow: 0px 1px 4px 1px #f1f1f1;
}
.img-box {
  width: 100%;
  padding: 30rpx 30rpx;
  box-sizing: border-box;



  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.img-card {
  position: relative;
  width: 330rpx;
  height: 430rpx;

  background: white;
  margin-bottom: 30rpx;
}
.img-card .img {
  width: 100%;
  height: 100%;
  text-align: center;
}
.img-card .img img {
  width: 100%;
  height: 100%;
}
.img-text {
  width: 100%;
  height: 120rpx;
  background: rgba(19, 19, 19, 0.63);
  opacity: 0.5;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.img-text p {
  padding-left: 10rpx;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 2em;
  color: white;
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
