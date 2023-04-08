// const http=require('http')

// http.createServer((req,res)=>{
//     if(req.url==='/'||req.url==='/home'){
//         res.end('this is home')
//     }else{
//         res.end('page not found')
//     }
// }).listen(3000,(err)=>{
//     if(err){
//         throw err
//     }else{
//     console.log('listening on port 3000');
//     }
// })

// const fs=require('fs/promises')
// http.createServer( async (req,res)=>{
//     if(req.url==='/'||req.url==='/home'){
//         res.statusCode=200
//         res.statusMessage='ok'
//         res.setHeader('content-type','text/html')
//         let html=await fs.readFile('./index.html','utf-8')
//         res.end(html)
//     }else{
//         console.log('this is not your page');
//     }
// }).listen(3000,(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log('server is running on port 3000');
//     }
// })


// const fs=require('fs')
// http.createServer( (req,res)=>{
//     if(req.url==='/'||req.url==='/home'){
//       fs.createReadStream("index.html","utf-8").pipe(res)
//     }else{
//         console.log('this is not your page');
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log('server is running on port 3000');
//     }
// })

// const fs=require('fs')
// http.createServer( (req,res)=>{
//     if(req.url==='/'||req.url==='/home'){
//         res.writeHead(200,"ok",{'content-type':"text/html"})
//       fs.createReadStream("index.html","utf-8").pipe(res)
//     }else if(req.url==='/css'){
//         res.writeHead(200,"ok",{'content-type':"text/css"})
// fs.createReadStream('style.css','utf-8').pipe(res)
//     }else{
//         res.writeHead(200,"ok",{'content-type':"text/html"})
//  fs.createReadStream('pagenotfound.html').pipe(res)
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log('server is running on port 5000');
//     }
// })

//images/videos
// const http=require('http')
// const fs=require('fs')
// const { log } = require('console')

// http.createServer((req,res)=>{
  
// if(req.url==='/'||req.url==='/home'){
//     res.writeHead(200,"ok",{'content-type':"text/html"})
//     fs.createReadStream("index.html","utf-8").pipe(res)
//   }else if(req.url==='/css'){
//       res.writeHead(200,"ok",{'content-type':"text/css"})
// fs.createReadStream('style.css','utf-8').pipe(res)
//   }else if(req.url==='/image'){
//     res.writeHead(200,'ok',{'content-type':'image/jpeg'})
//     fs.createReadStream('page-not-found.jpg').pipe(res)
//   }
// //   else if(req.url==='/video'){
// //     res.writeHead(200,'ok',{'content-type':'video/mp4'})
// //     fs.createReadStream('').pipe(res)
// //   }
//   else{
//       res.writeHead(200,"ok",{'content-type':"text/html"})
// fs.createReadStream('pagenotfound.html').pipe(res)
// }
// }).listen(3000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('server is running on 3000');
//     }
// })


// const http=require('http')
// const fs=require('fs')

// http.createServer((req,res)=>{
//   switch(req.url){
//     case '/' : 
    
//       res.writeHead(200,"ok",{'content-type':"text/html"})
//       fs.createReadStream("index.html","utf-8").pipe(res)
//       break;
//   case '/css':
//         res.writeHead(200,"ok",{'content-type':"text/css"})
//   fs.createReadStream('style.css','utf-8').pipe(res)
//   break;
//     case '/image' :
//       res.writeHead(200,'ok',{'content-type':'image/jpeg'})
//       fs.createReadStream('page-not-found.jpg').pipe(res)
//       break;
//     default:
//   //   else if(req.url==='/video'){
//   //     res.writeHead(200,'ok',{'content-type':'video/mp4'})
//   //     fs.createReadStream('').pipe(res)
//   //   }
    
//         res.writeHead(200,"ok",{'content-type':"text/html"})
//   fs.createReadStream('pagenotfound.html').pipe(res)
  
//   }

// }).listen(3000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('server is running on 3000');
//     }
// })

const http=require('http')
const fs=require('fs')


http.createServer((req,res)=>{
  let pathfile=''
  switch(req.url){
    case '/' : 
       pathfile='index.html'
      res.writeHead(200,"ok",{'content-type':"text/html"})
      
      break;
  case '/css':
    pathfile='style.css'
        res.writeHead(200,"ok",{'content-type':"text/css"})
  
  break;
    case '/image' :
      pathfile='page-not-found.jpg'
      res.writeHead(200,'ok',{'content-type':'image/jpeg'})
      break;
    case '/video':
      pathfile='videoplayback.mp4'
      res.writeHead(200,'ok',{'content-type':'video/mp4'})
     break;
  default:
     pathfile='pagenotfound.html'
        res.writeHead(200,"ok",{'content-type':"text/html"})
  }
  fs.createReadStream(pathfile).pipe(res)
}).listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server is running on 5000');
    }
})