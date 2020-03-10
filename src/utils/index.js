/**
 * 时间格式化函数
 * @param {string | number} time
 * @param {string} fmt
 */
export const FormatTime = (time, fmt = 'YYYY/MM/DD hh:mm:ss') => {
  if (!time) return '';
  let date = new Date(time - 0);
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`).substr(4 - RegExp.$1.length);
  }
  let o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (let key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = `${o[key]}`;
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : (`00${str}`).substr(str.length));
    }
  }
  return fmt;
};


export const dateFormat = {
  padLeftZero: function (str) {
      return ('00' + str).substr(str.length)
  },
  formatDate: function (date, fmt) {
      if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
      }
      for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
              let str = o[k] + ''
              fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : this.padLeftZero(str))
          }
      }
      return fmt
  }

}





export const Session = (item) => {
  this.get = () => (sessionStorage.getItem(item) ? JSON.parse(sessionStorage.getItem(item)) : '');
  this.set = (obj) => {
    sessionStorage.setItem(item, JSON.stringify(obj));
  };
  this.remove = () => {
    sessionStorage.removeItem(item);
  };
};

export const utf8ToBase64 = str => window.btoa(unescape(encodeURIComponent(str)));

export const base64ToUtf8 = str => decodeURIComponent(escape(window.atob(str)));

/**
 * 生成全局唯一guid
 * @return {[string]} [description]
 */

export const guid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (`${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
};

// url参数键名变小写，返回键值
export const getParams = (query) => {
  if (!query) {
    return {};
  }
  return query.slice(query.indexOf('?') + 1)
    .replace(/[#|?]/g, '&')
    .split('&')
    .reduce((params, param) => {
      let [key, value] = param.split('=');
      key = key.toLowerCase();
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, {});
};

export const urlParse = (name, target) => {
  target = target || 'href';
  const url = window.location[target];
  return getParams(url)[name];
};
export const isEmpty = (value = {}) => {
  for (let key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
};

// data是json对象，Name是根据什么字段去重
export const filterByKey = (data, key) => {
  let dest = [];
  for (let i = 0; i < data.length; i++) {
    let ai = data[i];
    if (i == 0) {
      dest.push(ai);
    } else {
      let filterData = dest.filter(e => e[key] == ai[key]);
      if (filterData.length == 0) {
        dest.push(ai);
      }
    }
  }
  return dest;
};

/**
 * 数组去重
 * @param  {[type]} array [description]
 * @param  {[type]} key   [description]
 */
export const uniqueArray = (array, key) => {
  if (!array || array.length < 1) {
    return [];
  }
  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    let item = array[i];
    let repeat = false;
    for (let j = 0; j < result.length; j++) {
      if (item[key] == result[j][key]) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      result.push(item);
    }
  }
  return result;
};

/**
 * 更新meta
 * @param  {[type]} name    [description]
 * @param  {[type]} content [description]
 */
export const updateMeta = (name, content) => {
  if (!name) return;

  let metaList = document.getElementsByTagName('meta');
  for (let i = 0; i < metaList.length; i++) {
    if (metaList[i].getAttribute('name') == name) {
      metaList[i].content = content || '';
      break;
    }
  }
};

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate = true) {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(this, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  };
}

/**
 * @desc  清空对象的值
 * @param obj 待清空的对象
 */
export function clearObject(obj) {
  // 此方法改变原对象
  Object.keys(obj).forEach((key) => {
    obj[key] = '';
  });
  // return
}
