import React, { Component } from 'react';
import './article.css'
import { img1, img2, img3 } from './slide'
import SimpleImageSlider from 'react-simple-image-slider';
const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },

];

const Article = () => {
    return (
        <div className='slider'>
            <SimpleImageSlider
                width={300}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
}


export default Article;