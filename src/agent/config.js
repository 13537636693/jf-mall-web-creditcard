let { href } = window.location;
let urlParamsStr = href.split('?')[1];
let urlParams = {};
if (urlParamsStr) {
  urlParamsStr.split('&').forEach((e) => {
    let split = e.split('=');
    urlParams[split[0]] = split[1];
  });
}
export default {
  timeout: 300000,
  baseUrl: process.env.NODE_ENV === 'production' ? '/jf-mall-service-auth' : 'http://127.0.0.1:9528/',
  errorMsg: {
    repeat: '操作過於頻繁，請稍後',
    link_failure: '連接服務器失敗，請檢查您的網絡狀態',
  },
  // 请求默认参数
  default: {
    //appId: urlParams.appId || '10000188',
    appId: urlParams["appId"] || '10000188',
  }
};
