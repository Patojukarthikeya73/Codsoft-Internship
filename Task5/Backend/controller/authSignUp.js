
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const bcrypt=require('bcrypt');

const authSignup=async (req,res)=>{
    const {username,email,password}=req.body;
    
    if(!email){
        return res.status(400).json({
            message:"Please fill all the details"
        })
     }
     if(!username){
        return res.status(400).json({
            message:"Please fill all the details"
        })
     }
     if(!password){
        return res.status(400).json({
            message:"Please fill all the details"
        })
     }
   const isUserEmail=await User.findOne({email});
   const isUserName=await User.findOne({username});
    if(isUserEmail){
         return res.status(422).json({
            message:"Email Already Registered"
        })
     
    }
    else if(isUserName){
       return res.status(422).json({
            message:"Username Already Exist"
        })
    }
    else{
        let hashpassword;
        try{
         hashpassword=await bcrypt.hash(password,10);
        }
        catch(err){
             console.log(err);
        } 
        const useremail=email.toLowerCase();
         await User.create({username,email:useremail,password:hashpassword});
        const token=jwt.sign({id:email},"student");
         return res.json({
            username,
            token,
            message:"Created Successfully"
        })
    }
};
module.exports=authSignup;