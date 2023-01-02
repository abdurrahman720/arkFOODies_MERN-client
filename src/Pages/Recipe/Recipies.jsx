import React, { useEffect, useState } from "react";
import RecipiesCard from "../../Components/RecipiesCard";

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/recipes`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);
  return (
    <div>
      <div className="recipe py-10 bg-mybg">
        <h2 className="text-3xl text-center mb-10 font-custom1 text-myprimary">
          Taste the amaiton recipes from all over the world
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipiesCard key={recipe._id} recipe={recipe}></RecipiesCard>
          ))}
        </div>
        <div className="card-actions justify-center mt-4">
          {/* <Link to="/recipes">
            <button className="btn btn-outline btn-myprimary font-custom1">
              See All
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Recipies;
