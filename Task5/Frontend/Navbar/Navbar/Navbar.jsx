import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { useAuth} from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useQuiz } from '../../AuthContext/quizConext';
 const Navbar=({token})=>{
    console.log(token);
    const {AuthDispatch,username}=useAuth();
    const{quizDispatch}=useQuiz();
    console.log(username);
   // const [token,settoken]=useState("");

    // useEffect(()=>{
    //     const token=localStorage.getItem('token');
    //     console.log(token);
    //     settoken(token);
    // })
    const navigate=useNavigate();

    const logoutUser=()=>{
        if(token){
            localStorage.clear();
            //settoken("");
            AuthDispatch({
                type:"TOKEN",
                payload:""
            })
        }
       navigate('/auth/login');
    }

    const handlehome=()=>{
        quizDispatch({
            type:'INITIAL'
          })
    }
    return(
    <header className='nav-container'>
        <div className='nav-head-container'>
            <h1 className='nav-head'>DoQuiz</h1>
        </div>
        <nav className='nave-onorder-list'>
            <ul className='nav-list-container'>
                 <li className='nav-lisi-item'>
                   <Link to ='/' className='nav-link' onClick={handlehome}>Home</Link>
                 </li>
                {token?  <li className='nav-lisi-item'>
                <span className='nav-link'>{username}</span>
                <Link to ='/auth/login' className='nav-link' onClick={logoutUser}>Logout</Link>
                
                </li>
                :
                <li className='nav-lisi-item'>
                <Link to ='/auth/login' className='nav-link' onClick={logoutUser}>Login</Link>
    
                <Link to ='/auth/signup' className='nav-link' onClick={logoutUser}>SignUp</Link>
                </li>
                }
            </ul>
        </nav>
    </header>
    )
 };
 export default Navbar;