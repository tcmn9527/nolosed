"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "queryQrCode",
      tmpTextarea: "",
      tmpTextarea1: ""
    };
  },
  methods: {
    showTextArea() {
      console.log(this.tmpTextarea);
      this.tmpTextarea1 = this.tmpTextarea.replace(/\n/g, "<br/>");
      this.tmpTextarea1 = this.tmpTextarea1.replace(/\r\n/g, "<br/>");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: $data.tmpTextarea,
    c: common_vendor.o(($event) => $data.tmpTextarea = $event.detail.value),
    d: common_vendor.o((...args) => $options.showTextArea && $options.showTextArea(...args)),
    e: $data.tmpTextarea1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/apple/Downloads/7项目/gitCodes/NoLosed/NoLosed/pages/queryQrCode/queryQrCode.vue"]]);
wx.createPage(MiniProgramPage);
