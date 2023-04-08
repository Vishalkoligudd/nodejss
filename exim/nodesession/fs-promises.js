const fs=require('fs/promises')

// fs.writeFile('test.txt','we are writting something')
// .then(()=>{
//     console.log('file written')
//     fs.readFile('test.txt','utf-8')
//     .then((data)=>{console.log(data)
//         fs.appendFile('test.txt','\nhello')
//         .then(()=>{console.log('upadated');})
//         .catch((err)=>{console.log(err);})})
//     .catch((err)=>{console.log(err);})})
// .catch((err)=>{console.log(err);})


// fs.unlink('test.txt').then(()=>{console.log('deleted');}).catch((err)=>{console.log(err);})

// async function write(){
//    const data= await fs.writeFile('test.txt','hello everyone')
//     console.log(data);
// }
// write()

// async function read(){
//     const data=await fs.readFile('test.txt','utf-8')
//     console.log(data);
// }read()

// async function append(){
//    await fs.appendFile('test.txt','\ngood morning')
// }append()

async function unli(){
    await fs.unlink('test.txt')
}unli()


