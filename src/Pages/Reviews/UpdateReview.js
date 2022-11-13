import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storeReview = useLoaderData();
    const [userReview, setUserReview] = useState(storeReview);
    console.log("🚀 ~ userReview", userReview);

    return (
        <div>
            <h2>update </h2>
        </div>
    );
};

export default UpdateReview;