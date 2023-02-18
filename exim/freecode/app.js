let http=require('http')
let server=http.createServer((req,res)=>{
    console.log(req);
    res.write('welcome to our homepage')
    res.end()
})
server.listen(5000)