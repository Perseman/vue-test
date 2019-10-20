import Vue from "vue";
import Router from "vue-router";

//登录页面
import login from "pages/login/index";
//首页容器
import home from "pages/home/index";
//子页面：首页
import homeIndex from "pages/home/pages/homeIndex/index";
//子页面：发现
import discovery from "pages/home/pages/discovery/index";
//子页面：订单列表
import orderForm from "pages/home/pages/orderForm/index";
//子页面：用户中心
import userCenter from "pages/home/pages/userCenter/index";

//商家详情容器
import sellerDetails from "pages/sellerDetails/index";
//子页面：商品列表模块
import goods from "pages/sellerDetails/pages/goods";
//子页面：评论模块
import ratings from "pages/sellerDetails/pages/ratings";
//子页面：商家详情模块
import sellers from "pages/sellerDetails/pages/sellers";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/home",
      name: "home",
      component: home,
      children: [{
          path: "/home/homeIndex",
          name: "homeIndex",
          component: homeIndex
        },
        {
          path: "/home/discovery",
          name: "discovery",
          component: discovery
        },
        {
          path: "/home/orderForm",
          name: "orderForm",
          component: orderForm
        }, {
          path: "/home/userCenter",
          name: "userCenter",
          component: userCenter
        }
      ]
    },
    {
      path: "/sellerDetails",
      name: "sellerDetails",
      component: sellerDetails,
      children: [{
          path: "/sellerDetails/goods",
          name: "goods",
          component: goods
        },
        {
          path: "/sellerDetails/ratings",
          name: "ratings",
          component: ratings
        },
        {
          path: "/sellerDetails/sellers",
          name: "sellers",
          component: sellers
        }
      ]
    }
  ]
});
