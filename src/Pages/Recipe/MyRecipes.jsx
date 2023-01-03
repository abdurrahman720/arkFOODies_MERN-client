import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            {myRecipes.length === 0 ? (
                <div className="text-center">
                    <Link to="/addrecipe">
                        <button className="btn btn-bgprimary font-custom1">
                            Post your own recipe first!{" "}
                        </button>
                    </Link>
                </div>
            ) : <div className="my-bg">
                    <h2 className="text-3xl text-center mb-10 font-custom1 text-myprimary">
          Here are the recipes you have posted!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {myRecipes.map((recipe) => (
            <RecipiesCard key={recipe._id} recipe={recipe} user={user}></RecipiesCard>
          ))}
        </div>
            </div> }
        
      </div>
    );
};

export default MyRecipes;

