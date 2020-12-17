const mongoose=require('mongoose');
const models={

}
const userSchema=new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    Email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    Password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const userTypeSchema=new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userSchema"
        }
    },
    Type: {
        type: String,
        default: "Student"
    }
})
const userModel=mongoose.model("User",userSchema);
const userTypeModel=mongoose.model("UserType",userTypeSchema);

models.userModel;
models.user

module.exports=userModel;

// data.save((err)=>{
//     if(err) console.log(`The error in saving the document: ${err.message}`);
// });
