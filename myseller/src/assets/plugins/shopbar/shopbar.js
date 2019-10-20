import { hasClass, appendHtml, addClass, removeClass } from "commonJs/dom.js";

let __settings = {
  //目标对象
  pageX: 0,
  pageY: 0,
  endX: -350,
  endY: 380
};

class mod2 {
  constructor(options) {
    this.opts = Object.assign({}, __settings, options);
    this.init();
  }
  init() {
    let left = this.opts.pageX,
      top = this.opts.pageY;
    let timesId = "shopbarid_" + new Date().getTime();
    let dv = document.createElement("div");
    dv.id = timesId;
    dv.className = "shopbar";
    dv.style.left = `${left}px`;
    dv.style.top = `${top}px`;

    dv.innerHTML = ' <div class="inner"></div>';
    document.body.appendChild(dv);
    this.bar = dv;
    this.barInner = this.bar.getElementsByClassName("inner")[0];

    if (typeof document.body.style.webkitTransition == "string") {
      this.bar.addEventListener("webkitTransitionEnd", end, false);
    } else {
      this.bar.addEventListener("transitionEnd", end, false);
    }

    let _this = this;

    function end() {
      if (_this.bar == null) {
        return;
      }
      document.body.removeChild(_this.bar);
      _this.bar = null;
    }
  }
  go() {
    setTimeout(() => {
      let endLeft = this.opts.endX;
      let endTop = this.opts.endY;

      this.bar.style.webkitTransform = `translate3d(0,${endTop}px,0)`;
      this.bar.style.transform = `translate3d(0,${endTop}px,0)`;

      this.barInner.style.webkitTransform = `translate3d(${endLeft}px,0,0)`;
      this.barInner.style.transform = `translate3d(${endLeft}px,0,0)`;
    }, 100);
  }
  hide() {}
}

let shopbar = {
  go(options) {
    let obj = new mod2(options);
    obj.go();
  }
};

export default shopbar;
