import React, { Component } from "react";
import './article.css';
import { img1, img2, img3 } from './slide';
class Article extends Component {
    state = {  } 
    render() {
        return (
            <div className='imgs'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        );
    }
}
 
export default Article;