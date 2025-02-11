const fs=require('fs');
console.log('Create a new directory');

fs.mkdir('MyFolder',{recursive: true},(err)=>{
    if(err){
        console.error("An error Occurred")
        return;
    }
    console.log("directory created successfully");
});