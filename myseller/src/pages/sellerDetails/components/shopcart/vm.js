//引入tool.js模块
import {
  tool
} from "commonJs/tool.js";
//引入alloytouch组件
import scrollY from "compts/scrollY/scrollY";
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
import {
  setTimeout
} from "timers";

import * as types from "vuexStore/mutation-types";
export default {
  props: {},
  data() {
    return {
      goodListShow: false
    };
  },
  mixins: {},
  computed: {

    ...mapState(["shopData", "tempShopData", "sellerInfo"]),
    //所需支付的金额
    needPay() {
      let pay = 0;
      this.tempShopData.forEach(ele => {
        pay += ele.price;
      });
      return pay;
    },
    //是否有商品在购物车
    hasShopGoods() {
      return this.tempShopData.length > 0;
    },
    //获取购物车数量
    getShopCatCount() {
      return this.tempShopData.length;
    },
    //起送费是否足够
    isEnough() {},
    //还差多少元起送
    needChaMoneyStr() {
      let minPrice = this.sellerInfo.seller.minPrice;
      if (this.needPay == 0) {
        return {
          flag: false,
          tip: `${minPrice}元起送`
        };
      }
      if (this.needPay < minPrice) {
        return {
          flag: false,
          tip: `还差${minPrice - this.needPay}元起送`
        };
      }
      if (this.needPay >= minPrice) {
        return {
          flag: true,
          tip: `去结算`
        };
      }
    }
  },
  components: {
    scrollY
  },
  beforeDestroy() {},
  create() {},
  mounted() {
    setTimeout(() => {
      if (!this.$refs.scrolly1) {
        return;
      }
      this.$refs.scrolly1.fire();
    }, 2000);

  },
  watch: {
    shopData() {
      console.log("数据变化拉");
      if (!this.$refs.scrolly1) {
        return;
      }
      setTimeout(() => {
        this.$refs.scrolly1.setMin();
      }, 1000);

    }

  },
  methods: {
    ...mapMutations([types.ClearShopData, types.Dec_ShopCart, types.addShopData]),
    //所需支付的金额
    needPaybar() {
      let pay = 0;
      this.tempShopData.forEach(ele => {
        pay += ele.price;
      });
      return pay;
    },
    clearfood() {
      this[types.ClearShopData]();
      setTimeout(() => {
        this.$forceUpdate();
        this.goodListShow = false;
      }, 300);
    },
    decfood(food) {
      this[types.Dec_ShopCart](food);
      this.needPaybar();
      this.$forceUpdate();
    },
    addfood(food) {
      let arr = [];
      arr.push(food);
      this[types.addShopData](arr);
      this.$forceUpdate();
    },
    //显示购物车列表
    showGoodList() {
      this.goodListShow = true;
    },
    //隐藏购物车列表
    hideGoodList() {
      this.goodListShow = false;
    },

  }
};
