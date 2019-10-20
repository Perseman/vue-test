import { hasClass, appendHtml, addClass, removeClass } from "commonJs/dom.js";

(function() {
  //基本配置信息
  var _opts = {
    text: "",
    iconCss: "",
    isMask: true,
    type: "", //success,wrong,cry,information,refresh,loading
    time: 2000
  };

  var toastList = [];

  var tip = ""; //用户提示，字符串类型
  var isMask = true; //是否需要遮罩层，布尔类型

  var toastModel = {
    container: ""
  };

  var methods = {
    show: function(opts) {
      var id = "js-toast" + new Date().getTime();
      var toastOpts = Object.assign(
        {},
        {
          id: id
        },
        opts
      );

      var html = getTmpl(toastOpts);
      appendHtml(document.body, html);

      var container = document.getElementById(id);
      toastModel.container = container;

      var mask = container.getElementsByClassName("js-toast-mask")[0];
      var icon = container.getElementsByClassName("js-toast-icon")[0];

      if (opts.isMask) {
        mask.style.display = "block";
      } else {
        mask.style.display = "none";
      }

      if (opts.type.length > 0) {
        icon.style.display = "block";
      } else {
        icon.style.display = "none";
      }

      var loadingBody = container.getElementsByClassName(
        "js-toast-inner-body"
      )[0];
      addClass(loadingBody, "js-toast-below");
      setTimeout(function() {
        addClass(loadingBody, "js-toast-show");
      }, 100);

      // toastList.push(toastOpts);
      if (!(opts.time == -1)) {
        close(container, opts);
      }
    }
  };

  function getTmpl(opts) {
    var iconType = ""; //icon-success,icon-cry,icon-information,icon-refresh,icon-wrong
    var minHeightcss = "";
    if (opts.type == "") {
      iconType = "";
      minHeightcss = "js-toast-minheight";
    } else {
      iconType = "myiconfont myicon-" + opts.type;
    }

    var html = `<div class="js-toast" id="${opts.id}">
                    <div class="js-toast-body">
                        <div class="js-toast-inner-body ${minHeightcss}">
                            <div class="js-toast-ib-ctn">
                                <div class="${iconType} ${
      opts.iconCss
    } js-toast-icon"></div>
                                <div class="js-toast-text">${opts.text}</div>
                            </div>
                            <div class="js-tast-inner-mask"></div>
                        </div>
                    </div>
                    <div class="js-toast-mask"></div>
                </div>`;
    return html;
  }

  function close(domContainer, opts) {
    var loadingBody = domContainer.getElementsByClassName(
      "js-toast-inner-body"
    )[0];
    setTimeout(function() {
      removeClass(loadingBody, "js-toast-show");
      setTimeout(function() {
        document.body.removeChild(domContainer);
      }, 100);
    }, opts.time);
  }

  window.jToast = {
    show: function(options) {
      var opts = Object.assign({}, _opts, options);
      methods.show(opts);
    },
    loading: function(titles) {
      var tips = titles ? titles : "数据加载中...";
      jToast.show({
        type: "loading",
        text: tips,
        time: -1
      });
    },
    close: function() {
      close(toastModel.container, {
        time: 0
      });
    }
  };
})();
