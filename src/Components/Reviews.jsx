import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ review }) => {
    const { reviewerPhoto,reviewerName, reviewerEmail, reviewText, rating } = review;
    
    return (
        <div className="mb-5 border-2 bg-myprimary text-mybg p-2">
            <div className="flex justify-between">
            <div className="flex items-center font-custom1"> 
                <img className="w-10 rounded" src={reviewerPhoto} alt="" />
                <p>{reviewerName }</p>
                </div>
                <div className="flex items-center">
                    <p>{rating} </p>
                    <FaStar></FaStar>
                </div>
            </div>
            <div className="bg-myprimary p-5">
                <p className="text-mybg">{ reviewText}</p>
            </div>
        </div>
    );
};

export default Reviews;