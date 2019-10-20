/**
 * 根记别的action
 * 特点：可以异步提交state
 */

import * as types from "./mutation-types";
//引入缓存模块
import {
  cacheUserInfo
} from "commonJs/cache.js";
/**
 *
 * 设置请求成功后，异步修改count
 * ps：异步获取服务端的数据
 * @param {*} {
 *   commit,
 *   state
 * }
 */
export const setUserinfoAction = ({
  commit,
  state
}, userinfo) => {
  //缓存操作
  cacheUserInfo.set(userinfo);
  //vuex修改
  commit(types.setUserInfo, userinfo);
};
