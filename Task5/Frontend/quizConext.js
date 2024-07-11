import quizReducer from "../reducer/quizReducer";
import { useContext,createContext,useReducer} from "react";

const intialState={
    index:0,
    score:0,
    quizcategory:"",
    selectedoption:""
}

const quizContext=createContext();

const QuizProvider=({children})=>{
    const[{index,score,quizcategory,selectedoption},quizDispatch]=useReducer(quizReducer,intialState);
    return(
        <quizContext.Provider value={{index,score,quizcategory,selectedoption,quizDispatch}}>
            {children}
        </quizContext.Provider>
    )
};

const useQuiz=()=>useContext(quizContext);
export{useQuiz,QuizProvider};