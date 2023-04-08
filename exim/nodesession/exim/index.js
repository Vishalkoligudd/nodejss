
//ES6 modules
// export let a=5
//  export let b=6

// // export {a,b}

// function add(){
//     return 3+4
// }
//  export default add

 //commonjs modules
// module.exports.a=5
// module.exports.b=6
// module.exports.add=()=>{
//     console.log('hi');
// }

module.exports.a=(str,char)=>{
 let   count=0
  for(let i=0;i<=str.length;i++){
    if(str[i]==char){
        count++
    }
  }
  console.log(count);
}

  
