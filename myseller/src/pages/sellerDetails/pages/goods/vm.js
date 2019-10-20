//导入alloytouch组件
import scrollY from "compts/scrollY/scrollY";

import {
  tool
} from "commonJs/tool.js";

import {
  Toast
} from "vant";
//导入购物车小球插件
import shopbar from 'assetsPlugin/shopbar/shopbar.js';
import "assetsPlugin/shopbar/shopbar.less";
//导入sellersDetails模块的接口功能
import {
  gettGoodsTypeById,
  getGoodsListByTypeId,
  getGoodsListByTypeId2,
  addShopCat
} from "api/sellersDetails.js";

import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
import * as types from "vuexStore/mutation-types";
export default {
  data() {
    return {
      selTypeId: "",
      goodsTypeList: [],
      goodsList: [],
      goodsTitle: "",
      goodsTypeCssList: [
        "decrease",
        "special",
        "discount",
        "guarantee",
        "invoice"
      ]
    };
  },
  created() {},
  mounted() {
    this.getGoodsTypeListfn();
  },
  computed: {
    ...mapState(["sellerInfo"])
  },
  methods: {
    ...mapMutations([types.addShopCatfn]),
    getGoodsTypeListfn() {
      gettGoodsTypeById({
        data: {
          sellerid: this.sellerInfo.seller.id
        }
      }).then(res => {
        this.goodsTypeList = res.data.list;
        this.selTypeId = this.goodsTypeList[0].id;

        this.$nextTick(() => {
          setTimeout(() => {
            if (!this.$refs.scrollY1) {
              return;
            }
            this.$refs.scrollY1.fire();
          }, 300);
        });
        this.getGoodsListByTypeId();
      });
    },
    getGoodsListByTypeId() {
      getGoodsListByTypeId({
        data: {
          typeId: this.selTypeId
        }
      }).then(res => {
        this.goodsList = res.data.foods;
        this.goodsTitle = res.data.title;
        this.$nextTick(() => {
          setTimeout(() => {
            if (!this.$refs.scrollY2) {
              return;
            }
            this.$refs.scrollY2.fire();
          }, 300);
        });
      });
    },

    selGoodsTypefn(id) {
      tool.removeAllClass(
        document.getElementsByClassName("menu-item"),
        "current"

      );
      tool.addClass(event.currentTarget, "current");
      Toast.loading({
        mask: true,
        message: "加载中...",
        duration: 0
      });
      this.selTypeId = id;
      setTimeout(() => {
        getGoodsListByTypeId2({
          data: {
            typeId: this.selTypeId
          }
        }).then(res => {
          this.goodsTitle = res.data.title;
          this.goodsList = res.data.foods;
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.scrollY2.setMin();
            }, 200);
          });
          Toast.clear();
        });

      }, 1000);
    },
    addGoodsToShopCat(goods) {

      Toast.loading({
        loadingType: "spinner",
        message: "请求数据...",
        duration: -1
      });
      let _event = event;
      setTimeout(() => {

        addShopCat({
          data: {
            name: goods.name
          }
        }).then((res) => {
          Toast.clear();
          if (res.data.code != 0) {
            Toast.fail("添加失败!");
          }

          shopbar.go({
            pageX: _event.pageX,
            pageY: _event.pageY,
            endX: -(_event.pageX - 20),
            endY: window.screen.height - _event.pageY - 30
          });
          this[types.addShopCatfn](goods);
          Toast.success("添加成功!");

        })
      }, 300);
    }
  },
  components: {
    scrollY
  }
};
