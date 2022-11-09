import React from 'react';
import img1 from '../../../assets/image/banner-img/food/Burgers (Small).jpg';
import img2 from '../../../assets/image/banner-img/food/Chicken (Small).jpg';
import img3 from '../../../assets/image/banner-img/food/grilled steak (Small).jpg';
import img4 from '../../../assets/image/banner-img/food/pasta (Small).jpg';
import img5 from '../../../assets/image/banner-img/food/pizza (Small).jpg';
import img6 from '../../../assets/image/banner-img/food/Sandwiches (Small).jpg';
import BannerItem from './BannerItem';

const Banner = () => {

    const sliderData = [
        { img: img1, prev: 6, id: 1, next: 2 },
        { img: img2, prev: 1, id: 2, next: 3 },
        { img: img3, prev: 2, id: 3, next: 4 },
        { img: img4, prev: 3, id: 4, next: 5 },
        { img: img5, prev: 4, id: 5, next: 6 },
        { img: img6, prev: 5, id: 6, next: 1 }
    ];

    return (
        <div className="carousel w-full py-12">
            {
                sliderData.map(slider => <BannerItem
                    key={slider.id}
                    slider={slider}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;