const fs=require('fs');
const data="I am  in async write";
fs.writeFileSync("./data.txt",data,(err)=>{
       if(err) 
        console.log("Error writing file",err);
       else 
       console.log("File written successfully");
});