/**
 * 模块：全局工具模块
 */

import axios from "axios";
/**
 * 移动端animation动画插件
 */
import animations from "create-keyframe-animation";

//定义util常量
const CONSTS = {
  ERR_OK: 0
};

/**
 * 动画对象
 * 封装 animations
 */
export const animationObj = (function() {
  /**
   * 配置项：开始运动的前的配置项
   * 相关api：https://github.com/HenrikJoreteg/create-keyframe-animation
   * animation参数参考如下：
   * 0: {transform: `translate3d(${x}px,${y}px,0) scale(${scale})` },
     60: {transform: `translate3d(0,0,0) scale(1.1)` },
     100: {transform: `translate3d(0,0,0) scale(1)` }
   *
  */
  const enterSettings = {
    el: null, //dom对象
    done: null, //runAnimation的回调事件
    name: "", //运动名称
    animation: {}, //动画对象
    presets: {
      duration: 1000, // 持续时间
      easing: "linear", // 过度效果[ease,swing,easeInOutBounce],默认是ease
      delay: 500, // 延迟时间
      terations: 1, // 实现动画的次数
      delay: 0, // 延迟
      direction: "normal", // 方向
      resetWhenDone: false, // if true ：将最后动画状态应用为“变换”属性
      clearTransformsBeforeStart: false // 是否在动画开始之前清除现有的转换
    }
  };

  /**
   * 运动结束后的配置项
   */
  const afterEnterSettings = {
    el: null, //dom对象
    name: "" //动画名称
  };

  return {
    /**
     * 进入动画
     * 功能：注册动画，以及启动动画
     * @param {*} options
     */
    enter(options) {
      let opts = Object.assign({}, animationObj.enterSettings, options);

      // 功能：注册动画
      animations.registerAnimation({
        name: opts.name,
        // 插入自定义的动画
        animation: opts.animation, // 设置动画帧数
        // 参数配置
        presets: opts.presets
      });

      // 功能：启动动画
      animations.runAnimation(opts.el, opts.name, function() {
        if (typeof opts.done == "function") {
          opts.done();
        }
      });
    },
    /**
     * 结束动画
     * 作用：注销指定的动画，以及清空 animation属性
     * @param {*} options
     */
    afterEnter(options) {
      let opts = Object.assign({}, animationObj.afterEnterSettings, options);
      // 注销指定的动画
      animations.unregisterAnimation(opts.name);
      // 清空animation属性
      opts.el.style.animation = "";
    }
  };
})();

/**
 * 验证是不是数组
 *
 * @export
 * @param {any} arr : 数组
 * @returns boolean：true，false
 */
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}

/**
 * 验证是不是数字
 *
 * @export
 * @param {any} value
 * @returns
 */
export function checkNumber(value) {
  let re = /^[0-9]*$/;
  if (!re.test(value)) {
    return false;
  }
  return true;
}

/**
 * 验证手机号码
 *
 * @export
 * @param {any} value
 * @returns
 */
export function checkPhone(value) {
  let mobile = /^1(3|4|5|7|8)[0-9]\d{8}$/;
  if (
    !mobile.test(value) ||
    vtrim(value).length === 0 ||
    vtrim(value).length > 11
  ) {
    return false;
  }
  return true;
}

/**
 * 清楚先后空格
 *
 * @export
 * @param {any} value
 * @returns
 */
export function vtrim(value) {
  if (!value) {
    value = "";
  } else {
    value += "";
  }
  return value.replace(/(^\s*)|(\s*$)/g, "");
}

export const tool = {
  /**
   *
   * 异步访问后端
   * @param {any} options
   * @returns
   */
  ajax(options) {
    let opts = Object.assign(
      {},
      {
        //服务端接口地址
        url: "",
        //请求方式："get" | "post"
        method: "get",
        //参数
        data: {}
      },
      options
    );
    return new Promise((resolve, reject) => {
      axios({
        url: opts.url,
        method: opts.method,
        data: opts.data
      })
        .then(res => {
          resolve(res); //优化：这种返回不合理，直接返回 data
        })
        .catch(res => {
          console.log(res);
          console.log("服务异常，请联系管理员!");
          reject(res);
        });
    });
  },
  /**
   * 执行 get 请求
   *
   * @param {any} url
   * @param {any} data
   * @returns
   */
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, data)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log(error);
          console.log("服务异常，请联系管理员!");
          reject(error);
        });
    });
  },
  /**
   * 执行 POST 请求
   *
   * @param {any} url
   * @param {any} data
   * @returns
   */
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log(error);
          console.log("服务异常，请联系管理员!");
          reject(error);
        });
    });
  },
  /**
   * 表单验证插件
   *
   * @param {any} options
   * @returns
   */
  checkForm(options) {
    let opts = Object.assign(
      {},
      {
        ele: null,
        rules: []
      },
      options
    );
    let _this = this;
    let pFlag = true;
    let errorTip = "";
    for (let index = 0, len = opts.rules.length; index < len; index++) {
      let item = opts.rules[index];
      let pName = item.name;
      let pValue = item.value;
      let pMsg = vtrim(item.msg);
      for (const name in item) {
        let flag = true;
        let value = item[name];
        switch (name) {
          case "required":
            if (value && isArray(pValue) && pValue.length == 0) {
              flag = false;
              errorTip = `${pName} 不能为空！`;
            } else if (value && vtrim(pValue).length == 0) {
              flag = false;
              errorTip = `${pName} 不能为空！`;
            }
            break;
          case "phone":
            if (value && !checkPhone(vtrim(pValue))) {
              flag = false;
              errorTip = `${pName} 格式不正确！`;
            }
            break;
          case "isNumber":
            if (value && !checkNumber(vtrim(pValue))) {
              flag = false;
              errorTip = `${pName}：请输入数字！`;
            }
            break;
          case "more0":
            if (value && !(pValue >= 0)) {
              flag = false;
              errorTip = `${pName}：不能小于0！`;
            }
            break;
          case "customerValidate":
            if (typeof value == "function") {
              flag = value(pName, pValue);
              if (!flag) {
                errorTip = `${pName} 格式不正确！`;
              }
            }
            break;
        }
        if (!flag) {
          if (pMsg.length > 0) {
            errorTip = pMsg;
          }
          pFlag = false;
        }
      }
      if (!pFlag) {
        jToast.show({
          text: errorTip
        });
        break;
      }
    }
    return pFlag;
  },
  /**
   * 回调函数统一处理
   *
   * @param {any} othis vue对象
   * @param {any} result 访问数据库后统一处理集合
   * @param {any} successCallback
   * @param {any} errorCallback
   */
  doAjaxResult(othis, result, successCallback, errorCallback) {
    let data = result.data;
    if (data.code !== 0 && false) {
      //如果是这种状态：直接跳转到登录界面
      if (data.code == 99) {
        othis.$router.push("/login");
      } else {
        jToast.show({
          text: "错误",
          type: "wrong"
        });
        if (typeof errorCallback == "function") {
          errorCallback();
        }
      }
    } else {
      if (typeof successCallback == "function") {
        if (data.data) {
          successCallback(data.data);
        } else {
          successCallback(data);
        }
      }
    }
  },
  //transitions对照表
  transitions: {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  },
  /*
   *
   *@exports 清空transition
   *@param {any} paramName
   *@returns
   */
  clearTransition: function(dom) {
    dom.style.transition = null;
    dom.style.webkitTransition = null;
  },
  /*
   *
   *@exports 设置transition
   *@param {any} paramName
   *@returns
   */
  setTransition: function(dom, time) {
    dom.style.transition = `transform ${time}ms ease-out`;
    dom.style.webkitTransition = `-webkit-transform ${time}ms ease-out`;
  },
  /*
   *
   * @exports 清空 transform CSS
   * @param {any} paramName
   * @returns
   */
  clearTransform: function(dom) {
    dom.style.webkitTransform = null;
    dom.style.transform = null;
  },
  /*
   *
   * @exports 设置transform
   * @param {any} paramName
   * @returns
   */
  setTransform: function(dom, xVal, yVal) {
    if (!yVal) {
      yVal = 0;
    }
    dom.style.webkitTransform = `translate(${xVal}px,${yVal}px)`;
    dom.style.transform = `translate(${xVal}px,${yVal}px)`;
  },
  /**
   * 判断标签是否包含className
   *
   * @export
   * @param {any} el
   * @param {any} className
   * @returns
   */
  hasClass(el, className) {
    let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
    return reg.test(el.className);
  },
  /**
   *
   * 移除类名
   * @param obj:dom对象
   * @param sClass
   * @returns
   */
  removeClass(obj, cls) {
    if (!this.hasClass(obj, cls)) {
      return;
    }
    obj.className = obj.className.replace(
      new RegExp("(\\s|^)" + cls + "(\\s|$)"),
      ""
    );
  },
  /**
   * 清楚全部样式
   */
  removeAllClass(obj, cls) {
    for (let i = 0; i < obj.length; i++) {
      this.removeClass(obj[i], cls);
    }
  },
  /**
   * 添加样式
   *
   * @export
   * @param {any} obj
   * @param {any} cls
   */
  addClass(obj, cls) {
    if (this.hasClass(obj, cls)) {
      return;
    }
    var pattern = /^\s*(.+?)\s*$/;
    obj.className = obj.className.replace(pattern, "$1") + " " + cls;
  }
};
