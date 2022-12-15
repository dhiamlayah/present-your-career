import React from "react";
import './Sign.css';
import Account  from '../../Components-SignUp-In/Account';
import Signin from '../../Components-SignUp-In/Signin';
import Signup from '../../Components-SignUp-In/Signup';
import { Article,Cta,Brand,Feature,Navbar} from '../../Component/index';
import { Blag,Features,Footer,Possibility,WhatPYC,Header} from '../../containers/index' //?fi 3oth ma n93do n3mlo fi import lkol wa7da n7tohom lkol fard mara 
import { AuthContextProvider } from '../../Context-SignUp-In/AuthContext';
import ProtectedRoute from '../../Components-SignUp-In/ProtectedRoute';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const Sign = () => {
    return (  
           <>
           <h1 className='text-center text-3xl font-bold'>
            Present Your Career
           </h1>
           <AuthContextProvider>
            <Routes>
              <Route path='/' element={<Signin/>}/>
              <Route path='/signup' element={<Signup/>} />
           <Route
             path='/account'
             element={
               <ProtectedRoute>
                 <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        </AuthContextProvider>
           
           
           </>


    );
}
 
export default Sign;