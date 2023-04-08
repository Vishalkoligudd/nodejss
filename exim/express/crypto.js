
const crypto=require('crypto')
//  let hashedpassword=crypto.createHash('md5').update('password').digest('hex')
//  console.log(hashedpassword);


const secret='vishal'
const hashedpassword= crypto.createHmac('sha256',secret).update('password').digest('hex')
console.log(hashedpassword);

