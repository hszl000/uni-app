import { uni } from "@dcloudio/uni-h5";

export default {
  config: {
    baseURL: '/api',
    getToken() {
      let token = uni.getStorageSync('token');
      // if (!token) {
      //     return uni.switchTab({
      //         url: '/pages/login/login'
      //     })
      // }
      return token
    },
    // 请求拦截器
    beforeRequest(options = {}) {
      return new Promise((resolve) => {
        options.url = this.baseURL + options.url;
        options.method = options.method || 'GET';
        options.header = {
          "Authorization": this.getToken()
        }
        resolve(options)
      })
    },
    // 响应拦截器
    handleResponse(res) {
      return new Promise((resolve) => {
        return resolve(res.data)
      })
    },
  },
  request(options = {}) {
    return this.config.beforeRequest(options).then(opt => {
      return uni.request(opt)
    }).then(res => this.config.handleResponse(res))
  }
}