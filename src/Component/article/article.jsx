import React, { Component } from 'react';
import './article.css'
import Cv from './exemblesCv';
// import {CSSTransition} from 'react-transition-group';
 class Article extends Component {

    constructor(){
        super()
        this.state={
            CvInfo:Cv,
            counter:1,
            // counter2:3,
        }
        this.FrontCv=this.FrontCv.bind(this);
        this.Verife=this.Verife.bind(this);
        this.Verife2=this.Verife2.bind(this);
        this.Remplir=this.Remplir.bind(this);
        this.SacendCv=this.SacendCv.bind(this);
    }
    ClickHandler1(){
        console.log(this.state.memberInfo );  //!hathi fl console 
       
     }

    FrontCv(){
        this.setState(exemple =>{
            return {counter : exemple.counter +1 }
        })
       }
    SacendCv(){
        this.setState(exemple =>{
            return {counter : exemple.counter -1 }
        })
    }
    


    Remplir(p){
    return(
       
        <div className='LienCv'>
             <h1>{p.nb}</h1>
            <a href={p.url} >
                <img src={p.img} alt={p.alt}  id="aaa" />
            </a>
        </div>
    );    
    }

    Verife(){
        if(this.state.counter<=3 && this.state.counter>=0){
            return( <this.Remplir 
            key={ this.state.CvInfo[this.state.counter].id} 
            url={ this.state.CvInfo[this.state.counter].url}
            alt={ this.state.CvInfo[this.state.counter].alt} 
            img={ this.state.CvInfo[this.state.counter].img}
            // nb={ this.state.CvInfo[this.state.counter].nb}
           />);


        }
        else if(this.state.counter<0){
            this.state.counter=3;
        }
        else if (this.state.counter>3){
            this.state.counter=0;
        }
    }
    Verife2(nb){
        var a ;
         if(nb.a<4 && nb.a>=0){
            return( <this.Remplir 
            key={ this.state.CvInfo[nb.a].id} 
            // url={ this.state.CvInfo[nb.a].url}
            alt={ this.state.CvInfo[nb.a].alt} 
            img={ this.state.CvInfo[nb.a].img}
            // nb= { this.state.CvInfo[nb.a].nb}
           />);}
           else if (nb.a <0){
            let b =nb.a;
            b=b+4;
            return( <this.Remplir 
                key={ this.state.CvInfo[b].id} 
                // url={ this.state.CvInfo[b].url}
                alt={ this.state.CvInfo[b].alt} 
                img={ this.state.CvInfo[b].img}
                // nb= { this.state.CvInfo[b].nb}
               />);

        }
        else if (nb.a >3){
           let x=nb.a;
           x=x-4;
            return( <this.Remplir 
                key={ this.state.CvInfo[x].id} 
                // url={ this.state.CvInfo[x].url}
                alt={ this.state.CvInfo[x].alt} 
                img={ this.state.CvInfo[x].img}
                // nb= { this.state.CvInfo[x].nb}
               />);}
        
          
        }
 
    

    
    render() { 
        return (
           <div className='Article'>
               <div className='buttons'>
                <h2>choisire un modeles</h2>
               <button onClick={this.FrontCv}>prev</button>
               <button onClick={this.SacendCv}>next</button>   

               </div>
               <div className='ExempleCv'>
               <div className='Second'>
               <this.Verife2 a={this.state.counter-2}/>
               </div>
               <this.Verife2 a={this.state.counter-1}/>
               <div className='first'> <this.Verife/></div>
               <this.Verife2 a={this.state.counter+1}/>
               <div className='Second'>
               <this.Verife2 a={this.state.counter+2}/>
               </div>
               </div>
               
           
           </div>


        );
    }
 }
  
 export default Article;
 