const express=require('express');

const Quiz=require('../models/quiz');

const authLogin = require('../controller/authlogin');
const authSignup = require('../controller/authSignUp');
const router=express.Router();
const authVerify =require('../middleware/authVerify');
const category=require('../controller/category');
const RouteNotFound = require('../middleware/routeNotFound');


router.get('/quiz',authVerify,async (req,res)=>{
    const quizzes= await Quiz.find({});
    res.send(quizzes);  
})

router.get('/category',category);
router.post('/auth/login',authLogin);
router.post('/auth/signup',authSignup);

router.get('*',RouteNotFound);
module.exports=router;