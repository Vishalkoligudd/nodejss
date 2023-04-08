// const os=require('os')
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.hostname());



const dns=require('dns')
dns.lookup('localhost:5000/css',(err,address,family)=>{
    console.log(address,family);
})
