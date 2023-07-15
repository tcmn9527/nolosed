"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showDialog: false,
      msgExamples: [
        {
          id: 1,
          msg: "<p>好心人您好：</p><p>&emsp;这是我女儿的防丢牌，我是孩子的妈妈，如果小孩不慎迷路走丢或者遇到其他任何意外，麻烦您给我打个电话，万分感谢，万分感谢，小孩的安全牵动全家人的心，祝您好人一生平安！</p>",
          height: "150rpx"
        },
        {
          id: 2,
          msg: "<p>好心人您好：</p><p>&emsp;这是家里老人的防丢牌，老人78岁了，脑子有点糊涂，如果您发现她迷路了或者遇到其他任何意外了，请帮忙给我打个电话，太感谢您了！</p><p>&emsp;老人有高血压，心脏病，上衣口袋有速效救心丸。</p>",
          height: "160rpx"
        },
        {
          id: 3,
          msg: "<p>好心人您好：</p><p>&emsp;这是我家狗狗的防丢牌，突然不知道跑到哪里去了，您如果看见狗狗了，麻烦给我打个电话，真是太感谢您了</p>",
          height: "95rpx"
        },
        {
          id: 4,
          msg: "<p>好心人您好：</p></p>&emsp;这是我家猫咪的防丢牌，它不小心走失了，您如果看见它了，能不能给我打个电话，必有重谢，好人一生平安！</p>",
          height: "95rpx"
        }
      ]
    };
  },
  methods: {
    editViewHeight(heightValue) {
      return {
        height: heightValue
      };
    },
    select(msg) {
      console.log(msg);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msgExamples, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.id),
        b: common_vendor.o(($event) => $options.select(item.msg), item.id),
        c: item.msg,
        d: common_vendor.s($options.editViewHeight(item.height)),
        e: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/apple/Downloads/7项目/gitCodes/NoLosed/NoLosed/pages/msgExamples/msgExamples.vue"]]);
wx.createPage(MiniProgramPage);
