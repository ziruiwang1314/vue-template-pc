import axios from 'axios'
import $http from '../untils/requst'
// import store from '../store'
// import router from '../router'

// 响应拦截器
axios.defaults.timeout = 30000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  getTest (val) {
    return $http.get('/api/test.json', {val})
  }
}
