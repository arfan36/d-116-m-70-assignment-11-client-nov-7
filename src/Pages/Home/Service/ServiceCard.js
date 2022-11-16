import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import toast from 'react-hot-toast';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, description } = service;

    // handle Add To My Service
    const handleAddToService = (id) => {
        fetch(`http://localhost:5000/my-service/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Service added to My Service');
                }
            })
            .catch(err => console.error('err', err));
    };

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
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
                <p>add to <button onClick={() => handleAddToService(_id)} className='badge'>My Service</button></p>
                <Link to={`/service/${_id}`}>
                    <button className='btn btn-outline btn-accent w-full'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;