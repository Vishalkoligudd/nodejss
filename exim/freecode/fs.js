let {readFileSync,writeFileSync}=require('fs')

let read=readFileSync('./second.txt','utf8')

console.log(read);

writeFileSync('./file.txt',`hello this is for u ${read}`,{flag:'a'})