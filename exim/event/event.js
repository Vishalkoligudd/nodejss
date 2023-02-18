// events
let a=require("events")
let topper=new a()
topper.on("puresults",()=>{console.log("happy");})
topper.on("puresults",()=>{console.log("only 95");})
process.on('exit',(code)=>{console.log('Process exit event with code:',code);})
topper.emit("puresults")


// events
// let a=require("events")
// let topper=new a()
// topper.on("pu",(results)=>{if(results==="95%"){console.log("happy");}})
// topper.on("pu",(results)=>{if(results==="95%"){console.log("only 95%");} })
// topper.emit("pu","95%")