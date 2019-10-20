import {
  tool
} from "commonJs/tool.js"
import {
  API_CONSTS
} from "api/config.js"

require("mock/homeIndex.js");

/**
 * 获取当前地址接口
 *
 * @export
 * @returns
 */
export function getLocationInfo(options) {
  let opts = Object.assign({}, {
      //url: "/sendVerificationCode",
      url: API_CONSTS.BASE_URL + "/getLocationInfo",
      data: {}
    },
    options
  );
  return tool.get(opts.url, opts.data);
}

/**
 * 接口：获取轮播图列表
 *
 * @export
 * @returns
 */
export function getBannerimgs(options) {
  let opts = Object.assign({}, {
      //url: "/sendVerificationCode",
      url: API_CONSTS.BASE_URL + "/getBannerimgs",
      data: {}
    },
    options
  );
  return tool.get(opts.url, opts.data);
}

/**
 * 接口：获取到商家列表数据
 *
 * @export
 * @returns
 */
export function getSellers(options) {
  let opts = Object.assign({}, {
      //url: "/sendVerificationCode",
      url: API_CONSTS.BASE_URL + "/getSellers",
      data: {
        address: ""
      }
    },
    options
  );
  return tool.get(opts.url, opts.data);
}
