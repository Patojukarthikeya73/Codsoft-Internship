const Quiz=require('../models/quiz');

const category=async(req,res)=>{
    const quizzes= await Quiz.find({});
    res.send(quizzes);  
}

module.exports=category;