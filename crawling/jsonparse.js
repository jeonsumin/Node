const fs = require('fs')

let obj = {'a': 1, 'b':2}
obj = JSON.stringify(obj)
fs.writeFileSync('./test.json', obj, 'utf-8')
