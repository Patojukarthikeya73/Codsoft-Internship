import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Quiz.css"
import { useQuiz } from '../../AuthContext/quizConext';
function QNA({quizdata}) {
    const navigate=useNavigate();
    
    const{index,quizDispatch,selectedoption}=useQuiz();
    
    const[currentQuiz]=quizdata;
    const{title,quiz}=currentQuiz;
  
    
    const nextQuestion=()=>{
        console.log("clicked");
        if(index!==quiz.length-1){
        quizDispatch({
            type:"INDEX"
        })
      }
      else{
        quizDispatch({
          type:'SUBMIT'
        })
        navigate('/result');
      }
    }
    const handleAnswer=(id,isCorrect)=>{
        quizDispatch({
            type:"SELECT_OPTION",
            payload:{
                id,
                isCorrect
            }
        })
        if(isCorrect){
          quizDispatch({
            type:"SCORE",
          })
        }
    }
    const handleQuizQuit=()=>{
      quizDispatch({
        type:'INITIAL'
      })
       navigate('/');
    }
  return (
    <>
    <div className='quiz-container'>
        <div className='quiz-title'>{title}</div>
        <div className="quiz-question-no">
            <span className='quiz-q-score'>Questions:{index+1}/{quiz.length}</span>
          
        </div>
        <div className='quiz-question'>Q{index+1}:{quiz[index].question}</div>
        <div className='quiz-option'>
           { quiz[index].options.map(({_id,option,isCorrect})=>
            <button className={`quiz-option-btn ${selectedoption&&isCorrect?"success":""} ${selectedoption===_id&& !isCorrect?"error":""}`} onClick={()=>{handleAnswer(_id,isCorrect)}} disabled={selectedoption}>{option}</button>
           )}
        </div>
        </div>
        <div className='quiz-game-handle'>
            <button className='quiz-quit' onClick={handleQuizQuit}>Quit</button>
            <button className={` ${index===quiz.length-1?"submit":"quiz-next"}`} onClick={nextQuestion}> {index===quiz.length-1?"submit":"Next Question"}</button>
        </div>
    </>
  )
}

export default QNA