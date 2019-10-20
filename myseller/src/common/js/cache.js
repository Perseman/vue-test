let store = require("store");
const cacheKeys = {
  userinfo: "userinfo"
};
export const cacheUserInfo = (() => {
  return {
    set(value) {
      store.set(cacheKeys.userinfo, value)
    },
    get() {
      return store.get(cacheKeys.userinfo)
    }
  }
})();
