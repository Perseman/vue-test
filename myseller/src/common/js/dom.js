/**
 * 模块：dom操作模块
 *
 */

/**
 * 判断标签是否包含className
 *
 * @export
 * @param {any} el
 * @param {any} className
 * @returns
 */
export function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
}

/**
 * appendHTML方法
 * 使用文档片段进行编码
 * @export
 * @param {any} container
 * @param {any} html
 */
export function appendHtml(container, html) {
  var divTemp = document.createElement("div"),
    nodes = null,
    // 文档片段，一次性append，提高性能
    fragment = document.createDocumentFragment();
  divTemp.innerHTML = html;
  nodes = divTemp.childNodes;
  for (var i = 0, length = nodes.length; i < length; i += 1) {
    fragment.appendChild(nodes[i].cloneNode(true));
  }
  container.appendChild(fragment);
  // 清楚内存中的变量，释放内存
  nodes = null;
  fragment = null;
}

/**
 * 删除标签上的指定的样式
 *
 * @export
 * @param {any} obj
 * @param {any} cls
 */
export function removeClass(obj, cls) {
  var obj_class = " " + obj.className + " ", //获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, " "), //将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    removed = obj_class.replace(" " + cls + " ", " "); //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, ""); //去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed; //替换原来的 class.
}

/**
 * 添加样式
 *
 * @export
 * @param {any} obj
 * @param {any} cls
 */
export function addClass(obj, cls) {
  if (hasClass(obj, cls)) {
    return;
  }
  var pattern = /^\s*(.+?)\s*$/;
  obj.className = obj.className.replace(pattern, "$1") + " " + cls;
}

//dom视图对象
export const domView = {
  height: document.documentElement.clientHeight || document.body.clientHeight, //高度
  width: document.documentElement.clientWidth || document.body.clientWidth //宽度
};

/**
 * 添加dom事件方法
 *
 * @export
 * @param {any} ele
 * @param {any} type
 * @param {any} handler
 * @returns
 */
export function addEvent(ele, type, handler) {
  // ele必须是DOM，type必须是字符串，fn必须是函数
  // 有一个不是，那就直接return
  if (
    !ele.nodeType ||
    !(typeof type === "string") ||
    !(typeof handler === "function")
  ) {
    return;
  }

  // 兼容绑定事件
  if (ele.addEventListener) {
    //测试浏览器，发现：firefox、chrome、IE、safari、opera都兼容，IE7、IE8不兼容，
    ele.addEventListener(type, handler, false);
  } else if (ele.attachEvent) {
    //测试浏览器，发现：firefox、chrome、IE9、IE10、IE11、safari、opera都不兼容,IE7、IE8兼容
    ele.attachEvent("on" + type, ele[type + handler]);
  } else {
    ele["on" + type] = handler;
  }
}
