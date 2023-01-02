import React, { useState } from 'react';
import { FaEdit, FaStar } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MyReviewCard = ({ review, handleDelete }) => {
    
    const { _id, recipeTitle, recipeImage, reviewText, rating } = showReview;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5001/reviews/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                const remaining = showReview.filter(r => r._id !== id);
                
            }
            console.log(data)
        })
    }
    
    return (
        <div className="mb-5 border-2 bg-myprimary text-mybg p-2">
            <div className="flex justify-between">
            <div className="flex items-center font-custom1"> 
                <img className="w-24  rounded" src={recipeImage} alt="" />
                <p className="mx-2">{recipeTitle}</p>
                </div>
                <div className="flex items-center justify-between">
                    <FaEdit className='mx-3'></FaEdit>
                    <button onClick={() => handleDelete(_id)}>
                        <MdDelete></MdDelete>
                    </button>
                </div>
            </div>
            <div className="bg-myprimary p-5">
            <div className="flex items-center">
                    <p>Rating: {rating} </p>
                    <FaStar></FaStar>
                </div>
                <p className="text-mybg">{ reviewText}</p>
            </div>
        </div>
    );
};

export default MyReviewCard;