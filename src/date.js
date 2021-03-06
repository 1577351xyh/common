module.exports = {
  date() {
    // 月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
    // 例子：   
    // (new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423   
    // (new Date()).Format("yyyy-M-d H:m:s.S")      ==> 2006-7-2 8:9:4.18   
    Date.prototype.Format = function (fmt) { //author: meizz   
      var o = {
        "M+": this.getMonth() + 1,                 //月份   
        "d+": this.getDate(),                    //日   
        "h+": this.getHours(),                   //小时   
        "m+": this.getMinutes(),                 //分   
        "s+": this.getSeconds(),                 //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()             //毫秒   
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
    // var time1 = new Date().format("yyyy-MM-dd HH:mm:ss");  
  },
  // 月的第一天
  firstDayMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  // 月的最后一天
  lastDayMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  range(begin, end) {
    let arr = []
    for (let i = begin; i < end; i++) {
      arr.push(i)
    }
    return arr
  },
  getYearMonthDate(date) {
    let year = date.getFullYear(date)
    let month = date.getMonth(date)
    let day = date.getDate(date)
    return [year, month, day]
  }
}