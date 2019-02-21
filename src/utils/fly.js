var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

fly.config.timeout = 5000
// 请求拦截器
fly.interceptors.request.use(function (request) {
  request.headers = {
    'content-type': 'application/json',
    'token': wx.getStorageSync('token')
  }
})

// 响应拦截器

fly.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    if (err.status === 0) {
      return '网络连接异常'
    } else if (err.status === 1) {
      return '网络连接超时'
    } else if (err.status === 401) {
      return '用户未登录'
    } else {
      if (err.response.data.message) {
        return err.response.data.message
      } else {
        return '请求数据失败,请稍后再试'
      }
    }
    // Do something with response error
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    fly.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    fly.post(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function put (url, params = {}) {
  return new Promise((resolve, reject) => {
    fly.put(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function del (url, params = {}) {
  return new Promise((resolve, reject) => {
    fly.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// export default fly
