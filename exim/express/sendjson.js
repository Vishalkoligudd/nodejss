const http=require('http')
 http.createServer((req,res)=>{
    let employees=[{
        'ename':"vishal",
        'sal':24000
    },
{
    'ename':'sdk',
    'sal':40003
}]
  let data=JSON.stringify(employees)
  res.writeHead(200,'ok',{'content-type':'application/json'})
  res.end(data)
 }).listen(5000)