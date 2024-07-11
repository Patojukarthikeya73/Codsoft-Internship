const mongoose=require('mongoose');
const schema=  mongoose.Schema

const optionSchema=new schema({
    option:{
        type:String,
        required:true
    },
    isCorrect:{
        type:Boolean,
        required:true
    }
})

const questionSchem=new schema({
    question:{
        type:String,
        required:true
    },
    options:[optionSchema]
})

const quizSchema= new schema({
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    quiz:[questionSchem]
})

const Quiz=mongoose.model("Quiz",quizSchema);

module.exports=Quiz;