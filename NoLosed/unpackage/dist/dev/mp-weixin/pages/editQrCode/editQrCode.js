"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msgExample: [
        {
          msg: ""
        }
      ],
      tmpTextarea1: "您好：\r\n这是我"
    };
  },
  methods: {
    showExample() {
      common_vendor.index.redirectTo({
        url: "/pages/msgExamples/msgExamples"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showExample && $options.showExample(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/apple/Downloads/7项目/gitCodes/NoLosed/NoLosed/pages/editQrCode/editQrCode.vue"]]);
wx.createPage(MiniProgramPage);
