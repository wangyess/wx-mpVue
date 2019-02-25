<template>
  <div>
  <van-tabs
    :active="active"
    @change="onChange"
    @disabled="onClickDisabled"
  >
    <van-tab title="热门小说">
      <story />
    </van-tab>
    <van-tab title="本周天气">
      <weather />
    </van-tab>
    <van-tab title="新闻资讯">
      <news />
    </van-tab>
    <van-tab disabled title="搞笑视频">内容 4</van-tab>
  </van-tabs>
  </div>
</template>

<script>
import story from '../../components/logPage/story'
import weather from '../../components/logPage/weather'
import news from '../../components/logPage/news'
export default {
  components: {
    story,
    weather,
    news
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange (event) {
      console.log(event)
    },
    onClickDisabled (event) {
      console.log(event)
      wx.showToast({
        title: `${event.mp.detail.title} 涉嫌违规已被禁用`,
        icon: 'none'
      })
    }
  }
}
</script>

<style>

</style>
