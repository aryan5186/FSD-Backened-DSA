const express=require('express')

const app=express();
let users=[
    {id: 1,name:'John'},
    {id: 1,name:'Jane'},
    {id: 1,name:'Mikeal'},
]

app.get('/users',(req,res)=>{
    res.send('welcome to backened server using express');
})

app.listen(9000,()=>{
    console.log("server is running on port 9000")
})
