const arr = require('./src/array')
const date = require('./src/date')
const other = require('./src/other')

let arrs = [
  {
    id: 1, label: '呜呜呜呜1'
  },
  {
    id: 2, label: '呜呜呜呜2'
  },
  {
    id: 3, label: '呜呜呜呜3'
  }
]

function a(arr, id) {
  return arr.filter(item => item.id === id)[0]
}

console.log(a(arrs, 2))