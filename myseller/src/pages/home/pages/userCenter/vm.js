//引入tool.js模块
import {
  tool
} from "commonJs/tool.js";
//引入缓存模块
import {
  cacheUserInfo
} from "commonJs/cache.js";
import {
  mapGetters,
  mapState,
  mapMutations
} from "vuex";

export default {
  name: "userCenter",
  data() {
    return {
      userInfo: {}
    };
  },
  components: {},
  created() {},
  mounted() {
    this.userInfo = cacheUserInfo.get();
  },
  computed: {
    // ...mapState(["userInfo"])
  }
};
