// 防抖
function debounce(func, wait, immediate = true) {
  let timeout, _this, args;
  let later = () => setTimeout(() => {
    timeout = null
    if (!immediate) {
      func.apply(_this, args);
      _this = args = null;
    }
  }, wait);

  let debounced = function (...params) {
    if (!timeout) {
      timeout = later();
      if (immediate) {
        immediate = false
        func.apply(this, params);
      } else {
        _this = this;
        args = params;
      }
    } else {
      clearTimeout(timeout);
      timeout = later();
    }
  }
  return debounced;
};

// 节流
function throttle(func, wait, immediate = true) {
  let timeout, _this, args

  let later = () => setTimeout(() => {
    timeout = null
    if (!immediate) {
      func.apply(_this, args);
      _this = args = null;
    }
  }, wait);

  let throttled = function (...params) {
    if (!timeout) {
      timeout = later();
      if (immediate) {
        immediate = false
        func.apply(this, params);
      }
      _this = this;
      args = params;
    }
  }
  return throttled;
};