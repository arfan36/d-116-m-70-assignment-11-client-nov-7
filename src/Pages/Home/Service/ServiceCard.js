import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, description } = service;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <PhotoProvider>
                <div className="foo">
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-2xl text-accent font-semibold'>
                    Price: $<span className='text-orange-600'>{price}</span>
                </p>
                <p>
                    {
                        description.length < 100 ?
                            description
                            :
                            <>
                                {description.slice(0, 100)}... {''}
                                <span className='font-bold'>see more</span>
                            </>
                    }
                </p>
                <Link to={`/checkout/${_id}`}>
                    <button className='btn btn-outline btn-accent w-full'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;