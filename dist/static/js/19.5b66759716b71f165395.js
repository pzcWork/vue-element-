webpackJsonp([19],{"0DKl":function(e,r){},awtj:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("vz5f"),s=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(r,e,function(){return a[e]})}(l);var o=t("l6K6");var i=function(e){t("0DKl")},n=t("VU/8")(s.a,o.a,!1,i,"data-v-293d571e",null);r.default=n.exports},l6K6:function(e,r,t){"use strict";var a={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-page"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rules2,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title"},[e._v("账号注册")]),e._v(" "),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"邮箱"},model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email",r)},expression:"ruleForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("hl-password",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"checkPass"}},[t("hl-password",{attrs:{type:"password","auto-complete":"off",placeholder:"确认密码"},model:{value:e.checkPass,callback:function(r){e.checkPass=r},expression:"checkPass"}})],1),e._v(" "),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(r){return r.preventDefault(),e.handleData(r)}}},[e._v("注册")])],1),e._v(" "),t("a",{staticClass:"register",on:{click:e.register}},[e._v("已有账号？去登陆")])],1)],1)},staticRenderFns:[]};r.a=a},vz5f:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a,s=t("woOf"),l=(a=s)&&a.__esModule?a:{default:a};r.default={data:function(){var e=this;return{logining:!1,ruleForm:{email:"",password:""},checkPass:"",rules2:{email:[{required:!0,message:"请输入账号",trigger:"blur"},{min:6,max:30,message:"输入长度在6-30位之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:30,message:"输入长度在6-30位之间",trigger:"blur"}],checkPass:[{required:!0,validator:function(r,t,a){""===e.checkPass?a(new Error("请再次输入密码")):e.checkPass!==e.ruleForm.password?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}]},checked:!0}},methods:{register:function(){this.$router.push("/login")},handleData:function(){var e=this;this.$refs.ruleForm.validate(function(r){if(r){var t={notice:"注册成功  请找管理员开通权限！"};(0,l.default)(t,e.ruleForm),e.$api("/admin/manager/register",t).then(function(r){0==r.code&&e.$router.push("/login")}),e.$refs.ruleForm.resetFields(),e.ruleForm={}}})}}}}});
//# sourceMappingURL=19.5b66759716b71f165395.js.map