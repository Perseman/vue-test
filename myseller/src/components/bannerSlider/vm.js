// 无缝轮播图插件------------
import vSlider from "assetsPlugin/vSlider/vSlider.js";
import "assetsPlugin/vSlider/vSlider.less";
// 无缝轮播图插件__end------------

export default {
  //通过props向子组件传递数据
  props: {
    bannerList: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data() {
    return {
      sliderId: "",
      sliderObj: {}
    };
  },
  mixins: {},
  components: {
    // userBtn
  },
  beforeDestroy() {},
  created() {
    this.sliderId = "vSliderId_" + new Date().getTime();
  },
  mounted() {},
  methods: {
    fire() {
      this.$nextTick(() => {
        if (this.bannerList.length == 0) {
          return;
        }
        this.sliderObj = new vSlider({
          id: this.sliderId
        });
      });
    }
  }
};
