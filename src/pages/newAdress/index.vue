<template>
  <div>

    <van-cell-group>
      <van-field
        :value="consigneeName"
        clearable
        label="收货人姓名"
        placeholder="姓名"
      />
      <van-field
        :value="phoneNumber"
        clearable
        label="手机号码"
        placeholder="11电话号码"
      />
      <van-field
        :value="theArea"
        clearable
        disabled
        label="所在地区"
        placeholder="选择地区"
        @click="shows"
      />
      <van-field
        :value="detailAddress"
        clearable
        label="详细地址"
        placeholder="道路、小区、楼栋号、单元、室等"
      />
    </van-cell-group>

    <van-popup
      :show="show"
      position="bottom"
      @close="onClose"
      safe-area-inset-bottom
      close-on-click-overlay
    >
      <van-area
        :area-list="areaList"
        :value="defaultValue"
        @cancel="onClose"
        @confirm="selected"
      />
    </van-popup>

    <div class="new-adress">
      <van-button
        type="primary"
        round
        custom-class="button-style"
        @click="routerTo"
      >保存新地址</van-button>
    </div>

  </div>
</template>

<script>
import area from '../../utils/area'

export default {
  data () {
    return {
      consigneeName: '',
      phoneNumber: '',
      theArea: '',
      detailAddress: '',
      show: false,
      areaList: area,
      defaultValue: '110101'
    }
  },
  methods: {
    shows () {
      this.show = true
    },
    onClose () {
      this.show = false
    },
    selected (evnet) {
      let address = evnet.mp.detail.values
      address.forEach(item => {
        this.theArea += item.name + ' '
      })
      this.defaultValue = address[2].code
      this.show = false
    },
    routerTo () {
      if (this.consigneeName !== '' && this.phoneNumber !== '' && this.theArea !== '' && this.detailAddress !== '') {
        this.$router.back()
      } else {
        // this.isShow = true
        console.log('不行')
      }
    }
  }
}
</script>

<style>
.new-adress {
  width: 750rpx;
  box-sizing: border-box;
  padding: 20rpx 40rpx;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 80rpx;
}
.new-adress .button-style {
  width: 100%;
}
</style>
