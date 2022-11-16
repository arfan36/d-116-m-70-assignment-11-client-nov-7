import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const UpdateReview = () => {
    useTitle('Edit Review - ');
    const storeReview = useLoaderData();
    const [userReview, setUserReview] = useState(storeReview);
    const {
        product_description,
        product_id,
        product_img,
        product_name,
        product_price,
        review_message,
        user_email,
        user_name,
        user_photoURL
    } = storeReview;

    const navigate = useNavigate();

    // handle UpdateReview
    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;

        // update (U)
        fetch(`http://localhost:5000/reviews/${userReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('Review updated');
                    form.reset();
                    navigate(`/service/${product_id}`);
                }
            })
            .catch(err => console.error('err', err));
    };


    // handle input onChange
    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...userReview };
        newReview[field] = value;
        setUserReview(newReview);
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-6'>

            <div className="card w-80 bg-base-100 shadow-xl h-fit">
                <figure>
                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView src={product_img}>
                                <img src={product_img} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">
                        {product_name}
                    </h2>
                    <p className='text-2xl font-semibold'>
                        Price: $<span className='text-orange-600'>{product_price}</span>
                    </p>
                    <p> {product_description} </p>
                    <Link to={`/service/${product_id}`}>
                        <button className='btn btn-outline btn-accent w-full font-bold'>All Review</button>
                    </Link>
                </div>
            </div>

            <div className='text-center'>

                <div className='flex justify-center items-center gap-3'>
                    <img className='w-8 rounded-full' src={user_photoURL && user_photoURL} alt="" />
                    <h5 className='text-sm'>{user_name && user_name}</h5>
                </div>
                <p className='text-center'>email: {user_email}</p>
                <form onSubmit={handleUpdateReview}>
                    <textarea onChange={handleInputChange} defaultValue={review_message} className='textarea textarea-bordered h-60 w-full' type="text" name='review_message' placeholder='Edit review' required />
                    <button type='submit' className='btn btn-outline btn-accent'>Post Review</button>
                </form>
            </div>


        </div>
    );
};

export default UpdateReview;