const fs=require('fs');
//const data=fs.readFileSync("market.js","utf-8");
//console.log(data);
//fs.readFile("Ex3.js",'utf-8',(err,data)=>{
  //  if(err!=null) console.log(err.message);
   // else{
     //   console.log(data);
    //}
//});
//console.log("File reading is going on!!!");//
const filename="Temp.txt";
const emp1='243,gouthu,Ananthapur,5600';
fs.writeFileSync(filename,emp, 'utf-8');
const emp2='124, keerthana,mysore,65000';
fs.appendFileSync(filename,emp2,'utf-8');