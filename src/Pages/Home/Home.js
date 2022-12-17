import './Home.css';
import { Article,Cta,Brand,Feature,Navbar} from '../../Component/index';
import { Blag,Features,Footer,Possibility,WhatPYC,Header} from '../../containers/index' //?fi 3oth ma n93do n3mlo fi import lkol wa7da n7tohom lkol fard mara 

const Home = ()=>{
   return (
    <>
     <div className='gradient__bg'>
      <Header/>
     </div>
             <Brand/>
             <WhatPYC/>
             <Features/>
             <Possibility/>
             <Cta/>
             <Blag/>
             <Article />
             <Feature />
     <div className="gradient__bg">
                       <Footer/>
            </div>
    </>
   )

}
export default Home ;