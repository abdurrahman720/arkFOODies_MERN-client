import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const Recipe = () => {
  const { recipe } = useLoaderData();
  console.log(recipe);
  const { title, image, rating, description, cuisine, recipeType, _id } =
    recipe;
  // const [recipe, setRecipe] = useState({});

  return (
    <div className="bg-mybg">
      <div className="card w-full mx-auto bg-mybg">
        <figure>
          <img className="w-3/4" src={image} alt={title} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center text-3xl font-custom1">
            {title}
            <div className="badge badge-myprimary">
              {rating} <FaStar></FaStar>{" "}
            </div>
          </h2>
          <p className="font-custom2 font-bold text-2xl">
            Recipe Details:{" "}
            <span className="font-custom2 text-myprimary text-xl">
              {" "}
              {description}
            </span>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline  text-myprimary font-custom2">
              {cuisine}
            </div>
            <div className="badge badge-outline text-myprimary font-custom2">
              {recipeType}
            </div>
          </div>
          {/* <div className="card-actions justify-center mt-4">
       <Link to={`/recipe/${_id}`}> <button className="btn btn-outline btn-myprimary font-custom1">Try It!</button></Link>
      </div> */}
        </div>
      </div>
      <hr />
      <div className="">
        <h2 className="card-title justify-center text-3xl font-custom1 py-10">
          Let's Check What Are Said by the Community about this Cuisine!!
              </h2>
              <div className="b">
                  <p>Add your own review: </p>
              </div>
              <div className="border-2 border-spacing-5">
                  <p>Review Section </p>
              </div>
      </div>
    </div>
  );
};

export default Recipe;
