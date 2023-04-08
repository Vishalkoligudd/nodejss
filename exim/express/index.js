const http=require('http')

http.createServer((req,res)=>{
    res.end('hi how r u')
}).listen(3000,()=>{console.log('suceed what is this');})

