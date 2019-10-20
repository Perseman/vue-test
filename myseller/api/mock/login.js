/**
 * 登录页面的接口数据：
 * 登录接口的数据
 * 发送手机验证码接口的数据
 */
var Mock = require("mockjs");

/**
 * 发送手机验证码接口
 */
Mock.mock("/sendVerificationCode", {
  //统一返回数据
  data: {},
  //0:正常返回值；非0都是算数据异常。例如1：类型错误，2：服务器延迟，3.....
  code: 0,
  //返回信息
  msg: "success"
});
