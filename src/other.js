module.exports = {
  other() {
    // merge
    merge = (dest, src) => {
      for (let name in src) {
        if (typeof src[name] == 'object') {
          for (let name2 in src[name]) {
            //如果defalut没有
            if (!dest[name]) {
              dest[name] = {}
            }
          }
          merge(dest[name], src[name])
        } else {
          if (src[name] !== undefined) {
            dest[name] = src[name];
          }
        }
      }
    }

    clone = (obj) => {
      let obj2;
      if (typeof obj == 'object') {
        if (obj instanceof Array) {
          obj2 = []
          for (let i = 0; i < obj.length; i++) {
            obj2[i] = clone(obj[i])
          }
        } else {
          obj2 = {}
          for (let key in obj) {
            obj2[key] = clone(obj[key])
          }
        }
        return obj2;
      } else {
        return obj
      }
    }

    getElemen = (obj) => {
      assert(obj, 'app is required');
      if (typeof obj === 'string') {
        let el = document.querySelector(obj);
        assert(el, `${obj} not found`)
        return el
      } else if (obj instanceof HTMLElement) {
        return obj;
      } else {
        assert(false, 'root is invaild')
      }
    }

    //生成uid
    uuid = () => {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";
      var uuid = s.join("");
      return uuid;
    }
    copyTxet = (val) => {
      const temps = document.createElement('textarea')
      temps.value = val
      document.body.appendChild(temps)
      temps.select() // 选择对象      
      document.execCommand('Copy') // 执行浏览器复制命令      
      temps.style.display = 'none'
      document.body.removeChild(temps)
      // this.$message({
      //   type: 'success', message: '复制成功'
      // })
    }
  }
}