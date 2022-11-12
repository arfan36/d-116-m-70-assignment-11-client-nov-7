import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddSingleReview = ({ service }) => {
    const [error, setError] = useState('');
    const [ShowLoginBtn, setShowLoginBtn] = useState('');

    const { _id, name, img, price, description } = service;
    const { user } = useContext(AuthContext);



    // when user not logged in
    const loginButton = <>
        <div className='text-center'>
            Please <Link to={'/login'}><button className='underline text-orange-600'>login</button></Link> to add a review
        </div>
    </>;

    // handle posting review
    const handlePostReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const userPhotoURL = form.photoURL.value;
        const email = user?.email;
        const message = form.message.value;

        const review = {
            product_id: _id,
            product_name: name,
            product_img: img,
            product_price: price,
            product_description: description,
            user_name: userName,
            user_photoURL: userPhotoURL,
            user_email: email,
            review_message: message
        };
        if (!email) {
            setShowLoginBtn(loginButton);
        }
        else {
            // create (C) insertOne
            fetch(`http://localhost:5000/reviews`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('foodie')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        setError(data.message);
                    }
                    if (data.acknowledged) {
                        toast.success('successfully posted');
                        form.reset();
                        setError('');
                        setShowLoginBtn('');
                    }
                })
                .catch(err => setError(err.message));
        }
    };

    return (
        <div>
            <form onSubmit={handlePostReview} className='mr-3'>
                <h2 className='font-bold text-2xl mb-3'>Write a Review</h2>
                <div>
                    <input className='input input-ghost input-bordered w-full mb-2' type="text" name="name" placeholder='Your Name' defaultValue={user?.displayName} required />
                    <input className='input input-ghost input-bordered w-full mb-2' type="text" name="photoURL" placeholder='User Photo URL' defaultValue={user?.photoURL} required />
                    <input className='input input-ghost input-bordered w-full mb-2' type="email" name="email" placeholder='Your Email' defaultValue={user?.email} readOnly />
                </div>
                <textarea className='textarea textarea-bordered h-24 w-full' name="message" placeholder='Your Review' required></textarea>
                <input className='btn btn-outline btn-accent w-full' type="submit" value="Post Review" />
            </form>
            <p className='text-red-600 text-center mt-2 text-2xl'>{error}</p>
            <>
                {ShowLoginBtn}
            </>
        </div>
    );
};

export default AddSingleReview;