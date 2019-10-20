
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//引入tool.js模块
import { tool } from "commonJs/tool.js";
//引入缓存模块
import { cacheUserInfo } from "commonJs/cache.js";

import * as types from "vuexStore/mutation-types";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapMutations([types.setUserInfo])
  },
  mounted() {
    let userinfo = cacheUserInfo.get();
    //功能：如果cach中存在用户信息，就立刻跳转到首页
    if (userinfo) {
      //存入到vuex中
      this[types.setUserInfo](userinfo);
      this.$router.push({
        path: "/home/homeIndex",
        query: {}
      });
    }
  }
};
</script>

<style></style>
