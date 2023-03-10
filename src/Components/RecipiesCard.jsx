import React from "react";
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
const RecipiesCard = ({ recipe, user }) => {
  const { _id, title, image, description, cuisine, recipeType, rating } =
    recipe;
  return (
    <div className="card w-96 mx-auto bg-mybg shadow-2xl">
      <figure>
      <PhotoProvider>
      <PhotoView src={image}>
            <img src={image } alt="" />
      </PhotoView>
    </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-custom1">
          {title}
          <div className="badge badge-myprimary">{rating} <FaStar></FaStar> </div>
        </h2>
        <p className="font-custom2 text-xl"> {description.slice(0, 150)} ...</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline font-custom2">{cuisine}</div>
          <div className="badge badge-outline font-custom2">{recipeType}</div>
              </div>
              <div className="card-actions justify-center mt-4">
          {
            user?.email ? <Link to={`/recipe/${_id}`}> <button className="btn btn-outline btn-myprimary font-custom1">Details</button></Link> : <Link to={`/recipe/${_id}`}> <button className="btn btn-outline btn-myprimary font-custom1">Try It!</button></Link>
       }
      </div>
      </div>
      
    </div>
  );
};

export default RecipiesCard;
