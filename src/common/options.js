export default {
  options: {
    getOpenUrl: function ({
      url,
      params
    }) {
      var arr = [];
      for (var key in params) {
        arr.push(key + "=" + params[key]);
      }
      return "/#/" + url + "?" + arr.join("&");
    },
    urls: {}
  },
  namespace: null
};
