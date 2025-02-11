const fs=require('fs');
const data="i am appended to last";

fs.appendFileSync('./data.txt',data,(err)=>{
    if(err)
     throw err;
     console.log('Data appended to file');   
});