/**
 *
 * 根级别的：mutation
 * 特点：只能同步提交state
 * 行为：提交数据源（state）
 */

//导入方法类型
import * as types from "./mutation-types";

//测试在mutation中异步修改count数据(不建议异步操作)

const mutations = {
  [types.setUserInfo](state, params) {
    state.userInfo = params;
  },
  [types.setSellerInfo](state, params) {
    state.sellerInfo.seller = params;
  },
  [types.addShopCatfn](state, params) {
    state.tempShopData.push(params);
    //克隆购物车数据
    let list = Object.assign([], state.tempShopData, []);
    let newList = [];
    dd(list, newList);
    state.shopData = Object.assign([], [], newList);
  },
  [types.Dec_ShopCart](state, params) {
    //删除临时表数据
    for (let j = state.tempShopData.length - 1; j >= 0; j--) {
      const ele = state.tempShopData[j];
      if (ele.name == params.name) {
        state.tempShopData.splice(j, 1);
      }
    }
    //删除购物车表数据
    for (let i = 0; i < state.shopData.length; i++) {
      const ele = state.shopData[i];
      if (ele.name == params.name) {
        if (ele.count > 1) {
          state.shopData[i].count--;
        } else {
          state.shopData.splice(i, 1);
        }
      }
    }
  },
  [types.ClearShopData](state) {
    state.tempShopData = [],
      state.shopData = []
  },
  [types.addShopData](state, params) {
    for (let j = state.tempShopData.length - 1; j >= 0; j--) {
      const ele = state.tempShopData[j];
      if (ele.name == params.name) {
        state.tempShopData.splice(j, 0, params.name);
      }
    }
    console.log(state.tempShopData);

    for (let i = 0; i < state.shopData.length; i++) {
      const ele = state.shopData[i];
      if (ele.name == params.name) {
        if (ele.count > 1) {
          state.shopData[i].count++;
        } else {
          state.shopData.splice(i, 0, params.name);
        }
      }
    }
  }


};

/**
 *递归迭代数据
 *
 * @param {*} list
 * @param {*} newList
 */
function dd(list, newList) {
  let first = list.shift();

  if (newList.length > 0) {
    let flag = false;
    newList.forEach(ele => {
      if (ele.name == first.name) {
        ele.count++;
        flag = true;
      }
    });

    if (!flag) {
      newList.push(first);
      newList[newList.length - 1].count = 1;
    }
  } else {
    newList.push(first);
    newList[newList.length - 1].count = 1;
  }

  if (list.length > 0) {
    dd(list, newList);
  }
}

export default mutations;
