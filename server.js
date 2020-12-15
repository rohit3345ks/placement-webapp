const express=require('express');

const app=express()

app.use(express.static(__dirname+''))

app.get('/',(req,res)=>{
    res.send("Hello Node JS");
});


app.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
})