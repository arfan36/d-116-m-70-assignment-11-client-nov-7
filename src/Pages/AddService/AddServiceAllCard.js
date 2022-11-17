import React, { useContext } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddServiceAllCard = ({ service, handleDeleteService }) => {
    const { user } = useContext(AuthContext);
    const { _id, product_id, name, img, price, description, user_email, dateAdded } = service;

    return (
        <>
            {
                user?.email === user_email &&
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
                        <p className='text-accent'>{dateAdded}</p>
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
                        {
                            user?.email &&
                            <p><button onClick={() => handleDeleteService(_id)} className='badge badge-warning'>Delete Service</button></p>
                        }
                        <Link to={`/service/${product_id}`}>
                            <button className='btn btn-outline btn-accent w-full'>View Details</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default AddServiceAllCard;