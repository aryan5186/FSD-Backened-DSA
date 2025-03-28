const http=require('http')
const fs=require('fs/promises')

const server=http.createServer(async (req,res)=>{
    const data= await fs.readFile('./data.json');
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end(data)
})
 
server.listen(9010,(err)=>{
    if(err)
        console.log("error: ",err) 
    console.log('server is running at http://localhost:9010/')

    res.end(JSON.stringify(titles))
})

server.listen(9000,(err)=>{
    if(err) throw err
    else
    console.log('server is running at http://localhost:9010/'); 
});

