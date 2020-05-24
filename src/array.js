module.exports = {
  array() {
    Array.prototype.map = Array.prototype.map || function (cb) {
      var arr = [];
      for (var i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i))
      }
      return arr;
    }
    Array.prototype.reduce = Array.prototype.reduce || function (cb, initial) {
      if (this.length == 0) return;
      var i;
      if (initial === undefined) {
        var result = this[0];
        i = 1;
      } else {
        var result = initial;
        i = 0;
      }
      for (; i < this.length; i++) {
        result = cb(result, this[i], i)
      }
    }
    Array.prototype.filter = Array.prototype.filter || function (cb, initial) {
      var result = [];
      for (var i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
          result.push(this[i])
        }
      }
      return result;
    }
    Array.from = Array.from || function (obj) {
      if (typeof obj.length != 'number') {
        var result = [];
        for (var i = 0; i < obj.length; i++) {
          result.push(obj[i]);
        }
        return result;
      } else {
        return []
      }
    }
  },
  obj: {
    //去重
    uniQue: (arr) => {b
      var newArr = []
      for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    getLabel: (arr, id) => {
      return arr.filter(item => item.id === id)[0]
    },
    // unique=(arr) => {
    //   return arr.filter(function (item, index, arr) {
    //     //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    //     return arr.indexOf(item, 0) === index;
    //   });
    // },

    // // [...new Set(arr)]
    // unique=(arr) => {
    //   for (var i = 0; i < arr.length; i++) {
    //     for (var j = i + 1; j < arr.length; j++) {
    //       if (arr[i] === arr[j]) {
    //         arr.splice(j, 1)
    //         j--;
    //       }
    //     }
    //   }
    //   return arr;
    // },

    //单数据类型的数组去重
    uniqueOnes: (arr) => {
      const object = {};
      arr.map(item => {
        object[item] = true
      })
      return Object.keys(object).map(s => parseInt(s, 10))
    },

    //排序
    quickSort: (arr) => {
      if (arr.length <= 1) return arr
      let index = Math.floor(arr.length / 2)
      let indexValue = arr.splice(index, 1)
      let left = []
      let right = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < indexValue) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      return quickSort(left).concat(indexValue, quickSort(right))
    },
    //es6排序
    sort: (arr) => {
      arr.sort((a, b) => {
        return a - b
      })
    }

    //冒泡排序
    // sort(arr)=> {
    //   for (var j = 0; j < arr.length - 1; j++) {
    //     for (var i = 0; i < arr.length - 1 - j; i++) {
    //       if (arr[i] > arr[i + 1]) {
    //         var temp = arr[i];
    //         arr[i] = arr[i + 1];
    //         arr[i + 1] = temp;
    //       }
    //     }
    //   }
    // }
  }
}