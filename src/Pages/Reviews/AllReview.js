import React from 'react';

const AllReview = ({ review }) => {

    const { product_id, product_name, user_name, user_email, user_photoURL, review_message } = review;

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
                        <p>Name: {product_name}</p>
                        <p>Date</p>
                    </div>
                    <p className='text-sm'>product id: <span className='text-amber-500'>{product_id}</span></p>
                    <p className='italic'>"{review_message}"</p>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default AllReview;