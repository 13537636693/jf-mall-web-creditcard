import { httpPost, httpGet } from '@/agent/http';
import { debounce } from '@/utils/index';
import {
  getSessionCache, setSessionCache, removeSessionCache,
} from '@/utils/storage';

function install(Vue) {
  // 全局常量
  Vue.prototype.$appId = 10000188; // 平台id
  // 全局正则
  Vue.prototype.$reg = {
    phone: /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/, // 手机号码
    email: /^.+@[0-9a-zA-Z]+(\.[A-Za-z0-9]+){1,4}$/,
  };
  // localStorage缓存数据
  Vue.prototype.$getSessionCache = getSessionCache; // 获取sessionStorage存储数据
  Vue.prototype.$setSessionCache = setSessionCache; // 设置sessionStorage存储数据
  Vue.prototype.$removeSessionCache = removeSessionCache; // 清除sessionStorage存储数据

  // 数据请求
  Vue.prototype.$post = httpPost; // POST请求
  Vue.prototype.$get = httpGet; // GET请求
  /*
  ** 全局vbh-message方法
  ** @params: message 內容 duration 显示时间(默认2000)
  */
  Vue.prototype.$vbhMessage = (message, duration = 2000) => Vue.prototype.$message({
    customClass: 'vbh-message',
    center: true,
    duration,
    message,
  });
  /*
  ** 全局vbh-alert方法
  ** @params: message 消息正文内容, isCenter 是否居中(默認不居中), confirmCallback 確認回調函數, title 標題(默認'提示'), confirmButtonText 确定按钮的文本内容(默認'確認')
  */
  Vue.prototype.$vbhAlert = (message, isCenter = false, confirmCallback, title = '提示', confirmButtonText = '確認') => Vue.prototype.$alert(
    message,
    title,
    {
      dangerouslyUseHTMLString: true, // message 属性作为 HTML 片段处理
      showClose: false, // 关闭按钮
      center: isCenter, // 居中布局
      callback: confirmCallback, // 確認回調函數
      confirmButtonText, // 确定按钮的文本内容
      customClass: 'vbh-alert', // 自定义类名
    },
  );
  /*
  ** 全局vbh-confirm方法
  ** @params: message 消息正文内容, confirmCallback 確認回調函數,
      isCenter 是否居中(默認不居中), title 標題(默認'提示'), confirmButtonText 确定按钮的文本内容(默認'讀取'), cancelButtonText, // 取消按钮的文本内容
  */
  Vue.prototype.$vbhConfirm = (message, confirmCallback,
    isCenter = false, title = '提示', confirmButtonText = '讀取', cancelButtonText = '取消') => Vue.prototype.$confirm(
    message,
    title,
    {
      dangerouslyUseHTMLString: true, // message 属性作为 HTML 片段处理
      showClose: false, // 关闭按钮
      center: isCenter, // 居中布局
      confirmButtonText, // 确定按钮的文本内容
      cancelButtonText, // 取消按钮的文本内容
      customClass: 'vbh-confirm', // 自定义类名
    },
  ).then(() => {
    if (confirmCallback) confirmCallback();
  }).catch(() => {
    console.log('取消');
  });

  // 手机号码隐私化 -- 158****8888
  Vue.prototype.$mobilePrivacy = (mobile) => {
    if (!mobile) {
      return '';
    }
    mobile = mobile.toString();
    return mobile.replace(/(\d{3})\d+(\w{4})/, '$1****$2');
  };

  /** ************
   * 全局directive
   ************* */

  // 解决键盘挡住输入框指令
  Vue.directive('keyBoard', {
    inserted(el) {
      const oHeight = document.body.clientHeight;
      window.addEventListener('resize', () => {
        if (oHeight > document.body.clientHeight) { // 键盘弹出
          el.scrollIntoView(false);
        }
      }, false);
    },
  });

  // 防抖指令
  Vue.directive('debounce', {
    bind(el, { value }) {
      let fn = null;
      if (value instanceof Array) fn = value[0];
      else fn = value;
      const executeFunction = debounce(fn, 500);
      el.addEventListener('click', executeFunction);
    },
  });

  /** ************
   * 全局filter
   ************* */
  // 除以100保留两位小数
  Vue.filter('hk$FeeMoney', (value) => {
    if (!value) return '0';
    if (value <= 0) value = Math.abs(value);
    return `HK$${(value / 100).toFixed(2)}`;
  });
  // 除以100保留两位小数
  Vue.filter('rmbBaiFen', (value) => {
    if (!value) return '0.00';
    return `${(value / 100).toFixed(2)}`;
  });
  // 价格过滤器 人民币符号 格式 ￥20.00
  Vue.filter('rmbSymbol', (value) => {
    if (!value) return '￥0.00';
    return `￥${(value / 100).toFixed(2)}`;
  });

  // 价格过滤器 人民币元 格式 20.00元
  Vue.filter('rmbYuan', (value) => {
    if (!value) return '0.00元';
    return `${(value / 100).toFixed(2)}元`;
  });

  // 价格过滤器  万分之一元
  Vue.filter('rmbWanFen', (value) => {
    if (!value) return '0.00';
    return `${(value / 10000).toFixed(2)}`;
  });

  // 价格过滤器  万分之一元 符号
  Vue.filter('rmbWanFenSymbol', (value) => {
    if (!value) return '￥0.00';
    return `￥${(value / 10000).toFixed(2)}`;
  });

  // 价格过滤器  万分之一元 人民币元
  Vue.filter('rmbWanFenYuan', (value) => {
    if (!value) return '0.00元';
    return `${(value / 10000).toFixed(2)}元`;
  });

  // 手机号码隐私处理 133****1111
  Vue.filter('hideMobileNumber', (value) => {
    if (!value) {
      return '';
    }
    value = value.toString();
    return value.replace(/(\d{3})\d+(\d{4})/, '$1****$2');
  });

  // 香港身份證号码隐私处理  C668668(E) --> C6***68(E)
  Vue.filter('hideHKCertificateCode', (value) => {
    if (!value) {
      return '';
    }
    value = value.toString();
    // \S 匹配一个非空白字符
    return value.replace(/(\S{2})\S+(\S{5})/, '$1***$2');
  });

  // 性別过滤器 1男，2女，3未知
  Vue.filter('HKGenderShow', (value) => {
    if (!value) return;
    if (value == '2') {
      return '先生';
    }
    if (value == '1') {
      return '女士';
    }
    return '未知';
  });

  // 付款方式 14：支付宝 160: 香港支付宝支付，161: 0元支付，162: 无需支付， 2982: 八达通，0：现金支付
  Vue.filter('showPayTypeName', (value) => {
    if (!value) return;
    if (value == '14') {
      return '支付寶';
    } if (value == '160') {
      return '香港支付寶支付';
    } if (value == '161') {
      return '0元支付';
    } if (value == '162') {
      return '無需支付';
    } if (value == '2982') {
      return '八達通';
    } if (value == '0') {
      return '現金支付';
    }
  });

  // 时间过滤器
  Vue.filter('filterTime', (value, formatDefault = 'YYYY/MM/DD hh:mm:ss') => {
    if (!value) return '';
    let date = new Date(value - 0);
    let format = formatDefault;
    if (/(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, `${date.getFullYear()}`).substr(4 - RegExp.$1.length);
    }
    let obj = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    };
    let objArr = Object.keys(obj);
    for (let key of objArr) {
      let str = `${obj[key]}`;
      if (new RegExp(`(${key})`).test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : (`00${str}`).substr(str.length));
      }
    }
    return format;
  });
}

export default install;
