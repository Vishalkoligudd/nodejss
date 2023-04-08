// EventEmitter=require('events')
//  let student=new EventEmitter()
//  student.on("distinction",()=>{console.log("happy");})
//  student.on("distinction",()=>{console.log("careless");})
//  student.on("distinction",()=>{console.log("sad");})

//  student.emit("distinction")


EventEmitter=require('events')
 let student=new EventEmitter()
 student.on("result",(grade)=>{
    if(grade==="distinction"){
    console.log("happy")}else{
        console.log("sad");
    }
})
 student.on("result",(grade)=>{if(grade==="justpass")console.log("careless");})
 student.on("result",(grade)=>{if(grade==="fail")console.log("sad");})

 student.emit("result","hi")
 
