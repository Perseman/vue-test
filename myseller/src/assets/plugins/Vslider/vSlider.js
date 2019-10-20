import { tool as myTool } from "commonJs/tool.js";
// 移动端轮播图插件

//插件配置项
var __setings = {
  id: "",
  isAutoRun: true, //是否自动轮播，true开启，false关闭，默认true
  speedTime: 2000, //轮播速度，轮播频率，默认2000毫秒
  callback: function() {}
};

//插件的常量
var CONSTS = {
  DEFAULT_IMG_CLASSNAME: "sbc-defalut-img",
  SLIDER_LI_CLASSNAME: "sbcil-li",
  SLIDER_UL: "sbcil-ul",
  DESC_LI_CSS: "sbcdilul-li",
  DESC_LI_CSS_ACT: "sbcdilul-li-act"
};

//插件的构造函数
var SliderMobileJs = function(options) {
  this.opts = Object.assign({}, __setings, options);
  this.contianer = document.querySelector("#" + this.opts.id);

  //获取默认背景图片Dom对象
  this.defalutImgDom = this.contianer.getElementsByClassName(
    CONSTS.DEFAULT_IMG_CLASSNAME
  )[0];

  this.touchDom = this.contianer.getElementsByClassName("sbc-imglist")[0];
  //遮罩层
  this.layerDom = null;

  //轮播图的运动dom对象
  this.sliderMoveDom = this.contianer.querySelector("." + CONSTS.SLIDER_UL);
  //querySelectorAll vs getElementsByClassName的是有区别的
  this.sldierlis = this.contianer.getElementsByClassName(
    CONSTS.SLIDER_LI_CLASSNAME
  );
  //找到原点的dom对象数组
  this.descLists = this.contianer.getElementsByClassName(CONSTS.DESC_LI_CSS);

  //判断轮播图是否在运动，默认false,true运动
  this.isMoveing = false;
  //当前步数
  this.currStep = 0;
  //定时器
  this.timer = null;
  //是否执行了transitionEnd方法，0没有执行，1执行了
  this.isCuteTransitionEnd = 0;

  //启动幻灯片特效
  modfn.fire(this);
};

SliderMobileJs.prototype = {
  constructor: SliderMobileJs
};

var modfn = {
  //克隆第一个和最后一个li
  cloneFn: function(obj) {
    var firstCloneNode = obj.sldierlis[0].cloneNode(true);
    var lastCloneNode = obj.sldierlis[obj.sldierlis.length - 1].cloneNode(true);
    obj.sliderMoveDom.insertBefore(lastCloneNode, obj.sldierlis[0]);
    obj.sliderMoveDom.appendChild(firstCloneNode);
  },
  //初始样式
  initCss: function(obj) {
    //设置容器高度和默认图片的高度一样
    obj.contianer.style = obj.defalutImgDom.height + "px";

    obj.currStep = 0;
    var liWidth = obj.contianer.offsetWidth;
    var allWidth = obj.sldierlis.length * liWidth;
    obj.sliderMoveDom.style.width = allWidth + "px";
    for (var i = 0; i < obj.sldierlis.length; i++) {
      obj.sldierlis[i].style.width = liWidth + "px";
    }
    myTool.setTransform(obj.sliderMoveDom, -liWidth, 0);
    obj.currStep++;
  },
  addLayerDom: function(obj) {
    obj.layerDom = obj.contianer.getElementsByClassName("slider-layer")[0];
    // var layerDom = document.createElement("div");
    // layerDom.className = "slider-layer";
    // obj.contianer.appendChild(layerDom);
    // obj.layerDom = layerDom;
    // obj.layerDom.style.display = "none";
  },
  //绑定手势
  bindHandle: function(obj) {
    var startX,
      endX,
      cha = 0;
    var min = 100;

    obj.touchDom.addEventListener(
      "touchstart",
      function(e) {
        //清除定时器
        modfn.clearTime(obj);
        //清除动画
        modfn.clearTransition(obj);
        startX = e.touches[0].clientX;
        cha = 0;
      },
      false
    );

    obj.touchDom.addEventListener(
      "touchmove",
      function(e) {
        endX = e.touches[0].clientX;
        cha = endX - startX; //手势的差值
        myTool.setTransform(
          obj.sliderMoveDom,
          cha + -obj.currStep * obj.contianer.offsetWidth,
          0
        );
      },
      false
    );

    obj.touchDom.addEventListener(
      "touchend",
      function(e) {
        if (cha == 0) {
          return;
        }

        //思路：如何判断是切换到上一张，或者下一张；解决方案如下：
        if (cha > 0) {
          //切换到上一张
          if (cha > min) {
            obj.currStep--;
          }
        } else if (cha < 0) {
          //切换到下一张
          if (Math.abs(cha) > min) {
            obj.currStep++;
          }
        }

        cha = 0; //调优代码
        obj.layerDom.style.display = "block";

        //开启
        obj.isMoveing = true;
        modfn.setTransiton(obj);
        modfn.setTransform(obj, -obj.currStep * obj.contianer.offsetWidth);
      },
      false
    );
  },
  /**
   * 改变点的状态
   */
  changeDesBtnStatus: function(obj) {
    //清除点
    for (var i = 0; i < obj.descLists.length; i++) {
      myTool.removeClass(obj.descLists[i], CONSTS.DESC_LI_CSS_ACT);
    }

    myTool.addClass(obj.descLists[obj.currStep - 1], CONSTS.DESC_LI_CSS_ACT);
  },
  //绑定transitionEnd事件
  bindTransiitonEndHandle: function(obj) {
    if (typeof document.body.style.webkitTransition == "string") {
      obj.sliderMoveDom.addEventListener("webkitTransitionEnd", end, false);
    } else {
      obj.sliderMoveDom.addEventListener("transitionEnd", end, false);
    }

    var endTimer = null;

    function end() {
      endTimer = setTimeout(function() {
        if (endTimer) {
          clearTimeout(endTimer);
        }

        if (obj.currStep == 0) {
          obj.currStep = obj.sldierlis.length - 2;
        } else if (obj.currStep == obj.sldierlis.length - 1) {
          obj.currStep = 1;
        }

        modfn.clearTransition(obj);
        modfn.setTransform(obj, -obj.currStep * obj.contianer.offsetWidth);

        setTimeout(function() {
          modfn.changeDesBtnStatus(obj);
          obj.layerDom.style.display = "none";
          modfn.timerFn(obj);
        }, 30);
      }, 5);
    }
  },
  /**
   * 定时器模块
   */
  timerFn: function(obj) {
    modfn.clearTime(obj);
    setTimeout(function() {
      modfn.setTransiton(obj);
    }, 100);

    obj.timer = setInterval(function() {
      if (obj.currStep >= obj.sldierlis.length - 1) {
        obj.currStep = 1;
      }
      obj.currStep++;
      modfn.setTransform(obj, -obj.currStep * obj.contianer.offsetWidth);
    }, 2000);
  },
  //关闭定时器
  clearTime: function(obj) {
    clearInterval(obj.timer); //关闭定时器
  },
  setTransform: function(obj, offsetX) {
    myTool.setTransform(obj.sliderMoveDom, offsetX, 0);
  },
  //开启css3动画
  setTransiton: function(obj) {
    myTool.setTransition(obj.sliderMoveDom, 1000);
  },
  //清除动画方法
  clearTransition: function(obj) {
    //清除运动对象，为啥我们清空运动对象呢，避免用户拖动幻灯片的，有400毫秒的延迟
    myTool.clearTransition(obj.sliderMoveDom);
  },
  /**
   * 窗口大小改变事件
   */
  winResize: function(obj) {
    var rtime = null;
    window.addEventListener("resize", function() {
      modfn.clearTime(obj);
      modfn.clearTransition(obj);
      rtime = setTimeout(function() {
        if (rtime) {
          clearTimeout(rtime);
        }
        modfn.initCss(obj);
        modfn.timerFn(obj);
      }, 100);
    });
  },
  fire: function(obj) {
    this.cloneFn(obj);
    this.initCss(obj);
    this.addLayerDom(obj);
    this.bindHandle(obj);
    this.bindTransiitonEndHandle(obj);
    this.timerFn(obj);
    this.winResize(obj);
  }
};

const createSilderMobile = function(options) {
  return new SliderMobileJs(options);
};

export default createSilderMobile;
