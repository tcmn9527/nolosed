"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello2"
    };
  },
  onLoad() {
  },
  methods: {
    jump() {
      console.log("点击了跳转按钮");
      common_vendor.index.redirectTo({
        url: "/pages/editQrCode/editQrCode"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.jump && $options.jump(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/apple/Downloads/7项目/gitCodes/NoLosed/NoLosed/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
