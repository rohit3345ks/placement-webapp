const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();
//************************************** */

// Database Connection and Test

//************************************** */


const dburl=process.env.DB_URL;
mongoose.connect(dburl,{
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>{
    console.log("Successfully Connected to database");
}).catch((err)=>{
    console.log(`The error message is ${err.message}`);
})

