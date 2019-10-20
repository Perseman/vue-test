/**
 * 登录页面的接口数据：
 * 登录接口的数据
 * 发送手机验证码接口的数据
 */
var Mock = require("mockjs");

/**
 * 发送手机验证码接口
 */
Mock.mock("/sendVerificationCode", {
  //统一返回数据
  data: {},
  //0:正常返回值；非0都是算数据异常。例如1：类型错误，2：服务器延迟，3.....
  code: 0,
  //返回信息
  msg: "success"
});

/**
 * 用户登录接口
 * ps:登录成功后，会返回相关的用户信息
 */
Mock.mock("/login", {
  //统一返回数据
  data: {
    avatar: "http://www.gywfo.com/vueSell_v2/imgs/users/user_header.jpg",
    balance: 0,
    brand_member_new: 0,
    columns: [
      {
        badge_color: "ff3618",
        badge_name: "NEW",
        description: "免费领百元红包",
        device: 0,
        end_time: 0,
        image_hash: "b95dce0c02567eb9bc185485f93e1719png",
        is_show: 1,
        key: "credit",
        name: "饿了么联名卡",
        schema:
          "eleme://web?url=https%3a%2f%2fcobrand-card.faas.ele.me%2f%23%2f%3ffrom%3dpersonal",
        start_time: 0
      },
      {
        badge_color: "",
        badge_name: "",
        description: "0元好物在这里",
        device: 0,
        end_time: 0,
        image_hash: "6efcbf0a3d4148cc0f87965a59657dc2png",
        is_show: 1,
        key: "point",
        name: "金币商城",
        schema:
          "eleme://web?url=http%3A%2F%2Fm.maila88.com%2FmailaIndex%3FmailaAppKey%3DQZvmst1hqHnoubaiuho7wv",
        start_time: 0
      },
      {
        badge_color: "",
        badge_name: "HOT",
        description: "我的3小时我做主",
        device: 0,
        end_time: 0,
        image_hash: "3240fe851ed58185097baabd864d64a0png",
        is_show: 1,
        key: "ali_public_welfare",
        name: "3小时公益",
        schema:
          "eleme://web?url=https%3a%2f%2f3hours.taobao.com%2f%3ffrom%3delm",
        start_time: 0
      },
      {
        badge_color: "",
        badge_name: "NEW",
        description: "领10元红包",
        device: 0,
        end_time: 0,
        image_hash: "3029d58ba42ae46a6c4de5b0e7bc4ae6png",
        is_show: 1,
        key: "sign_in",
        name: "签到领红包",
        schema:
          "eleme://web?url=https%3A%2F%2Fair.tb.ele.me%2Fele-h5%2Fdaily-bonus%2Findex.html%3Fsource%3Dmain&navColor=%23FF7416",
        start_time: 0
      },
      {
        badge_color: "ff3618",
        badge_name: "NEW",
        description: "最高6个月免抽佣",
        device: 0,
        end_time: 0,
        image_hash: "e91aa67f0eb852154c3a9d51e4b49034png",
        is_show: 1,
        key: " agent",
        name: "城市代理申请",
        schema:
          "eleme://web?url=https%3a%2f%2fdaili-recruit.faas.ele.me%2frecruit%2fverify",
        start_time: 0
      },
      {
        badge_color: "ff3618",
        badge_name: "HOT",
        description: "低门槛极速放款",
        device: 2,
        end_time: 0,
        image_hash: "b07f40331cbc42ec7354d024fdfbe813png",
        is_show: 1,
        key: "loan",
        name: "我要借款",
        schema:
          "eleme://web?url=https%3A%2F%2Floan-supermarket.faas.ele.me%2F%23%2F",
        start_time: 0
      },
      {
        badge_color: "",
        badge_name: "",
        description: "每月最高500M",
        device: 0,
        end_time: 0,
        image_hash: "9477abe3aebfe97a8d88576dcf281aafpng",
        is_show: 1,
        key: "transfer",
        name: "免费流量",
        schema:
          "eleme://web?url=https%3a%2f%2fm.10010.com%2fscaffold-show%2falicardelm%3fchannel%3d146",
        start_time: 0
      },
      {
        badge_color: "",
        badge_name: "",
        description: "",
        device: 0,
        end_time: 0,
        image_hash: "3aaaed5a8f0a511f67da968ee3dad31epng",
        is_show: 1,
        key: "business_order",
        name: "企业订餐",
        schema: "eleme://web?url=https%3a%2f%2fentu.ele.me%2f%3ftype%3d4",
        start_time: 0
      },
      {
        badge_color: "",
        badge_name: "",
        description: "点餐也能做公益",
        device: 0,
        end_time: 0,
        image_hash: "e2bf71f5f32b680132832f4c9b395fd5png",
        is_show: 0,
        key: "charity",
        name: "饿公益",
        schema:
          "eleme://web?url=https%3A%2F%2Fapp-resource.ele.me%2Fprod%2FrJM5Zvtyf.html&navType=0",
        start_time: 0
      }
    ],
    delivery_card_expire_days: 0,
    email: "",
    gift_amount: 0,
    is_email_valid: false,
    is_mobile_valid: true,
    mobile: "13668899554",
    point: 84,
    real_point: 0,
    supervip_status: 3,
    user_id: 16331100,
    username: "3283c7eb7"
  },
  //0:正常返回值；非0都是算数据异常。例如1：类型错误，2：服务器延迟，3.....
  code: 0,
  //返回信息
  msg: "success"
});
