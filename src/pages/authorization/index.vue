<template>
  <div>
    <div>
      <button
        open-type="getUserInfo"
        lang="zh_CN"
        @getuserinfo="bindGetUserInfo"
      >授权登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: null,
      userDetail: null
    }
  },
  mounted () {
    this.get_user_code()
  },
  methods: {
    get_user_code () {
      var that = this
      wx.login({
        success (res) {
          if (res.code) {
            that.code = res.code
          }
        }
      })
    },
    bindGetUserInfo (e) {
      this.userDetail = e.mp.detail.userInfo
      const user = {
        code: this.code,
        userDetail: this.userDetail
      }
      var url = '../../pages/user/main?user=' + user
      wx.switchTab({url})
    }
  }
}
</script>

<style>
</style>