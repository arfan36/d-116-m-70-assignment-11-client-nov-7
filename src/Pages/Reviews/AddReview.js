import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../hooks/useTitle';
import AddSingleReview from './AddSingleReview';
// import toast from 'react-hot-toast';

const AddReview = () => {
    useTitle('Add Review - ');
    const service = useLoaderData();
    const { _id, name, img, price, description } = service;

    // // handle Add Service
    // const handleAddToService = (id) => {
    //     fetch(`http://localhost:5000/my-service/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(service)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.acknowledged) {
    //                 toast.success('Service added to Add Service');
    //             }
    //         })
    //         .catch(err => console.error('err', err));
    // };

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
                    <h2 className="card-title text-accent">
                        {name}
                    </h2>
                    <p className='text-2xl font-semibold'>
                        Price: $<span className='text-orange-600'>{price}</span>
                    </p>
                    <p>Product Id: <span className='text-accent'>{_id}</span></p>
                    <p> {description} </p>
                    {/* <p><button onClick={() => handleAddToService(_id)} className='badge'>Add Service</button></p> */}
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