webpackJsonp([4],{"9CYf":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("NTw5"),i=r.n(s);for(var o in s)"default"!==o&&function(e){r.d(t,e,function(){return s[e]})}(o);var n=r("v2HL");var a=function(e){r("u/9l")},d=r("VU/8")(i.a,n.a,!1,a,"data-v-7eb5300a",null);t.default=d.exports},NTw5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"orderComponent",data:function(){return{paymentType:"",order_id:"",orderList:[],currentPage:1,dialogVisible:!1,dialogVisible1:!1,dialogVisibleOffline:!1,OrderId:0,input2:"",input3:"",Id:0,adressInput1:"",adressInput2:"",adressInput3:"",adressInput4:"",adressInput5:"",adressInput6:"",adressInput7:"",adressInput8:"",adressInput9:"",adressInput10:"",adressInput11:"",ruleForm:{type:"UnionPay",bfyName:"",bfyBankName:"",bankCode:"",needPay:"",bankAddress:"",swiftCode:"",bfyAccountNumber:"",bfyAddress:"",btcAddress:"",status:""},rules:{status:[{required:!0,message:"请选择支付类型",trigger:"blur"}],type:[{required:!0,message:"请选择支付类型",trigger:"blur"}],bfyName:[{required:!0,message:"请输入汇款人姓名",trigger:"blur"}],bfyBankName:[{required:!0,message:"请输入汇款银行",trigger:"blur"}],bankCode:[{required:!0,message:"请输入汇款银行卡号",trigger:"blur"},{min:10,max:30,message:"长度在 10 到 30 个字符",trigger:"blur"}],needPay:[{required:!0,message:"请输入数量",trigger:"blur"},{type:"number",message:"单价必须为数字"}],bankAddress:[{required:!0,message:"请输入银行地址",trigger:"blur"}],swiftCode:[{required:!0,message:"请输入银行代码",trigger:"blur"}],bfyAccountNumber:[{required:!0,message:"请输入汇款人账号",trigger:"blur"}],bfyAddress:[{required:!0,message:"请输入汇款人地址",trigger:"blur"}],btcAddress:[{required:!0,message:"请输入BTC汇款地址",trigger:"blur"},{min:10,message:"长度不低于10个字符",trigger:"blur"},{pattern:/^[A-Za-z0-9]+$/,message:"不允许输入空格汉字"}]}}},props:["totalNo","isOffine"],methods:{updateOfflineOrderStatus:function(e){this.$api("/admin/offline/update_offline_order_status",{orderId:e,status:"UNDELIVERED",notice:"待发货处理成功"}).then(function(e){setTimeout("window.location.reload()",1500)})},confirmOffine:function(e,t,r){this.paymentType="","UnionPay"==t||"UnionPay"==r?(this.paymentType="UnionPay",this.ruleForm.type="UnionPay"):"USD"==t||"USD"==r?(this.paymentType="USD",this.ruleForm.type="USD"):"BTC"!=t&&"BTC"!=r||(this.paymentType="BTC",this.ruleForm.type="BTC"),this.dialogVisibleOffline=!0,this.order_id=e},addPayInfo:function(){""!=this.ruleForm.status&&(this.dialogVisibleOffline=!1,this.$api("/admin/offline/update_offline_order_status",{orderId:this.order_id,status:this.ruleForm.status,notice:"订单状态修改成功"}).then(function(e){setTimeout("window.location.reload()",1500)}))},getOrderChange:function(e){var t=e;this.msg.$emit("paging",t)},submitPrice:function(){var e=this;(this.input2||this.input3)&&this.$api("/admin/order/update_order_price",{orderId:this.Id,productOriginPrice:this.input2,productOriginUsdPrice:this.input3,notice:"修改价格成功"}).then(function(t){e.dialogVisible=!1,setTimeout("window.location.reload()",1500)})},submitAddress:function(){var e=this;console.log("submitAddress"),this.dialogVisible1=!1,this.$api("/admin/order/update_order_address",{orderId:this.adressInput1,receiver:this.adressInput3?this.adressInput3:this.adressInput2,addrPhone:this.adressInput7?this.adressInput7:this.adressInput6,addrMobilephone:this.adressInput5?this.adressInput5:this.adressInput4,address:this.adressInput9?this.adressInput9:this.adressInput8,zipCode:this.adressInput11?this.adressInput11:this.adressInput10}).then(function(t){e.$message({type:"success",message:"地址修改成功!"}),e.dialogVisible=!1})},updateOrderPrice:function(e){console.log(e),this.dialogVisible=!0,this.OrderId=e.orderInfo.OrderId,this.Id=e.orderInfo.Id,this.input2=e.orderInfo.ProductOriginPrice,this.input3=e.orderInfo.ProductOriginUsdPrice},confirmM:function(e,t){var r=this;this.$confirm("是否确认操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.updateOderInfo(e,t)}).catch(function(){r.$message({type:"info",message:"取消操作"})})},updateOderInfo:function(e,t){var r=this;this.$api("/admin/order/update_order_info",{orderId:e,operationType:t}).then(function(e){r.$message({type:"success",message:"操作成功!"}),window.location.reload()})},updateAddress:function(e){var t=this;this.dialogVisible1=!0,console.log(e),this.adressId=e,this.adressInput1=e,this.$api("/admin/order/get_order_detail",{orderId:e}).then(function(e){var r=e.data.addressDetail;t.adressInput2=r.Receiver,t.adressInput4=r.MobilePhone,t.adressInput6=r.PhoneNumber,t.adressInput8=r.Address,t.adressInput10=r.ZipCode})}},mounted:function(){var e=this;this.msg.$on("sendOrderList",function(t){e.orderList=t.orderList})}}},ecEY:function(e,t,r){"use strict";var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"all_com"},[this._m(0),this._v(" "),t("offlineUserInfo",{attrs:{accountId:this.accountId}}),this._v(" "),t("orderoffconpt",{attrs:{totalNo:this.totalNo,isOffine:this.isOffine}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title_com"},[t("span",[this._v("线下订单管理")])])}]};t.a=s},nBYq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(r("9CYf")),i=o(r("0+m4"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{pageNo:1,orderList:[],totalNo:0,isOffine:!0,filterMsg:{},searchMsg:{},account:""}},components:{orderoffconpt:s.default,offlineUserInfo:i.default},watch:{pageNo:{handler:function(e,t){this.getOfflineOder()},deep:!0}},methods:{getOfflineOder:function(){var e=this;this.$api("/admin/offline/get_offline_order_list",{account:this.account,pageNo:this.pageNo,pageSize:50}).then(function(t){var r=t.data;e.orderList=r.totalOrderList,e.totalNo=r.page.totalNum;var s={value1:e.value1,orderList:e.orderList};e.msg.$emit("sendOrderList",s)})}},created:function(){this.account=this.$route.query.account,this.accountId=this.$route.query.accountId,this.getOfflineOder()},mounted:function(){var e=this;this.msg.$on("paging",function(t){e.pageNo=t})}}},"nK/2":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("nBYq"),i=r.n(s);for(var o in s)"default"!==o&&function(e){r.d(t,e,function(){return s[e]})}(o);var n=r("ecEY");var a=function(e){r("sqCu")},d=r("VU/8")(i.a,n.a,!1,a,"data-v-8d1ab47c",null);t.default=d.exports},sqCu:function(e,t){},"u/9l":function(e,t){},v2HL:function(e,t,r){"use strict";var s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order_list"},[r("div",{staticClass:"order_show"},[e._l(e.orderList,function(t,s){return r("el-card",{key:s,staticClass:"box-card-order",attrs:{"body-style":{"background-color":"#ffffff"}}},[r("div",{staticClass:"clearfix order_show_head",attrs:{slot:"header"},slot:"header"},[r("span",{staticStyle:{margin:"0 0 0 15px"}},[e._v("订单号："+e._s(t.orderInfo.OrderId))]),e._v(" "),r("span",{staticStyle:{margin:"0 20px"}},[e._v("下单时间："+e._s(e._f("date")(t.orderInfo.CreateTime)))]),e._v(" "),r("span",[e._v("更新时间："+e._s(e._f("date")(t.orderInfo.UpdateTime)))]),e._v(" "),e.isOffine?r("span",{staticStyle:{margin:"0 0 0 15px"}},[e._v("（线下订单）")]):e._e(),e._v(" "),r("el-popover",{staticStyle:{float:"right",height:"19px"},attrs:{placement:"bottom",trigger:"click"}},["UNPAID"!=t.orderInfo.Status&&"WAIT_FOR_FINAL_PAY"!=t.orderInfo.Status||"UnionPay"!=t.orderInfo.Payment&&1!=t.orderInfo.IsOffline&&""!=t.orderInfo.Payment?e._e():r("div",{staticClass:"order_show_selectitem"},[e.isOffine?r("span",{staticStyle:{display:"inline-block",width:"100%",height:"100%"},on:{click:function(r){e.confirmOffine(t.orderInfo.Id,t.orderInfo.Payment,t.orderInfo.PresellPayment)}}},[e._v("确认收款")]):r("span",{staticStyle:{display:"inline-block",width:"100%",height:"100%"},on:{click:function(r){e.confirmM(t.orderInfo.Id,"confirmGatherMoney")}}},[e._v("确认收款")])]),e._v(" "),"PRESELL_PAID"==t.orderInfo.Status||"UNPAID"==t.orderInfo.Status||"PRESELL_PAID"==t.orderInfo.Status||"BEGIN_FINAL_PAY"==t.orderInfo.Status||"WAIT_FOR_FINAL_PAY"==t.orderInfo.Status?r("div",{staticClass:"order_show_selectitem",on:{click:function(r){e.updateOrderPrice(t)}}},[e._v("修改价格")]):e._e(),e._v(" "),"UNPAID"==t.orderInfo.Status?r("div",{staticClass:"order_show_selectitem",on:{click:function(r){e.confirmM(t.orderInfo.Id,"cancelOrder")}}},[e._v("取消订单")]):e._e(),e._v(" "),"UNPAID"==t.orderInfo.Status||"EXPIRED"==t.orderInfo.Status?r("div",{staticClass:"order_show_selectitem",on:{click:function(r){e.confirmM(t.orderInfo.Id,"overtime")}}},[e._v("延长时间")]):e._e(),e._v(" "),"UNDELIVERED"==t.orderInfo.Status?r("div",{staticClass:"order_show_selectitem"},[r("router-link",{staticStyle:{display:"inline-block",width:"100%",height:"100%"},attrs:{to:{path:"/ordermanage/order_sending",query:{OrderId:t.orderInfo.Id,isOffine:!0}}}},[e._v("\n                            发货\n                        ")])],1):e._e(),e._v(" "),"PAID"==t.orderInfo.Status?r("div",{staticClass:"order_show_selectitem",on:{click:function(r){e.updateOfflineOrderStatus(t.orderInfo.Id)}}},[e._v("\n                        待发货\n                    ")]):e._e(),e._v(" "),"DELIVERED"==t.orderInfo.Status&&0==t.orderInfo.IsHostingOrder?r("div",{staticClass:"order_show_selectitem",on:{click:function(r){e.confirmM(t.orderInfo.Id,"completed")}}},[e._v("确认收货\n                    ")]):e._e(),e._v(" "),r("div",{staticClass:"order_show_selectitem"},[r("router-link",{staticStyle:{display:"inline-block",width:"100%",height:"100%"},attrs:{to:{path:"/offlinemanager/offline_order_detail",query:{OrderId:t.orderInfo.Id}}}},[e._v("\n                            查看详情\n                        ")])],1),e._v(" "),"DELIVERED"==t.orderInfo.Status&&1==t.orderInfo.IsHostingOrder?r("div",{staticClass:"order_show_selectitem"},[r("router-link",{staticStyle:{display:"inline-block",width:"100%",height:"100%"},attrs:{to:{path:"/ordermanage/order_hosted",query:{OrderId:t.orderInfo.Id,isOffine:!0}}}},[e._v("\n                            完成部署\n                        ")])],1):e._e(),e._v(" "),r("el-button",{staticClass:"order_show_button",attrs:{slot:"reference"},slot:"reference"},[r("i",{staticClass:"el-icon-arrow-down"})])],1)],1),e._v(" "),r("table",{staticClass:"order_show_table"},[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("用户名")]),e._v(" "),r("th",[e._v("商品ID")]),e._v(" "),r("th",[e._v("商品名")]),e._v(" "),r("th",[e._v("类型")]),e._v(" "),r("th",[e._v("单价")]),e._v(" "),r("th",[e._v("数量")]),e._v(" "),r("th",[e._v("优惠金额")]),e._v(" "),r("th",[e._v("总价")]),e._v(" "),r("th",[e._v("支付方式")]),e._v(" "),r("th",[e._v("状态")]),e._v(" "),r("th",[e._v("已支付总额")])]),e._v(" "),r("tr",[r("td",[e._v(e._s(t.orderInfo.Id))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.Account))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.ProductId))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.ProductName))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.IsPresell?"预售":"全款"))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.ProductOriginPrice))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.Amount))]),e._v(" "),r("td",[e._v(e._s(t.orderInfo.Discount))]),e._v(" "),r("td",[e._v(e._s("UnionPay"==t.orderInfo.Payment?t.orderInfo.TotalShouldPayPrice:t.orderInfo.TotalShouldPayBtcPrice))]),e._v(" "),r("td",[t.orderInfo.IsPresell?r("div",["UnionPay"==t.orderInfo.PresellPayment?r("span",[e._v("人民币")]):"BTC"==t.orderInfo.PresellPayment?r("span",[e._v("BTC")]):r("span",[e._v(e._s(t.orderInfo.PresellPayment))])]):r("div",["UnionPay"==t.orderInfo.Payment?r("span",[e._v("人民币")]):"BTC"==t.orderInfo.Payment?r("span",[e._v("BTC")]):r("span",[e._v(e._s(t.orderInfo.Payment))])])]),e._v(" "),r("td",[r("span",[e._v(e._s(e._f("statusFilter")(t.orderInfo)))])]),e._v(" "),r("td",[t.orderInfo.IsPresell?r("span",["UnionPay"==t.orderInfo.PresellPayment?r("span",[e._v(e._s(t.totalPrice))]):"USD"==t.orderInfo.PresellPayment?r("span",[e._v(e._s(t.totalPrice))]):(t.orderInfo.PresellPayment,r("span",[e._v(e._s(t.totalPrice))]))]):r("span",["UnionPay"==t.orderInfo.Payment?r("span",[e._v(e._s(t.totalPrice))]):"USD"==t.orderInfo.Payment?r("span",[e._v(e._s(t.totalPrice))]):(t.orderInfo.Payment,r("span",[e._v(e._s(t.totalPrice))]))])])])])])}),e._v(" "),r("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":50,layout:"total, prev, pager, next, jumper",total:e.totalNo},on:{"current-change":e.getOrderChange}})],2),e._v(" "),r("el-dialog",{attrs:{title:"修改价格",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("h4",[e._v("ID")]),e._v(" "),r("el-input",{attrs:{placeholder:this.Id,disabled:!0}}),e._v(" "),r("h4",[e._v("订单ID")]),e._v(" "),r("el-input",{attrs:{disabled:!0,placeholder:this.OrderId}}),e._v(" "),r("h4",[e._v("人民币单价")]),e._v(" "),r("el-input",{attrs:{placeholder:"人民币单价",clearable:""},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}}),e._v(" "),r("h4",[e._v("美元单价")]),e._v(" "),r("el-input",{attrs:{placeholder:"美元单价",clearable:""},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}}),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitPrice}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{staticStyle:{"margin-top":"-9vh"},attrs:{title:"确认支付信息",visible:e.dialogVisibleOffline,width:"34%"},on:{"update:visible":function(t){e.dialogVisibleOffline=t}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},["UnionPay"==this.paymentType?r("el-form-item",{attrs:{label:"收款方式",prop:"type"}},[r("el-radio-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("el-radio",{attrs:{label:"UnionPay"}},[e._v("人民币")])],1)],1):"USD"==this.paymentType?r("el-form-item",{attrs:{label:"收款方式",prop:"type"}},[r("el-radio-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("el-radio",{attrs:{label:"USD"}},[e._v("美元")])],1)],1):"BTC"==this.paymentType?r("el-form-item",{attrs:{label:"收款方式",prop:"type"}},[r("el-radio-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("el-radio",{attrs:{label:"BTC"}},[e._v("BTC")])],1)],1):e._e(),e._v(" "),r("br"),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"订单状态",prop:"status"}},[r("el-select",{staticStyle:{width:"318px"},attrs:{placeholder:"请选择订单状态"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[r("el-option",{attrs:{label:"待支付尾款",value:"WAIT_FOR_FINAL_PAY"}}),e._v(" "),r("el-option",{attrs:{label:"已完成支付",value:"PAID"}})],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisibleOffline=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addPayInfo}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"修改地址",visible:e.dialogVisible1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[r("h4",[e._v("ID")]),e._v(" "),r("el-input",{attrs:{placeholder:this.adressInput1,disabled:!0}}),e._v(" "),r("h4",[e._v("原收货人名字")]),e._v(" "),r("el-input",{attrs:{placeholder:this.adressInput2,disabled:!0}}),e._v(" "),r("h4",[e._v("新收货人名字")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.adressInput3,callback:function(t){e.adressInput3=t},expression:"adressInput3"}}),e._v(" "),r("h4",[e._v("原收货手机号")]),e._v(" "),r("el-input",{attrs:{placeholder:this.adressInput4,disabled:!0}}),e._v(" "),r("h4",[e._v("新收货手机号")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.adressInput5,callback:function(t){e.adressInput5=t},expression:"adressInput5"}}),e._v(" "),r("h4",[e._v("原收货电话")]),e._v(" "),r("el-input",{attrs:{placeholder:this.adressInput6,disabled:!0}}),e._v(" "),r("h4",[e._v("新收货电话")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.adressInput7,callback:function(t){e.adressInput7=t},expression:"adressInput7"}}),e._v(" "),r("h4",[e._v("原地址")]),e._v(" "),r("el-input",{attrs:{placeholder:this.adressInput8,disabled:!0}}),e._v(" "),r("h4",[e._v("新地址")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.adressInput9,callback:function(t){e.adressInput9=t},expression:"adressInput9"}}),e._v(" "),r("h4",[e._v("原邮编号")]),e._v(" "),r("el-input",{attrs:{placeholder:this.adressInput10,disabled:!0}}),e._v(" "),r("h4",[e._v("新邮编号")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.adressInput11,callback:function(t){e.adressInput11=t},expression:"adressInput11"}}),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitAddress}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};t.a=s}});
//# sourceMappingURL=4.47c9d4d8d4307ff37073.js.map