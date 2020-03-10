import axios from 'axios';
import Vue from 'vue';
import config from './config';
import API from './api';

const { timeout, baseUrl } = config;

let loading; // 接口loading
let requestAmount = 0; // 請求個數

axios.defaults.baseURL = baseUrl;
// axios 全局配置
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.timeout = timeout;
// 设置差异数据
const setDiffTime = (time) => {
  window.sessionStorage.setItem('vbhDiffTime', time);
};
const setIsReloaded = (flag) => {
  window.sessionStorage.setItem('vbhIsReloaded', flag);
};
// 获取差异数据
const getDiffTime = () => Number(window.sessionStorage.getItem('vbhDiffTime')) || 0;
const getIsReloaded = () => window.sessionStorage.getItem('vbhIsReloaded') || 0;

/**
 * 获取userInfo
 * @return {[string]} [description]
 */
export const getUserInfo = () => {
  // h5 获取token, 首选从sessionStorage中获取
  try {
    let userInfo = window.sessionStorage.getItem('vbhUserInfo') || '{}';
    return JSON.parse(userInfo);
  } catch (e) {
    console.warn(e);
  }
  return '';
};

/**
 * 格式化请求头部数据
 * @param  {[object]} params [请求的参数]
 * @return {[object]}        [description]
 */
const formatReqData = (params) => {
  // 签名与head的时间应该是一个
  //const  time = new Date().getTime().toString() - getDiffTime();
  const  time = new Date().getTime() - getDiffTime();
  const { token } = getUserInfo();
  return JSON.stringify({
    body: params,
    head: { timestamp: time, clientType: 2, token }, // clientType: 1用户,2客服
  });
};

/**
 * @param  {[type]} url      [description]
 * @param  {[type]} params   [description]
 * @param  {String} hostName [description]
 * @return {[type]}          [description]
 */
const httpPost = (url, params, isHideLoading = true, hostName = '') => {
  const [key1, key2] = url.split('/');
  let requestUrl = hostName ? `${hostName}/${API[key1][key2]}` : API[key1][key2];
  console.warn('${hostName}');
  console.warn(hostName);
  console.warn(requestUrl);
  console.warn(url, params);
  const requestData = formatReqData(params);
  if (isHideLoading) {
    requestAmount++;
    loading = Vue.prototype.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
  } 
  

  return axios({
    url: requestUrl,
    headers: {"Content-Type":"application/json"},
    method: 'POST',
    data: requestData,
  })  
};

/**
 * @param  {[type]} url      [description]
 * @param  {[type]} params   [description]
 * @param  {String} hostName [description]
 * @return {[type]}          [description]
 */
const httpGet = (url, params, isHideLoading = true, hostName = '') => {
  const [key1, key2] = url.split('/');
  let requestUrl = hostName ? `${hostName}/${API[key1][key2]}` : API[key1][key2];
  console.warn(requestUrl, params);
  if (isHideLoading) {
    requestAmount++;
    loading = Vue.prototype.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
  }

  return axios({
    url: requestUrl,
    method: 'GET',
    data: JSON.stringify(params),
  });
};

// 请求拦截器
axios.interceptors.request.use((requestConfig) => {
  requestConfig.headers['Content-Type'] = 'application/json';
  return requestConfig;
}, error => alert(error));

// 响应拦截器
axios.interceptors.response.use((response) => {
  if (requestAmount > 0) {
    requestAmount--;
  }
  if (requestAmount == 0 && loading) {
    loading.close();
  }

  if (!response || response.status !== 200) {
    return Vue.prototype.$vbhAlert('网络错误', true);
  }

  // 不返回code的情况
  if (!response.data.head || !response.data.head.code) {
    return response.data;
  }

  const code = `${response.data.head.code}`;

  // 正常结果
  if (code === '100000') {
    setIsReloaded(0); // 设置为未reload
    return response.data;
    // 服务器时间与本地时间不同步
  } if (code === '100019') {
    let { timestamp } = response.data;
    if (timestamp) {
      // ios new Date中指定的字符串还有格式"2018/04/27 11:11"
      let a = new Date(timestamp.replace(/-/g, '/')).getTime() // 服务器时间戳
      let b = new Date().getTime(); // 本地时间戳
      // 计算本地时间超前服务器时间多少,并存储在缓存中
      setDiffTime(b - a);
    }

    if (`${getIsReloaded()}` !== '1') {
      setIsReloaded(1); // 设置为已经reload
      window.location.reload();
    } else if (response.data.head.msg) { // 有錯誤提示則彈窗
      Vue.prototype.$vbhAlert(response.data.head.msg, true);
    }
    // 登录失效
  } else if (code === '100009') {
    let userInfo = getUserInfo();
    Vue.prototype.$vbhAlert('您的登录状态已经失效，请重新登录', true);
    // 直接跳转到首頁
    window.location.hash = `/home?workNo=${userInfo.workNo}&channel=${userInfo.channel}&time=${userInfo.time}&sign=${userInfo.sign}`;
    return response.data;
  } else {
    // 需要提示后台抛出的错误异常
    if (response.data.head.msg) { // 有錯誤提示則彈窗
      Vue.prototype.$vbhAlert(response.data.head.msg, true);
    }
    return response.data;
  }
}, (error) => {
  const isTimeout = error.toString().indexOf('timeout') > -1;
  if (requestAmount > 0) {
    requestAmount--;
  }
  if (requestAmount == 0 && loading) {
    loading.close();
  }
  if (isTimeout) {
    Vue.prototype.$vbhAlert('请求超时', true);
    return 'timeout';
  }
  return Vue.prototype.$vbhAlert('服务繁忙，请稍后重试', true);
});

export {
  httpGet, httpPost,
};
