/**
 * 项目的数据源
 */

const state = {
  //购物车数据
  shopData: [],
  //临时购物车数据
  tempShopData: [],
  /**
   * 登录后的用户信息
   */
  userInfo: {

  },
  //商家数据
  sellerInfo: {
    seller: {
      id: "",
      name: "",
      description: "",
      deliveryTime: 0,
      score: 0,
      serviceScore: 0,
      foodScore: 0,
      rankRate: 0,
      minPrice: 0,
      deliveryPrice: 0,
      ratingCount: 0,
      sellCount: 0,
      bulletin: "",
      supports: [],
      avatar: "",
      pics: [],
      infos: []
    },

  }
};

export default state;
