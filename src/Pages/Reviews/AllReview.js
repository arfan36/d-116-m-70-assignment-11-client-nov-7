import React from 'react';
import { Link } from 'react-router-dom';

const AllReview = ({ review, handleReviewDelete }) => {

    const { _id, product_name, user_name, user_email, user_photoURL, review_message } = review;

    return (
        <div >
            <div className='my-3 p-3 rounded-xl border w-96 mr-3'>
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-8 rounded-full' src={user_photoURL && user_photoURL} alt="" />
                    <h5 className='text-sm'>{user_name && user_name}</h5>
                </div>
                <p className='text-center'>email: {user_email}</p>
                <hr />
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <p>Name: <span className='text-accent font-bold'>{product_name}</span></p>
                        <p>Date</p>
                    </div>
                    <p className='text-sm'>Review Id: <span className='text-orange-400'>{_id}</span></p>
                    <p className='italic mt-3'>"{review_message}"</p>
                </div>
                <div className='flex justify-between'>
                    <Link to={`/update-review/${_id}`}>
                        <button className='underline text-cyan-800 mt-2'>Edit Review</button>
                    </Link>
                    <Link>
                        <button onClick={() => handleReviewDelete(_id)} className='underline text-cyan-800 mt-2'>Delete Review</button>
                    </Link>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default AllReview;