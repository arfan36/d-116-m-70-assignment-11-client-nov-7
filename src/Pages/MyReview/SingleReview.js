import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleReview = ({ review, handleReviewDelete }) => {

    const { _id, product_name, product_img, user_name, user_email, user_photoURL, review_message } = review;

    return (
        <div className='border rounded-xl p-2'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                <div className='md:col-span-1'>
                    <PhotoProvider>
                        <div className="foo flex items-center ml-2">
                            <PhotoView src={product_img}>
                                <img className='rounded-xl' src={product_img} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </div>
                <div className="md:col-span-2">
                    <div className='my-3 pr-3 h-fit'>
                        <div className='flex justify-center items-center gap-3'>
                            <img className='w-8 rounded-full' src={user_photoURL && user_photoURL} alt="" />
                            <h5 className='text-sm'>{user_name && user_name}</h5>
                        </div>
                        <p className='text-center'>email: {user_email}</p>
                        <hr />
                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <p>Name: <span className='text-accent font-bold'>{product_name}</span></p>
                                <p></p>
                            </div>
                            <p className='italic mt-3'>"{review_message}"</p>
                        </div>
                        <div className='flex justify-between'>
                            <Link to={`/update-review/${_id}`}>
                                <button className='underline text-cyan-800 mt-2'>Edit Review</button>
                            </Link>
                            <Link>
                                <button onClick={() => handleReviewDelete(_id)} className='underline mt-2 text-red-600'>Delete Review</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleReview;