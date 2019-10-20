import Vue from "vue";
import App from "./App";
import router from "./router";
//装载vuex
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.config.productionTip = false;

//导入全局样式
import "common/less/index.less";

//引入缓存模块
import {
  cacheUserInfo
} from "commonJs/cache.js";

// 吐司插件----------
import "assetsPlugin/jToast/jToast.js";
import "assetsPlugin/jToast/jToast.less";
// 吐司插件__end----------

// alloyToucy------------
import "assetsPlugin/AlloyTouch/alloy_touch.js";
import "assetsPlugin/AlloyTouch/transform.js";
// alloyToucy__end------------

//解决移动端1秒点击延迟问题的插件
import fastclick from "fastclick";
import {
  userInfo
} from "os";

let fns = {
  /**
   * 安装fastClick
   * 作用：解决移动端点击1秒延迟问题
   * @exports
   * @param {any} paramName
   * @returns
   */
  loadFastClick() {
    //安装fastclick
    fastclick.attach(document.body);
  },
  /**
   * 字体自适应解决方案
   * @exports
   * @param {any} paramName
   * @returns
   */
  loadFontSizeAuto() {
    let e = window.document,
      t = e.documentElement,
      o = "orientationchange" in window ? "orientationchange" : "resize",
      baseVal = 62.5, //基础值
      a = function () {
        var winWidth = t.clientWidth,
          resultFontSize = 62.5;

        if (winWidth <= 320) {
          resultFontSize = baseVal;
        } else if (winWidth <= 960) {
          resultFontSize = baseVal + ((winWidth - 320) / 1020) * 100;
        } else {
          resultFontSize = 126;
        }

        t.style.fontSize = resultFontSize + "%";
      };

    e.addEventListener &&
      (window.addEventListener(o, a, !1),
        e.addEventListener("DOMContentLoaded", a, !1));
  },
  routerFn() {
    //添加全局路由守卫
    router.beforeEach((to, from, next) => {
      let userinfo = cacheUserInfo.get(); //缓存中是否存在用户数据

      if (to.name != "login" && !userinfo) {
        router.push({
          path: "/",
          query: {}
        });
      }

      next();
    });
  },
  fire() {
    fns.loadFastClick();
    fns.loadFontSizeAuto();
    fns.routerFn();
  }
};

fns.fire();
//全局路由守卫


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
