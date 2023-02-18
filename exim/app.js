// export let a=10
// let b=function(){
//     return 20;
// }
// export default b
// let c=function(a,b,task){
//     task(a,b)
// }
// hof(a,b,function(a,b){return a+b})
// hof(a,b,function(a,b){return a-b})
// export{c}
// module

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
module.exports={add,sub}