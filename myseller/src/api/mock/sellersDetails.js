/**
 * 商家详情页面
 * 接口获取商家详情数据 和 获取商家评论数据
 * 接口：获取商品类型列表数据；
 * 接口：获取商品列表根据商品类型ID；
 */
var Mock = require("mockjs");

/**
 * 接口：获取商家详情数据 和 获取商家评论数据
 *
 */
Mock.mock("/getSellerInfoById", {
  seller: {
    id: "kfjdskfjldksjk",
    name: "粥品香坊（回龙观）",
    description: "蜂鸟专送",
    deliveryTime: 38,
    score: 4.2,
    serviceScore: 4.1,
    foodScore: 4.3,
    rankRate: 69.2,
    minPrice: 20,
    deliveryPrice: 4,
    ratingCount: 24,
    sellCount: 90,
    bulletin: "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
    supports: [{
        type: 0,
        description: "在线支付满28减5"
      },
      {
        type: 1,
        description: "VC无限橙果汁全场8折"
      },
      {
        type: 2,
        description: "单人精彩套餐"
      },
      {
        type: 3,
        description: "该商家支持发票,请下单写好发票抬头"
      },
      {
        type: 4,
        description: "已加入“外卖保”计划,食品安全保障"
      }
    ],
    avatar: "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    pics: [
      "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
    ],
    infos: [
      "该商家支持发票,请下单写好发票抬头",
      "品类:其他菜系,包子粥店",
      "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
      "营业时间:10:00-20:30"
    ]
  },
  ratings: {
    name: "粥品香坊（回龙观）",
    description: "蜂鸟专送",
    deliveryTime: 38,
    score: 4.2,
    serviceScore: 4.1,
    foodScore: 4.3,
    rankRate: 69.2,
    minPrice: 20,
    deliveryPrice: 4,
    ratingCount: 24,
    sellCount: 90,
    bulletin: "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
    supports: [{
        type: 0,
        description: "在线支付满28减5"
      },
      {
        type: 1,
        description: "VC无限橙果汁全场8折"
      },
      {
        type: 2,
        description: "单人精彩套餐"
      },
      {
        type: 3,
        description: "该商家支持发票,请下单写好发票抬头"
      },
      {
        type: 4,
        description: "已加入“外卖保”计划,食品安全保障"
      }
    ],
    avatar: "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    pics: [
      "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
    ],
    infos: [
      "该商家支持发票,请下单写好发票抬头",
      "品类:其他菜系,包子粥店",
      "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
      "营业时间:10:00-20:30"
    ]
  }
});

/**
 * 接口：获取商家商品类型列表；
 */
Mock.mock("/gettGoodsTypeById", {
  list: [{
      id: new Date().getTime(),
      name: "热销榜",
      type: -1
    },
    {
      id: new Date().getTime(),
      name: "单人精彩套餐",
      type: 2
    },
    {
      id: new Date().getTime(),
      name: "冰爽饮品限时特惠",
      type: 1
    },
    {
      id: new Date().getTime(),
      name: "精选热菜",
      type: -1
    },
    {
      id: new Date().getTime(),
      name: "爽口凉菜",
      type: -1
    },
    {
      id: new Date().getTime(),
      name: "精选套餐",
      type: -1
    },
    {
      id: new Date().getTime(),
      name: "果饼果汁",
      type: -1
    },
    {
      id: new Date().getTime(),
      name: "小吃主食",
      type: -1
    },
    {
      id: new Date().getTime(),
      name: "特色粥品",
      type: -1
    }
  ]
});

/**
 * 接口：获取商品列表根据商品类型ID；
 */
Mock.mock("/getGoodsListByTypeId", {
  title: "热销榜",
  foods: [{
      name: "皮蛋瘦肉粥",
      price: 10,
      oldPrice: "",
      description: "咸粥",
      sellCount: 229,
      rating: 100,
      info: "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "很喜欢的粥",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 1,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "扁豆焖面",
      price: 14,
      oldPrice: "",
      description: "",
      sellCount: 188,
      rating: 96,
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 1,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      info: "",
      icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "葱花饼",
      price: 10,
      oldPrice: "",
      description: "",
      sellCount: 124,
      rating: 85,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 1,
          text: "没啥味道",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 1,
          text: "很一般啊",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "牛肉馅饼",
      price: 14,
      oldPrice: "",
      description: "",
      sellCount: 114,
      rating: 91,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 1,
          text: "难吃不推荐",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "招牌猪肉白菜锅贴/10个",
      price: 17,
      oldPrice: "",
      description: "",
      sellCount: 101,
      rating: 78,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 1,
          text: "不脆,不好吃",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "南瓜粥",
      price: 9,
      oldPrice: "",
      description: "甜粥",
      sellCount: 91,
      rating: 100,
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "红豆薏米美肤粥",
      price: 12,
      oldPrice: "",
      description: "甜粥",
      sellCount: 86,
      rating: 100,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "八宝酱菜",
      price: 4,
      oldPrice: "",
      description: "",
      sellCount: 84,
      rating: 100,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "红枣山药糙米粥",
      price: 10,
      oldPrice: "",
      description: "",
      sellCount: 81,
      rating: 91,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "糊塌子",
      price: 10,
      oldPrice: "",
      description: "",
      sellCount: 80,
      rating: 93,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "3******b",
          rateTime: 1469261964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
    }
  ]
});

/**
 * 接口：获取商品列表根据商品类型ID2；
 */
Mock.mock("/getGoodsListByTypeId2", {
  title: "精选热菜",
  foods: [{
      name: "娃娃菜炖豆腐",
      price: 17,
      oldPrice: "",
      description: "",
      sellCount: 43,
      rating: 92,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "菜量还可以,味道还可以",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "手撕包菜",
      price: 16,
      oldPrice: "",
      description: "",
      sellCount: 29,
      rating: 100,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
    },
    {
      name: "香酥黄金鱼/3条",
      price: 11,
      oldPrice: "",
      description: "",
      sellCount: 15,
      rating: 100,
      info: "",
      ratings: [{
          username: "3******c",
          rateTime: 1469281964000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        },
        {
          username: "2******3",
          rateTime: 1469271264000,
          rateType: 0,
          text: "",
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        }
      ],
      icon: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
      image: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
    }
  ]
});

/**
 * 接口：添加购物车；
 */
Mock.mock("/addShopCat", {
  code: 0,
  msg: "添加成功"
});
