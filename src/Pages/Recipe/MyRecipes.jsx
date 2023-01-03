import React, { useContext, useEffect, useState } from 'react';
import RecipiesCard from '../../Components/RecipiesCard';
import { UserContext } from '../../Context/UserContext/Context';

const MyRecipes = () => {

    const { user } = useContext(UserContext);
    const [myRecipes, setaMyRecipes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/recipes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
            setaMyRecipes(data)
        })
    },[user?.email])
    


    return (
        <div className="recipe py-10 bg-mybg">
        <h2 className="text-3xl text-center mb-10 font-custom1 text-myprimary">
          Taste the amaiton recipes from all over the world
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {myRecipes.map((recipe) => (
            <RecipiesCard key={recipe._id} recipe={recipe} user={user}></RecipiesCard>
          ))}
        </div>
        
      </div>
    );
};

export default MyRecipes;