import React from 'react';
import { Article,Cta,Brand,Feature,Navbar} from './Component/index';
import { Blag,Features,Footer,Possibility,WhatPYC,Header} from './containers/index' //?fi 3oth ma n93do n3mlo fi import lkol wa7da n7tohom lkol fard mara 
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Home ,SignIn,SignUp} from './Pages/index'
import ProtectedRoute from './Components-SignUp-In/ProtectedRoute';
import Account  from './Components-SignUp-In/Account';



function App () {
    return ( 
           <Router>
            <div className='app'>
                <div className='gradient__bg'>
                     <Navbar/>   
                </div>
                    <Routes>
                       <Route  path='/Home'    element={<Home/>}  />
                       <Route  path='/SignIn'  element={<SignIn/>}/> 
                       <Route  path='/SignUp'  element={<SignUp/>}/>
                       <Route  path='/account' element={ <ProtectedRoute> <Account /></ProtectedRoute> }/>
           
                    </Routes>


             
           </div>

           </Router>
     );
}

export default App ;