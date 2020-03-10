(function flexible(win) {
  const doc = win.document;
  const docEl = doc.documentElement;
  let tid;
  let dpr = 0;
  let scale = 0;
  const metaEl = doc.querySelector('meta[name="viewport"]');
  if (metaEl) {
    const match = metaEl.getAttribute('content').match(/initial-scale=(\d\.+)/);
    if (match) {
      scale = parseFloat(match[1]);
      //dpr = parseInt(1/scale, 10);
      dpr = parseInt(1/scale+"", 10);
    }
  }
  const isIphone = win.navigator.appVersion.match(/iphone/gi);
  const { devicePixelRatio } = win;
  if (isIphone) {
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3;
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  }
  docEl.setAttribute('data-dpr', dpr+"");
  const refreshRem = function refreshRem() {
    let { width } = docEl.getBoundingClientRect();
    if (width > 1920) {
      width = 1920;
    } else if (width < 960) {
      width = 960;
    }
    const rem = width / 12.16;
    docEl.style.fontSize = `${rem}px`;
  };
  win.addEventListener('resize', () => {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = '.16rem';
  } else {
    doc.addEventListener('DOMContentLoaded', () => {
      doc.body.style.fontSize = '.16rem';
    }, false);
  }
  refreshRem();
}(window));
