import axios from 'axios'
import qs from 'qs'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  get (url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })

    // return axios({
    //   method: "get",
    //   url,
    //   params: data
    // })
  },
  post (url, data, header) {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    if (header) {
      headers = header
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(data),
        headers
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })

    // return axios({
    //   method:"post",
    //   url,
    //   data:qs.stringify(data),
    //   headers:{
    //     "Content-Type":"application/x-www-form-urlencoded"
    //   }
    // })
  },
  upLoad (url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data,
        headers: undefined
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })

    // return axios({
    //   method: "post",
    //   url,
    //   data,
    //   headers: undefined
    // })
  }
}
