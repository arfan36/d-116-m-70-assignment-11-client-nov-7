import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slider }) => {
    const { img, prev, id, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img mx-auto'>
                <img src={img} className="w-full rounded-xl mx-auto" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;