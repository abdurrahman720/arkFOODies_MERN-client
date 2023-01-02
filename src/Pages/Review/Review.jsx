import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { recipe } = useLoaderData();
    const { _id } = recipe;

    return (
        <div>
            Review for {_id}
        </div>
    );
};

export default Review;