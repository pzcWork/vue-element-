webpackJsonp([24],{"3wnd":function(e,r,t){"use strict";var s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"all_com"},[t("div",{staticClass:"title_com"},[e._v("发货管理")]),e._v(" "),t("el-card",{staticClass:"box-card",attrs:{"body-style":{"background-color":"#ffffff"}}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("当前订单"),e.isOffine?t("span",[e._v("（线下订单）")]):e._e()])]),e._v(" "),t("table",{staticClass:"order_detail"},[t("tr",[t("th",[e._v("ID")]),e._v(" "),t("th",[e._v("用户名")]),e._v(" "),t("th",[e._v("商品ID")]),e._v(" "),t("th",[e._v("商品名")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("单价")]),e._v(" "),t("th",[e._v("数量")]),e._v(" "),t("th",[e._v("优惠金额")]),e._v(" "),t("th",[e._v("总价")]),e._v(" "),t("th",[e._v("支付方式")]),e._v(" "),t("th",[e._v("状态")])]),e._v(" "),t("tr",[t("td",[e._v(e._s(e.orderInfo.Id))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.User?e.orderInfo.User.Account:""))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.Product?e.orderInfo.Product.ID:""))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.Product?e.orderInfo.Product.Name:""))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.IsPresell?"预售":"全款"))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.ProductOriginPrice))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.Amount))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.Discount))]),e._v(" "),t("td",[e._v(e._s(e.orderInfo.TotalShouldPayPrice))]),e._v(" "),t("td",["UnionPay"==e.orderInfo.Payment?t("span",[e._v("人民币")]):"BTC"==e.orderInfo.Payment?t("span",[e._v("BTC")]):t("span",[e._v(e._s(e.orderInfo.Payment))])]),e._v(" "),t("td",["PRE_AFTER_SALE"==e.orderInfo.Status?t("span",[e._v("售后订单待确认")]):"UNPAID"==e.orderInfo.Status?t("span",[e._v("待确认支付")]):"PRESELL_PAID"==e.orderInfo.Status?t("span",[e._v("已支付定金")]):"BEGIN_FINAL_PAY"==e.orderInfo.Status?t("span",[e._v("开始支付尾款")]):"WAIT_FOR_FINAL_PAY"==e.orderInfo.Status?t("span",[e._v("待支付尾款")]):"PAID"==e.orderInfo.Status?t("span",[e._v("已完成支付")]):"UNDELIVERED"==e.orderInfo.Status&&0==e.orderInfo.IsHostingOrder&&0==e.orderInfo.ReadyDeliver?t("span",[e._v("待发货（发货）")]):"UNDELIVERED"==e.orderInfo.Status&&1==e.orderInfo.IsHostingOrder&&0==e.orderInfo.ReadyDeliver?t("span",[e._v("待发货（托管）")]):"UNDELIVERED"==e.orderInfo.Status&&1==e.orderInfo.ReadyDeliver?t("span",[e._v("已安排发货")]):"DELIVERED"==e.orderInfo.Status&&0==e.orderInfo.IsHostingOrder?t("span",[e._v("已发货（发货）")]):"DELIVERED"==e.orderInfo.Status&&1==e.orderInfo.IsHostingOrder?t("span",[e._v("已发货（托管）")]):"COMPLETED"==e.orderInfo.Status?t("span",[e._v("已确认收货")]):"CANCELED"==e.orderInfo.Status?t("span",[e._v("已取消")]):"EXPIRED"==e.orderInfo.Status?t("span",[e._v("已过期")]):e._e()])])])]),e._v(" "),1==e.HostingOrderBool?t("div",[t("el-card",{staticClass:"box-card",attrs:{"body-style":{"background-color":"#ffffff"}}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("托管信息")])]),e._v(" "),t("table",{staticClass:"order_detail host_detail"},[t("tr",[t("td",[e._v("姓名")]),e._v(" "),t("td",[e._v(e._s(e.HostingOrder.Name))])]),e._v(" "),t("tr",[t("td",[e._v("手机")]),e._v(" "),t("td",[e._v(e._s(e.HostingOrder.MobilePhone))])]),e._v(" "),t("tr",[t("td",[e._v("币种")]),e._v(" "),t("td",[e._v(e._s(e.HostingOrder.Cryptocurrency))])]),e._v(" "),t("tr",[t("td",[e._v("钱包地址")]),e._v(" "),t("td",["ETH"==e.HostingOrder.Cryptocurrency?t("a",{staticStyle:{color:"#409EFF"},attrs:{href:"https://eth.pandaminer.com/miner/"+e.HostingOrder.Address,target:"_Blank"}},[e._v(e._s(e.HostingOrder.Address))]):"BTC"==e.HostingOrder.Cryptocurrency?t("a",{staticStyle:{color:"#409EFF"},attrs:{href:"https://btc.com/"+e.HostingOrder.Address,target:"_Blank"}},[e._v(e._s(e.HostingOrder.Address))]):"ETC"==e.HostingOrder.Cryptocurrency?t("div",["f2pool.com"==e.HostingOrder.MiningPool?t("a",{staticStyle:{color:"#409EFF"},attrs:{href:"https://www.f2pool.com/etc/"+e.HostingOrder.Address,target:"_Blank"}},[e._v(e._s(e.HostingOrder.Address))]):e._e(),e._v(" "),"waterhole.io"==e.HostingOrder.MiningPool?t("a",{staticStyle:{color:"#409EFF"},attrs:{href:"https://etc.waterhole.io/miner/"+e.HostingOrder.Address,target:"_Blank"}},[e._v(e._s(e.HostingOrder.Address))]):e._e()]):"ZEC"==e.HostingOrder.Cryptocurrency?t("div",["f2pool.com"==e.HostingOrder.MiningPool?t("a",{staticStyle:{color:"#409EFF"},attrs:{href:"https://www.f2pool.com/zec/"+e.HostingOrder.Address,target:"_Blank"}},[e._v(e._s(e.HostingOrder.Address))]):e._e(),e._v(" "),"waterhole.io"==e.HostingOrder.MiningPool?t("a",{staticStyle:{color:"#409EFF"},attrs:{href:"https://zec.waterhole.io/miner/"+e.HostingOrder.Address,target:"_Blank"}},[e._v(e._s(e.HostingOrder.Address))]):e._e()]):e._e()])]),e._v(" "),t("tr",[t("td",[e._v("矿池")]),e._v(" "),t("td",[e._v(e._s(e.HostingOrder.MiningPool))])]),e._v(" "),t("tr",[t("td",[e._v("上线时间")]),e._v(" "),t("td",[e._v(e._s(e.HostingOrder.StartTime))])])])]),e._v(" "),t("el-card",{staticClass:"box-card",attrs:{"body-style":{"background-color":"#ffffff"}}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("发货信息填写")])]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,"label-width":"100px"}},[t("div",{staticClass:"expressCompany"},[t("h4",[e._v("快递公司")]),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"expressCompany"}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.expressCompany,callback:function(r){e.$set(e.ruleForm,"expressCompany",r)},expression:"ruleForm.expressCompany"}})],1)],1),e._v(" "),t("div",{staticClass:"expressNumber"},[t("h4",[e._v("快递订单号")]),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"expressNumber"}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.expressNumber,callback:function(r){e.$set(e.ruleForm,"expressNumber",r)},expression:"ruleForm.expressNumber"}})],1)],1),e._v(" "),t("div",{staticClass:"expressLink"},[t("h4",[e._v("快递查询链接")]),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"expressLink"}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.expressLink,callback:function(r){e.$set(e.ruleForm,"expressLink",r)},expression:"ruleForm.expressLink"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.sending("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1):0==e.HostingOrderBool?t("div",[t("el-card",{staticClass:"box-card",attrs:{"body-style":{"background-color":"#ffffff"}}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("用户地址信息")])]),e._v(" "),t("table",{staticClass:"order_detail reserve_detail"},[t("tr",[t("td",[e._v("收货人")]),e._v(" "),t("td",[e._v(e._s(e.addressDetail.Receiver))])]),e._v(" "),t("tr",[t("td",[e._v("手机")]),e._v(" "),t("td",[e._v(e._s(e.addressDetail.MobilePhone))])]),e._v(" "),t("tr",[t("td",[e._v("电话")]),e._v(" "),t("td",[e._v(e._s(e.addressDetail.PhoneNumber))])]),e._v(" "),t("tr",[t("td",[e._v("地址")]),e._v(" "),t("td",[e._v(e._s(e.addressDetail.Address))])]),e._v(" "),t("tr",[t("td",[e._v("邮编")]),e._v(" "),t("td",[e._v(e._s(e.addressDetail.ZipCode))])])])]),e._v(" "),t("el-card",{staticClass:"box-card",attrs:{"body-style":{"background-color":"#ffffff"}}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("发货信息填写")])]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("div",{staticClass:"expressCompany"},[t("h4",[e._v("快递公司")]),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"expressCompany"}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.expressCompany,callback:function(r){e.$set(e.ruleForm,"expressCompany",r)},expression:"ruleForm.expressCompany"}})],1)],1),e._v(" "),t("div",{staticClass:"expressNumber"},[t("h4",[e._v("快递订单号")]),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"expressNumber"}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.expressNumber,callback:function(r){e.$set(e.ruleForm,"expressNumber",r)},expression:"ruleForm.expressNumber"}})],1)],1),e._v(" "),t("div",{staticClass:"expressLink"},[t("h4",[e._v("快递查询链接")]),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"expressLink"}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.ruleForm.expressLink,callback:function(r){e.$set(e.ruleForm,"expressLink",r)},expression:"ruleForm.expressLink"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.sending("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1):e._e()],1)},staticRenderFns:[]};r.a=s},"5tyO":function(e,r){},"K/lo":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("y6QL"),o=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(r,e,function(){return s[e]})}(a);var d=t("3wnd");var n=function(e){t("5tyO")},l=t("VU/8")(o.a,d.a,!1,n,"data-v-1033bd50",null);r.default=l.exports},y6QL:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"",data:function(){return{orderInfo:"",addressDetail:"",HostingOrderBool:"",HostingOrder:"",ruleForm:{expressCompany:"",expressNumber:"",expressLink:""},rules:{expressCompany:[{required:!0,message:"请输入快递公司",trigger:"change"}],expressNumber:[{required:!0,message:"请输入快递订单号",trigger:"change"}],expressLink:[{required:!0,message:"请输入快速查询链接",trigger:"change"}]}}},methods:{getOderDetail:function(){var e=this;this.$api("/admin/order/get_order_detail",{orderId:this.OrderId}).then(function(r){console.log(r);var t=r.data;e.orderInfo=t.orderInfo,t.addressDetail?e.addressDetail=t.addressDetail:e.addressDetail="",e.HostingOrderBool=t.HostingOrderBool,e.HostingOrder=t.HostingOrder})},sending:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$api("/admin/order/order_sending",{orderId:r.OrderId,express:r.ruleForm.expressCompany,expressNumber:r.ruleForm.expressNumber,expressLink:r.ruleForm.expressLink,notice:"提交成功"}).then(function(e){r.isOffine?r.$router.push({path:"/offlinemanager/offline_user"}):r.$router.push({path:"/ordermanage/order_list"})})})}},created:function(){this.OrderId=this.$route.query.OrderId,this.isOffine=this.$route.query.isOffine,this.getOderDetail()}}}});
//# sourceMappingURL=24.34e95d55915e5b847268.js.map