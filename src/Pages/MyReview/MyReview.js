import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import SingleReview from './SingleReview';

const MyReview = () => {
    const myReviews = useLoaderData();
    const [displayReview, setDisplayReview] = useState(myReviews);

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

    return (
        <div>
            {
                displayReview.length === 0 &&
                <div className='flex justify-center items-center h-[300px]'>
                    <h2 className='text-2xl'>No reviews were added</h2>
                </div>
            }

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center'>
                {
                    displayReview.map(review => <SingleReview
                        key={review._id}
                        review={review}
                        handleReviewDelete={handleReviewDelete}
                    ></SingleReview>)
                }
            </div>

        </div>
    );
};

export default MyReview;