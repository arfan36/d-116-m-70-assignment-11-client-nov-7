import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReview from './AllReview';

const Reviews = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');

    const { _id } = service;
    const { logOut } = useContext(AuthContext);

    // Read (R) by req.query.product_id
    useEffect(() => {
        fetch(`http://localhost:5000/reviews-id?product_id=${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('foodie')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('foodie');
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
                if (data.message) {
                    setError(data.message);
                }
                else {
                    setError('');
                }
            })
            .catch(err => setError(err.message));
    }, [_id, logOut]);

    return (
        <div>
            <h2 className='text-2xl font-semibold'>Total Reviews: {reviews.length}</h2>
            {
                reviews.map(review => <AllReview
                    key={review._id}
                    review={review}
                    service={service}
                ></AllReview>)
            }
            <p>{error}</p>
        </div>
    );
};

export default Reviews;