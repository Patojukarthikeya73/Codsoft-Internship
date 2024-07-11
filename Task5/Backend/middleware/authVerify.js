const jwt=require("jsonwebtoken");


const authVerify=(req,res,next)=>{
    const token=req.headers.authorization;
    try{
     const decodeToken=jwt.verify(token,"student");
     req.user={userId:decodeToken.id}
     return next();

    }catch(err){
        console.error(`Error from Server ${JSON.stringify(err)}`);
    }
};

module.exports=authVerify;