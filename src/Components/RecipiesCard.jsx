import React from "react";

const RecipiesCard = ({ recipe }) => {
  const { _id, title, image, description, cuisine, recipeType, rating } =
    recipe;
  return (
    <div className="card w-96 mx-auto bg-mybg shadow-2xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-myprimary">{rating}</div>
        </h2>
        <p> {description.slice(0, 150)} ...</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{cuisine}</div>
          <div className="badge badge-outline">{recipeType}</div>
              </div>
              <div className="card-actions justify-center mt-4">
        <button className="btn btn-outline btn-myprimary">Try It!</button>
      </div>
      </div>
      
    </div>
  );
};

export default RecipiesCard;
