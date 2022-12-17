import React from 'react';
import Signup from '../../Components-SignUp-In/Signup';
import { AuthContextProvider } from '../../Context-SignUp-In/AuthContext';
import ProtectedRoute from '../../Components-SignUp-In/ProtectedRoute';
const SignUp = () => {
    return (  
           <>
           <h1 className='text-center text-3xl font-bold'>
            Present Your Career
           </h1>
           <AuthContextProvider>
           <Signup/>
           </AuthContextProvider>
           </>
              
              
       

    );
}
 
export default SignUp;