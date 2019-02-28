<template>
  <div class="news">
    <div
      class="newCard"
      v-for="(item, index) in news"
      :key="index"
    >
      <div class="newImg">
        <img
          :src="item.picInfo[0].url"
          alt=""
        >
      </div>
      <div class="newText">
        <div class="titles">
          <p>{{item.title}}</p>
        </div>
        <div class="text">
          <p><span>{{item.source}}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>{{item.ptime}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: []
    }
  },
  mounted () {
    this.getNewsData()
  },
  methods: {
    getNewsData () {
      this.$http.get('https://www.apiopen.top/journalismApi')
        .then((res) => {
          this.news = res.data.war
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.news {
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.newCard {
  margin-bottom: 20rpx;
  padding: 10rpx 10rpx;
  background: white;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.newImg {
  width: 150rpx;
  height: 150rpx;
}
.newImg img {
  width: 100%;
  height: 100%;
}
.newText {
  width: 540rpx;
  padding-left: 20rpx;
  box-sizing: border-box;
  font-size: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news .newText .titles {
  color: rgb(58, 58, 58);
  line-height: 1.5em;
}
.newText .text {
  font-size: 14px;
  color: rgb(129, 129, 129);
  line-height: 1.5em;
}
</style>

