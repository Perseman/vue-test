import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

import { tool } from "commonJs/tool.js";

import { userAddressObj } from "commonJs/cache.js";

export default {
  props: {},
  data() {
    return {
      isShowDetails: false,
      //优惠类型
      supportCssList: [
        "decrease",
        "discount",
        "special",
        "invoice",
        "guarantee"
      ]
    };
  },
  mixins: {},
  components: {},
  computed: {
    ...mapState(["sellerInfo"])
  },
  beforeDestroy() {},
  create() {},
  mounted() {},
  methods: {
    showDetailsFn() {
      this.isShowDetails = true;
    },
    hideDetails() {
      this.isShowDetails = false;
    }
  }
};
