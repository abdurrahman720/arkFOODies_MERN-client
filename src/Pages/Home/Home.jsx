import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipiesCard from "../../Components/RecipiesCard";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Community from "./Community";
import Statics from "./Statics";

const Home = () => {
  useTitle("Home");
  const [recipeLimit, setRecipeLimit] = useState([]);

  useEffect(() => {
    fetch(`https://ark-foodies-server.vercel.app/recipeslimit`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipeLimit(data);
      });
  }, []);

  return (
    <div className="">
      {/* <hr className="bg-myprimary" /> */}
      <Banner></Banner>
      <div className="recipe py-10 bg-mybg">
        <h2 className="text-3xl text-center mb-10 font-custom1 text-myprimary">
          Check the top rated recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {recipeLimit.map((recipe) => (
            <RecipiesCard key={recipe._id} recipe={recipe}></RecipiesCard>
          ))}
        </div>
        <div className="card-actions justify-center m-4">
          <Link to="/recipes">
            <button className="btn btn-outline btn-myprimary font-custom1">
              See All
            </button>
          </Link>
        </div>
        {/* Community section */}
        <Community></Community>
        {/* Statics section */}
        <Statics></Statics>
      </div>
    </div>
  );
};

export default Home;
