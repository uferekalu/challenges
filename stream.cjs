const fs = require('fs')
let data = ''

const readStream = fs.createReadStream('file.txt')
readStream.setEncoding('utf-8')

readStream.on('data', function(chunk) {
    data += chunk
})
readStream.on('end', function() {
    console.log(data)
})
readStream.on('error', function(err) {
    console.log(err.stack)
})