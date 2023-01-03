import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaStar, FaRegSadCry } from "react-icons/fa";
import Reviews from "../../Components/Reviews";
import { UserContext } from "../../Context/UserContext/Context";
const Recipe = () => {
  const { recipe } = useLoaderData();
  const navigate = useNavigate()
    // console.log(recipe);
  const {
    recipeProvider,
    title,
    image,
    rating,
    description,
    cuisine,
    recipeType,
    _id,
  } = recipe;
  const { user } = useContext(UserContext);
 
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  // const [recipe, setRecipe] = useState({});

  const handleDeleteRecipe = (id) => {
    const confirm = window.confirm("Are you sure to delete this?");
    if (confirm) {
      fetch(`http://localhost:5001/recipe/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            navigate('/myrecipes')
            alert("Deleted");
          }
        });
    }
  };

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
        <div className="mb-5 text-center">
          {recipeProvider === user?.email & user?.email !== undefined  ? (
            <div className="flex flex-col md:flex-row justify-center">
        
              <button
                onClick={() => handleDeleteRecipe(_id)}
                className="btn btn-bgprimary font-custom1 mx-2"
              >
                Delete{" "}
              </button>
              <button className="btn btn-bgprimary font-custom1 mx-2">
                Edit{" "}
              </button>
            </div> 
          ) : <div>{' '}</div>}
        </div>
        <h2 className="card-title justify-center text-3xl font-custom1 py-10 px-2">
          Let's Check What Are Said by the Community about this Cuisine!!
        </h2>
        <div className="mb-5 text-center">
          {recipeProvider !== user?.email || user?.email===undefined ? (
            <Link to={`/review/${_id}`}>
              <button className="btn btn-bgprimary font-custom1">
                Add your own review!{" "}
              </button>
            </Link>
          ) : <div>{" " }</div>}
        </div>
        {reviews?.length === 0 ? (
          <div className="flex justify-center items-center">
            {" "}
            <p className="text-center text-myprimary">
              No reviews Yet for this recipe!{" "}
            </p>
            <FaRegSadCry />
          </div>
        ) : (
          <div className="p-5">
            {reviews.map((review) => (
              <Reviews key={review._id} review={review}></Reviews>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
