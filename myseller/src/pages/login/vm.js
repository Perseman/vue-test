//引入tool.js模块
import {
  tool
} from "commonJs/tool.js";
//导入login模块的接口功能
import {
  getPhoneVerifyCode,
  userLogin
} from "api/login.js";
//引入缓存模块
import {
  cacheUserInfo
} from "commonJs/cache.js";

import * as types from "vuexStore/mutation-types";
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from "vuex";
export default {
  data() {
    return {
      phoneNum: "13597714511",
      checkedNum: "2131",
      checkedTip: "获取验证码",
      isSendCode: false
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    ...mapMutations([]),
    ...mapActions(["setUserinfoAction"]),
    getValidateCode() {
      if (this.isSendCode) {
        return;
      }
      let flag = tool.checkForm({
        rules: [{
          name: "手机号码",
          value: this.phoneNum,
          phone: true
        }]
      });
      if (!flag) {
        return false;
      }
      jToast.loading("验证码正在发送...");
      setTimeout(() => {
        getPhoneVerifyCode({
          data: {
            phoneNum: this.phoneNum
          }
        }).then(res => {
          jToast.close();
          let code = res.data.code;
          if (code == 0) {
            jToast.show({
              text: "发送成功"
            });
            this.changeTips();
          }
        });
      }, 500);
    },
    changeTips() {
      let times = 3;
      this.checkedTip = `已发送(${times}s)`;
      this.isSendCode = true;
      let hello = setInterval(() => {
        times--;
        this.checkedTip = `已发送(${times}s)`;
        if (times == -1) {
          this.isSendCode = false;
          this.checkedTip = "发送验证码";
          clearInterval(hello);
        }
      }, 1000)
    },
    loginfn() {
      let flag = tool.checkForm({
        rules: [{
          name: "手机号码",
          value: this.phoneNum,
          phone: true
        }, {
          name: "验证码",
          value: this.checkedNum,
          required: true
        }]
      });
      if (!flag) {
        return false;
      }
      let params = {
        verificationCode: this.checkedNum,
        phoneNum: this.phoneNum
      };
      jToast.loading("数据请求中...");
      userLogin(params).then(res => {
        jToast.close();
        if (res.data.code > 0) {
          return;
        }
        jToast.show({
          text: "登录成功,正在跳转到首页...",
          time: -1
        });

        this["setUserinfoAction"](res.data.data);
        setTimeout(() => {
          jToast.close();
          this.$router.push({
            path: "/home/homeIndex",
            query: {
              plan: "dhjsia"
            }
          });
        }, 2000);
      });
    }
  },
  components: {}
};
