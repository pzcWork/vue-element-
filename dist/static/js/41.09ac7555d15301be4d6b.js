webpackJsonp([41],{"6o6z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("z5Os");e.default={name:"",data:function(){return{tableData:[],status:-1,couponType:l.couponType,pageNo:1,totalNo:0,input:""}},methods:{getList:function(){var t=this,e={status:this.status,pageNo:this.pageNo-1,pageSize:10};this.$api("/admin/coupon/activity_list",e).then(function(e){t.tableData=e.data.list,t.totalNo=e.data.page.totalNum})},search:function(){this.pageNo=1,this.getList()},Detail:function(t){this.$router.push("/productmanage/product_detail/"+t)}},created:function(){this.getList()}}},fNWv:function(t,e){},keaY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("6o6z"),o=a.n(l);for(var n in l)"default"!==n&&function(t){a.d(e,t,function(){return l[t]})}(n);var r=a("tKy0");var s=function(t){a("fNWv")},i=a("VU/8")(o.a,r.a,!1,s,"data-v-0e6c2897",null);e.default=i.exports},tKy0:function(t,e,a){"use strict";var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all_com"},[a("div",{staticClass:"title_com"},[t._v("优惠活动管理")]),t._v(" "),a("el-card",{staticClass:"box-card",attrs:{"body-style":{"background-color":"#ffffff"}}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("优惠活动列表")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"ID",label:"Id",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Name",label:"优惠码名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"EnglishName",label:"优惠码英文名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Type",label:"优惠码类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t.couponType[e.row.Type])+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"StartTime",label:"开始日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t._f("date")(e.row.StartTime))+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"EndTime",label:"结束日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t._f("date")(e.row.EndTime))+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ConditionPrice",label:"达成条件价格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Discount",label:"折扣"}}),t._v(" "),a("el-table-column",{attrs:{prop:"UsdConditionPrice",label:"美元达成条件价格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"UsdDiscount",label:"USD折扣"}}),t._v(" "),a("el-table-column",{attrs:{prop:"BtcDiscount",label:"BTC折扣"}})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pageNo,background:"",layout:"prev, pager, next",total:t.totalNo},on:{"update:currentPage":function(e){t.pageNo=e},"current-change":t.getList}})],1)],1)},staticRenderFns:[]};e.a=l}});
//# sourceMappingURL=41.09ac7555d15301be4d6b.js.map