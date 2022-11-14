import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../hooks/useTitle';
import AddSingleReview from './AddSingleReview';

const AddReview = () => {
    const service = useLoaderData();
    const { _id, name, img, price, description } = service;
    useTitle('Add Review - ');

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-6'>
            <div className="card w-80 bg-base-100 shadow-xl h-fit">
                <figure>
                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-2xl text-accent font-semibold'>
                        Price: $<span className='text-orange-600'>{price}</span>
                    </p>
                    <p>Product Id: <span className='text-orange-400'>{_id}</span></p>
                    <p> {description} </p>
                    <Link to={`/service/${_id}`}>
                        <button className='btn btn-outline btn-accent w-full font-bold'>All Review</button>
                    </Link>
                </div>
            </div>
            <div>
                <AddSingleReview service={service}></AddSingleReview>
            </div>
        </div>
    );
};
export default AddReview;