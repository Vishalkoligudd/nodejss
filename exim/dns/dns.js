const dns=require('dns')
dns.lookup('www.youtube.com',(err,address,family)=>{
    if(err){
        throw err
    }
    console.log(address,family);
})
