let a=require('path')
// console.log(__filename);
let b=a.basename('C:/Users/hp/Desktop/node/exim/path/path.js')
// console.log(b);
let c=a.dirname('C:/Users/hp/Desktop/node/exim/path/path.js')
// console.log(c);
let d=a.extname('C:/Users/hp/Desktop/node/exim/path/path.js')
// console.log(d);
let e=a.normalize("public/////sell////")
// console.log(e);
// console.log(a.join(__dirname,"index.js"));
// console.log(a.join(__filename,"index.js",'sdfe'));
console.log(a.parse(__filename));