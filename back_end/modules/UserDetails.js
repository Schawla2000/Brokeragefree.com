
const mongoose= require('mongoose');
const UserSchema= new mongoose.Schema(
{
Fullname:
{
    type:String,
    required:true
},
Emailid:
{
    type:String,
    required:true
},
Password:
{
    type:String,
    required:true
},
Address:
{
    type:String,
    required:true
},
Dateofbirth:
 {
     type:Date,
     required:true
},
Mobilenumber:
{
    type:Number,
    required:true
},
Adharnumber:
{
    type:Number,
    required:true
},
photos:
{
    type:String,
    required:false
},
Employeeid:
{
    type:Number,
    required:false
},
Salary:
{
    type:Number,
    required:false
}
})

const UserDetails=mongoose.model("UserDetails",UserSchema)
module.exports=UserDetails;