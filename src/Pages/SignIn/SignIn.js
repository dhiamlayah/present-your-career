import React from "react";
import './SignIn.css';
import Signin from '../../Components-SignUp-In/Signin';
import { AuthContextProvider } from '../../Context-SignUp-In/AuthContext';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Account  from '../../Components-SignUp-In/Account';
// import Signup from '../../Components-SignUp-In/Signup';
// import { Article,Cta,Brand,Feature,Navbar} from '../../Component/index';
// import { Blag,Features,Footer,Possibility,WhatPYC,Header} from '../../containers/index' //?fi 3oth ma n93do n3mlo fi import lkol wa7da n7tohom lkol fard mara 
// import ProtectedRoute from '../../Components-SignUp-In/ProtectedRoute';
// import {Home ,Sign} from '../index';

const SignIn = () => {
    return (  
           <>
           <h1 className='text-center text-3xl font-bold'>
            Present Your Career
           </h1>
           <AuthContextProvider>
           <Signin/>
           </AuthContextProvider>
           </>


    );
}
 
export default SignIn;