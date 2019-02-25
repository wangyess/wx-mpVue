<template>
  <div class="weather">
    <div
      class="weather-card"
      v-for="(item, index) in cityWeatherData"
    >
      <div class="weather-title">
        <p>城市：<span>{{city}}</span></p>
      </div>
      <div class="dateType">
        <div class="dateType-left">
          <p>{{item.date}}</p>
        </div>
        <div class="dateType-right">
          <p>{{item.type}}</p>
        </div>
      </div>
      <div class="HighLow">
        <p>{{item.high}} ~ {{item.low}}</p>
      </div>
      <div class="wind">
        <p>风向：<span>{{item.fengxiang}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      city: null,
      cityWeatherData: []
    }
  },
  mounted () {
    this.getWeatherData()
  },
  methods: {
    getWeatherData () {
      this.$http.get('https://www.apiopen.top/weatherApi?city=%E5%A4%A7%E8%BF%9E')
        .then((res) => {
          console.log(res)
          this.city = res.data.city
          this.cityWeatherData = res.data.forecast
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.weather {
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.weather-card {
  /* width: 100%; */
  margin-bottom: 20rpx;
  padding: 10rpx 10rpx;
  background: white;
}
.weather-title p {
  font-size: 14px;
  color: rgb(66, 66, 66);
  line-height: 2em;
}
.weather-title p span {
  color: rgb(126, 126, 126);
}
.dateType {
  font-size: 14px;
  line-height: 2em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dateType-left {
  color: rgb(126, 126, 126);
}
.dateType-right {
  font-size: 15px;
  color: rgb(63, 63, 63);
  padding-right: 40rpx;
}
.HighLow {
  font-size: 14px;
  line-height: 2em;
  color: rgb(126, 126, 126);
}
.wind {
  font-size: 14px;
  line-height: 2em;
}
.wind p {
  color: rgb(66, 66, 66);
}
.wind p span {
  color: rgb(126, 126, 126);
}
</style>
