let path=require('path')
console.log(path.sep);

let filepath=path.join('/exim','freecode','file.txt')
console.log(filepath);

let base=path.basename(filepath)
console.log(base);

let absolute=path.resolve(__dirname,'exim','freecode','file.txt')
console.log(absolute);