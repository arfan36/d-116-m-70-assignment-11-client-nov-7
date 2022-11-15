import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReview from './AllReview';

const Reviews = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const [displayReview, setDisplayReview] = useState([]);

    const { _id } = service;
    const { user, logOut } = useContext(AuthContext);

    // get users review from api
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setDisplayReview(data));
    }, [user?.email]);

    // handle Delete
    const handleReviewDelete = (id) => {
        const proceed = window.confirm(`Are you sure you want to delete this review?`);
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted');
                        const remaining = displayReview.filter(review => review._id !== id);
                        setDisplayReview(remaining);
                    }
                })
                .catch(err => console.error('err', err));
        }
    };

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
    }, [_id, logOut, displayReview]);

    return (
        <div>
            <h2 className='text-2xl font-semibold'>Total Reviews: {reviews.length}</h2>
            <div className=''>
                {
                    reviews.length === 0 &&
                    <div className='flex items-center w-auto md:w-80' style={{ minHeight: "30vh" }}>
                        <h2 className='text-2xl'>No reviews were added</h2>
                    </div>
                }
            </div>
            {
                reviews.map(review => <AllReview
                    key={review._id}
                    review={review}
                    service={service}
                    handleReviewDelete={handleReviewDelete}
                ></AllReview>)
            }
            <p>{error}</p>
        </div>
    );
};

export default Reviews;