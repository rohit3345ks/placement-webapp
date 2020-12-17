const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const db=require('./config/db.config');
dotenv.config();

const cors=require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//************************************** */

// Importing Routes

//************************************** */
const authRoute=require('./routes/auth.routes');




//Allowing Routes access from other domains than origin
var corsOptions={
    origin: "http://localhost:3000"
}
app.use(cors(corsOptions));






//************************ */

//Middlewares

//****************************** */
app.use('/user',authRoute);


//************************ */

//Routes

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





//************************************** */

// Server Starting Code

//************************************** */

app.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
})