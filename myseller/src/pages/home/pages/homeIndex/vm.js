//引入tool.js模块
import {
  tool
} from "commonJs/tool.js";


//幻灯片组件
import bannerSlider from "compts/bannerSlider/index";
import {
  getBannerimgs,
  getSellers
} from "api/homeIndex.js";
//引入alloytouch组件
import scrollY from "compts/scrollY/scrollY";

//导入sellersDetails模块的接口功能
import {
  getSellerInfoById
} from "api/sellersDetails.js";
import * as types from "vuexStore/mutation-types";
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
export default {
  name: "homeIndex",
  data() {
    return {
      //每次加载8条
      pageSize: 8,
      //当前页数0
      currPage: 0,
      hasData: true,
      //是否正在从服务端加载数据，默认：false
      isloading: false,
      imgList: [],
      sellerList: []
    };
  },
  components: {
    bannerSlider,
    scrollY
  },
  created() {},
  computed: {
    // ...mapState(["userInfo"])
  },
  mounted() {

    Promise.all([this.getBanners(), this.getSellersFn()]).then(() => {
      this.$refs.scrolly1.fire();
    })
  },
  methods: {
    ...mapMutations([types.setSellerInfo]),
    /**
     * 点击，跳转到商家详情
     */
    goSellerDetails() {
      jToast.loading("数据请求中...");
      setTimeout(() => {
        getSellerInfoById().then(res => {
          jToast.close();

          //console.log(res.data.seller);
          this[types.setSellerInfo](res.data.seller);

          //任务：将商家详情数据存放到vuex里面
          //思考：为啥要存入到vuex中？

          this.$router.push({
            path: `/sellerDetails/goods`
          });
        });
      }, 1000);
    },
    getBanners() {
      return new Promise((resolve, reject) => {
        getBannerimgs().then(res => {
          this.imgList = res.data.data.banner;
          //由于dom数据渲染是有一定的延迟的
          //所以要等到页面渲染完毕再初始化幻灯片组件
          this.$nextTick(() => {
            this.$refs.bannerSlider1.fire();
          });
          resolve();
        })
      })

    },
    getSellersFn() {
      return new Promise((resolve, reject) => {
        getSellers({
          data: {
            address: "用户地址",
            pageSize: this.pageSize,
            currPage: this.currPage
          }
        }).then(res => {
          this.sellerList = res.data.data.items;
          resolve();
        });
      });
    },
    scrollchange(value) {
      if (this.isloading) {
        return;
      }
      let ctnHeight = this.$refs.homeindexctn.clientHeight;
      let targetHeight = this.$refs.homeInnerCtn.clientHeight;
      let cha = targetHeight - ctnHeight - 20;

      if (!(Math.abs(value) >= cha)) {
        return;
      }
      this.currPage++;
      this.isloading = true;
      console.log("加载更多");
      setTimeout(() => {
        console.log("加载完毕");
        this.isloading = false;
        getSellers({
          data: {
            address: "用户地址",
            pageSize: this.pageSize,
            currPage: this.currPage
          }
        }).then(res => {
          if (res.data.data.items == 0) {
            this.hasData = false;
            return;
          }
          this.sellerList.push(...res.data.data.items);
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.scrolly1.setMin();
            }, 200);
          });
        });
      }, 2000)

    }

  }
};
