<template>
  <div class="story">
    <div
      v-if='show'
      class="isshow"
    >
      <van-loading type="spinner" />
    </div>
    <div
      v-if="!show"
      class="story-card"
      v-for="(story, index) in storyData"
    >
      <div class="title">
        <p>{{story.bookname}}</p>
      </div>
      <div class="story-top">
        <div class="story-img">
          <img
            :src="story.book_cover"
            alt=""
          >
        </div>
        <div class="story-content">
          <p>作者：<span>{{story.author_name}}</span></p>
          <p>状态：<span>{{story.stat_name}}</span></p>
          <p>类型：<span>{{story.class_name}}</span></p>
        </div>
      </div>
      <div class="style-color"></div>
      <div class="story-bottom">
        <p>{{story.introduction}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      storyData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('https://www.apiopen.top/novelApi')
        .then((res) => {
          if (res) {
            this.show = false
            this.storyData = res.data
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.isshow {
  width: 100%;
  padding-top: 300rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.story {
  width: 730rpx;
  margin: 10rpx 10rpx;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.story-card {
  width: 350rpx;
  padding: 15rpx;
  background: white;
  margin-bottom: 30rpx;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  width: 320rpx;
  height: 64rpx;
  color: rgb(61, 61, 61);
  font-size: 16px;
  line-height: 2em;
  box-sizing: border-box;

  margin-bottom: 10rpx;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.story-top {
  width: 100%;
  margin-bottom: 20rpx;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.story-img {
  width: 150rpx;
  height: 200rpx;
}
.story-img img {
  width: 100%;
  height: 100%;
}
.story-content {
  width: 170rpx;
  padding-left: 10rpx;
  box-sizing: border-box;
}
.story-content p {
  font-size: 12px;
  line-height: 1.5em;
  color: rgb(97, 97, 97);
}
.story-bottom {
  width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.story-bottom p {
  color: rgb(97, 97, 97);
  font-size: 14px;
  line-height: 1.5em;
}
.style-color {
  width: 100%;
  height: 2rpx;
  background: rgb(204, 204, 204);
}
</style>
