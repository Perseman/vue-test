import Vue from "vue"; //引入项目的实例
//引入Vuex
import Vuex from "vuex";
//引入数据源
import state from "./state";
//引入同步提交方法
import mutations from "./mutations";
//导入action模块
import * as actions from "./actions";
//导入getters模块
import * as getters from "./getters";
// import * as actions from "./actions";
// import * as getters from "./getters";
// import mutations from "./mutations";
//引入日志模块
import createLogger from "vuex/dist/logger";

Vue.use(Vuex); //启动Vuex
const debug = process.env.NODE_ENV !== "production"; //是否开启调试模式

//创建全局数据仓库实例
//将实例对外开放出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
