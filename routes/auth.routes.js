const router=require('express').Router();
const userModel=require('../models/user.models');


router.post('/login',(req,res)=>{
    let usermail=req.body.usermail;
    let pass=req.body.pass;
    console.log("login");
    console.log(usermail,pass);
    res.render('home');
});

router.post('/signup',(req,res)=>{
    let username=req.body.username;
    let usermail=req.body.usermail;
    let pass=req.body.pass;
    console.log('Signup');
    console.log(username,usermail,pass);
    res.render('home');
});


module.exports=router;