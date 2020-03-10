// 获取sessionStorage存储数据
export const getSessionCache = (name) => {
  if (!name) return false;
  return JSON.parse(window.sessionStorage.getItem(name)) || {};
};
// 设置sessionStorage存储数据
export const setSessionCache = (name, content) => {
  if (!name) return false;
  let con = content;
  if (typeof con !== 'string') {
    con = JSON.stringify(con);
  }
  return window.sessionStorage.setItem(name, con);
};
// 删除sessionStorage存储数据
export const removeSessionCache = (name) => {
  if (!name) return false;
  return window.sessionStorage.removeItem(name);
};
// 获取localStorage存储数据
export const getLocalCache = (name) => {
  if (!name) return false;
  return JSON.parse(window.localStorage.getItem(name)) || {};
};
// 设置localStorage存储数据
export const setLocalCache = (name, content) => {
  if (!name) return false;
  let con = content;
  if (typeof con !== 'string') {
    con = JSON.stringify(con);
  }
  return window.localStorage.setItem(name, con);
};
// 删除localStorage存储数据
export const removeLocalCache = (name) => {
  if (!name) return false;
  return window.localStorage.removeItem(name);
};
