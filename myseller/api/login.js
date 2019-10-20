/**
 * 登录界面的接口文件
 */

//导入项目工具
import {
  tool
} from "commonJs/tool.js";
import {
  API_CONSTS
} from "api/config.js";

//登录页面的接口数据
require("mock/login.js");

/**
 * 接口：获取手机验证码
 *
 * @export
 * @param {any} options
 * @returns
 */
export function getPhoneVerifyCode(options) {
  let opts = Object.assign({}, {
      url: API_CONSTS.BASE_URL + "/sendVerificationCode",
      data: {
        //手机号码
        phoneNum: ""
      }
    },
    options
  );
  return tool.post(opts.url, opts.data);
}
