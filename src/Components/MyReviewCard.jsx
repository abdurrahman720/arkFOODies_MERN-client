import React, { useEffect, useState } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyReviewCard = ({ review, handleDelete, selectedReview, handleEdit }) => {
    const { _id, recipeTitle, recipeImage, reviewText, rating } = review;
    

    
    
  
    
  return (
    <>
                  <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg font-custom1">
            Update Review of {selectedReview.recipeTitle}
          </h3>
                  <textarea defaultValue={selectedReview.reviewText} className="textarea textarea-bordered w-full" type="text" name="reviewText" placeholder="update" id="" />
                  
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
          </div>
            
    
          
          <div className="border-2 bg-myprimary text-mybg p-2">

            <div className="flex justify-between">
            <div className="flex items-center font-custom1"> 
                <img className="w-24  rounded" src={recipeImage} alt="" />
                <p className="mx-2">{recipeTitle}</p>
                </div>
                <div className="flex items-center justify-between">
                <label htmlFor="my-modal-6" onClick={() => handleEdit(_id)} className="btn"><FaEdit className='mx-3'></FaEdit></label>
                    
                    <button onClick={() => handleDelete(_id)} className='btn'>
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
        </>
  );
};

export default MyReviewCard;
