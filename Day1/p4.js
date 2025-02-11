const fs=require('fs');
const data=fs.readFile("data.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error reading File",err);
        return;
    }
    console.log(data);
});