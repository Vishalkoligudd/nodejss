const {createReadStream}= require('fs')

const stream=createReadStream('./file.txt',{encoding:'utf8',highWaterMark:8646})
 stream.on('data',(result)=>{
    console.log(result)
})