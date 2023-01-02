import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaRegSadCry } from "react-icons/fa";
import Reviews from "../../Components/Reviews";
const Recipe = () => {
  const { recipe } = useLoaderData();
//   console.log(recipe);
  const { title, image, rating, description, cuisine, recipeType, _id } =
      recipe;
    
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5001/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
        
    },[_id])
    
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
            <span className="font-sans text-myprimary text-xl">
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
              <div className="mb-5 text-center">
                  <Link to={`/review/${_id}`}><button className="btn btn-bgprimary font-custom1">Add your own review! </button></Link>
              </div>
              {
                  reviews?.length===0?<div className="flex justify-center items-center"> <p className="text-center text-myprimary">No reviews Yet for this recipe!  </p><FaRegSadCry/></div> : <div className="p-5">
                  {
                      reviews.map(review=><Reviews key={review._id} review={review}></Reviews>)
                  }
              </div>
              }
      </div>
    </div>
  );
};

export default Recipe;
