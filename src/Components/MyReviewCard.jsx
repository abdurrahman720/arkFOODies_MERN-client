import React, { useEffect, useState } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyReviewCard = ({ review, handleDelete, selectedReview, handleEdit, handleUpdate }) => {
    const { _id, recipeTitle, recipeImage, reviewText, rating } = review;
    
    

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg font-custom1">
            Update Review of {selectedReview.recipeTitle}
          </h3>
                  <form onSubmit={handleUpdate}>
                  <textarea
            defaultValue={selectedReview.reviewText}
            className="textarea textarea-bordered w-full"
            type="text"
            name="reviewText"
            placeholder="update"
            id=""
          />
          <p className="font-custom1 font-bold my-2">
            Rating:{" "}
            <select
              name="rating"
              id=""
            >
              <option defaultValue={selectedReview.rating}>
                {selectedReview.rating}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
            </select>
                      </p>
                      <div className="modal-action">
            <label  htmlFor="my-modal-6" className="">
            <input
          className="btn btn-outline btn-myprimary w-full"
          type="submit"
          value="Submit Your Review"
        />
            </label>
          </div>
          </form>
                  <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn" >
                          Close
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
            <label
              htmlFor="my-modal-6"
              onClick={() => handleEdit(_id)}
              className="btn"
            >
              <FaEdit className="mx-3"></FaEdit>
            </label>

            <button onClick={() => handleDelete(_id)} className="btn">
              <MdDelete></MdDelete>
            </button>
          </div>
        </div>
        <div className="bg-myprimary p-5">
          <div className="flex items-center">
            <p>Rating: {rating} </p>
            <FaStar></FaStar>
          </div>
          <p className="text-mybg">{reviewText}</p>
        </div>
      </div>
    </>
  );
};

export default MyReviewCard;
