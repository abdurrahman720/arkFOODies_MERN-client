import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { recipe } = useLoaderData();
    const { _id, title } = recipe;

    return (
        <div className="bg-mybg text-center">
           <h1 className="text-3xl font-custom1 text-myprimary"> Review for {title}</h1>
        </div>
    );
};

export default Review;