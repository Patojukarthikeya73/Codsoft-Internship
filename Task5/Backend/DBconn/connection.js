const mongoose=require("mongoose");

const DbConnect=()=>{
    main().catch(res=>console.log("connection Successful....")
    )
    .catch(err=>{
        console.log(err);
    })
    
    async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/QuizApp");
    }
};
module.exports=DbConnect;