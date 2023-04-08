
//ES6 modules
// import {a,b} from './index.js'
// import add from './index.js'
// console.log(a);
// console.log(b);

// console.log(add());

//commonjs modules
// const x=require('./index.js')

// console.log(x.a);
// x.add()

// const b=require('./index')
//  b.a('ramanujan','a')

// const fs=require('fs')
// fs.writeFile("demo.txt","hello world",()=>{
//     console.log('file written');
// })
// console.log('written');

// const fs=require('fs')
// fs.writeFile("test.txt","hello world",()=>{
//     console.log('file written');
// })
// console.log('written');

const fs=require('fs')
// fs.writeFileSync("test.txt","hi world")
//     console.log('file written');

// fs.readFile("./demo.txt",(err,data)=>{
//     if(err)console.log(err)
//     console.log(data.toString());})

    // fs.unlink('./demo.txt',(err)=>{
    //     if(err)throw err
    // })

    // fs.readFile("./test.txt","utf-8",(err,data)=>{
    //     if(err)console.log(err)
    //     console.log(data);})

 fs.readFile('./test.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        fs.writeFile('./written.txt',`${data}`,()=>{
            console.log('written');
            fs.appendFile('./written.txt',`\nvishal`,()=>{
                console.log('updated');
                fs.unlink('./written.txt',()=>{
                    console.log('deleted');
                })
            })
        })
    }
 })