<template>
  <div>
    <div>
      <button @click="tiao">tiao</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 23
    }
  },
  mounted () {
    console.log(2)
    // this.tiao()
  },
  onLoad: function (option) {
    console.log(option)
    if (JSON.stringify(option) === '{}') {
      this.tiao()
    } else {
      console.log(option)
    }
  },
  methods: {
    tiao () {
      var url = '../../pages/authorization/main'
      wx.navigateTo({url})
    }
  }
}
</script>

<style>
</style>
