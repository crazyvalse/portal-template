import axios from "axios";
import { Message, Header } from "element-ui";
import Options from "@common/options.js";
import { getToken } from "@/common/auth";
const _axios = axios.create({
  baseURL:
    typeof PROJECT_CONFIG !== "undefined" &&
    typeof PROJECT_CONFIG.BASE_URL !== "undefined"
      ? PROJECT_CONFIG.BASE_URL
      : "", // api的base_url
  timeout: 20000 // request timeout
});

if (process.env.NODE_ENV === "liferay") {
  _axios.interceptors.request.use(
    function(config) {
      var _config = Options.options.getAccessUrl({
        url: config.url,
        params: config.params || config.data,
        method: config.method
      });

      var _c = Object.assign({}, config, _config);
      _c.method = "post";

      return _c;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
} else {
  // request interceptor
  _axios.interceptors.request.use(
    config => {
      config.headers["authToken"] = getToken();
      return config;
    },
    error => {
      console.log(error);
      Promise.reject(error);
    }
  );
}

// respone interceptor
_axios.interceptors.response.use(
  response => response,
  error => {
    console.log("err" + error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default _axios;
