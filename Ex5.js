const events=require('events').EventEmitter;
let button=new events();
button.on("click",()=>{
    console.log("the object was clicked");
})
button.on("dblclick",(arg)=>{
    console.log("The event is handed on " +arg);
})
button.emit("click");
button.emit("dblclick","button1");