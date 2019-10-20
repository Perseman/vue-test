/**
 * 商家详情页面
 */
import {
  tool
} from "commonJs/tool.js";
import {
  API_CONSTS
} from "api/config.js";

//商家接口
require("mock/sellersDetails.js");

/**
 * 接口：获取商家详情数据 和 获取商家评论数据
 *
 * @export
 * @param {any} options
 * @returns
 */
export function getSellerInfoById(options) {
  let opts = Object.assign({}, {
      url: API_CONSTS.BASE_URL + "/getSellerInfoById",
      data: {
        sellerid: ""
      }
    },
    options
  );
  return tool.get(opts.url, opts.data);
}

/**
 * 接口：获取商家商品类型列表；
 *
 * @export
 * @param {any} options
 * @returns
 */
export function gettGoodsTypeById(options) {
  let opts = Object.assign({}, {
      url: API_CONSTS.BASE_URL + "/gettGoodsTypeById",
      data: {
        sellerid: ""
      }
    },
    options
  );
  return tool.get(opts.url, opts.data);
}

/**
 * 接口：获取商品列表根据商品类型ID；
 *
 * @export
 * @param {any} options
 * @returns
 */
export function getGoodsListByTypeId(options) {
  let opts = Object.assign({}, {
      url: API_CONSTS.BASE_URL + "/getGoodsListByTypeId",
      data: {
        typeId: ""
      }
    },
    options
  );
  return tool.get(opts.url, opts.data);
}

/**
 * 接口：获取商品列表根据商品类型ID2；
 *
 * @export
 * @param {any} options
 * @returns
 */
export function getGoodsListByTypeId2(options) {
  let opts = Object.assign({}, {
      url: API_CONSTS.BASE_URL + "/getGoodsListByTypeId2",
      data: {
        typeId: ""
      }
    },
    options
  );
  return tool.get(opts.url, opts.data);
}

/**
 * 接口：添加购物车；
 *
 * @export
 * @param {any} options
 * @returns
 */
export function addShopCat(options) {
  let opts = Object.assign({}, {
      url: API_CONSTS.BASE_URL + "/addShopCat",
      data: {
        name: ""
      }
    },
    options
  );
  return tool.get(opts.url, opts.data);
}
