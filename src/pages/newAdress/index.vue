<template>
  <div>

    <van-cell-group>
      <van-field
        :value="consigneeName"
        clearable
        label="收货人姓名"
        placeholder="姓名"
        @change="inputName"
      />
      <van-field
        :value="phoneNumber"
        clearable
        type="number"
        label="手机号码"
        placeholder="11电话号码"
        @change="inputPhone"
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
        @change="inputDetaileADD"
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

    <van-notify id="custom-selector" />
  </div>
</template>

<script>
import area from '../../utils/area'
import Notify from '../../../static/vant/notify/notify'
export default {
  data () {
    return {
      consigneeName: '',
      phoneNumber: '',
      theArea: '',
      detailAddress: '',
      show: false,
      areaList: area,
      defaultValue: '110101',
      text: '',
      addressArray: []
    }
  },
  onShow () {
    this.init()
  },
  methods: {
    inputName (event) {
      this.consigneeName = event.mp.detail
    },
    inputPhone (event) {
      this.phoneNumber = event.mp.detail
    },
    inputDetaileADD (event) {
      this.detailAddress = event.mp.detail
    },
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
        let addressObject = {
          'consigneeName': this.consigneeName,
          'phoneNumber': this.phoneNumber,
          'theArea': this.theArea,
          'detailAddress': this.detailAddress,
          'defaultValue': this.defaultValue
        }
        var that = this

        let data = wx.getStorageSync('addressArray')
        if (data.length > 0) {
          that.addressArray = data
        }

        that.addressArray.push(addressObject)

        wx.setStorage({
          key: 'addressArray',
          data: that.addressArray,
          success: function (res) {
            that.$router.back()
          }
        })
      } else {
        if (this.consigneeName === '') {
          this.text = '收货人姓名不能为空'
          this.promptMessage()
          return
        }
        if (this.phoneNumber === '') {
          this.text = '收货人电话不能为空'
          this.promptMessage()
          return
        }
        if (this.theArea === '') {
          this.text = '所在区域不能为空'
          this.promptMessage()
          return
        }
        if (this.detailAddress === '') {
          this.text = '详细地址不能为空'
          this.promptMessage()
        }
      }
    },
    promptMessage () {
      Notify({
        text: `${this.text}`,
        duration: 2000,
        selector: '#custom-selector',
        backgroundColor: '#ababab'
      })
    },
    init () {
      this.consigneeName = ''
      this.phoneNumber = ''
      this.theArea = ''
      this.detailAddress = ''
      this.show = false
      this.areaList = area
      this.defaultValue = '110101'
      this.text = ''
      this.addressArray = []
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
