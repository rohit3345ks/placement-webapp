const express=require('express');
const bodyParser=require('body-parser')
const app=express();
import mongoose from 'mongoose';
const cors=require('cors');

var corsOptions={
    origin: "http://localhost:3000"
}

mongoose.connect()
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



//Routes



//************************ */

//View Routes

//****************************** */
app.get('/',(req,res)=>{
    res.render('home');
});

// Login Page View Route
app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/signup',(req,res)=>{
    res.render('signup');
});

// Login Post Route

app.post('/login',(req,res)=>{
    let usermail=req.body.usermail;
    let pass=req.body.pass;
    console.log("login");
    console.log(usermail,pass);
    res.render('home');
});

app.post('/signup',(req,res)=>{
    let username=req.body.username;
    let usermail=req.body.usermail;
    let pass=req.body.pass;
    console.log('Signup');
    console.log(username,usermail,pass);
    res.render('home');
})


app.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
})