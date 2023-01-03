import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext/Context";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddRecipe = () => {
  useTitle("Add Recipe");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handlePlaceRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.value;
    const cuisine = form.cuisine.value;
    const recipeType = form.recipeType.value;
    const rating = form.rating.value;

    const newRecipe = {
      recipeProvider: user?.email,
      title,
      description,
      image,
      cuisine,
      recipeType,
      rating,
    };

    // console.log(newRecipe)
    fetch(`https://ark-foodies-server.vercel.app/recipe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          toast.success("Recipe has been added successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/myrecipes");
        }
      });
  };

  return (
    <div className="bg-mybg text-center ">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="text-3xl font-custom1 text-myprimary">
        {" "}
        Add your recipe and let the people taste your cuisine!
      </h1>
      <form onSubmit={handlePlaceRecipe} className="p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 p-5">
          <div className="flex">
            <p className="font-custom1 font-bold m-2">Food: </p>
            <input
              className="input input-bordered w-full "
              type="text"
              name="title"
              placeholder="Hilsha Fish Curry"
              id=""
              required
            />
          </div>

          <div className="flex">
            <p className="font-custom1 font-bold m-2">Photo: </p>
            <input
              className="input input-bordered w-full "
              type="text"
              name="image"
              placeholder="https://www.example.com/hilsha-fish-curry.jpeg"
              id=""
              required
            />
          </div>
          <div className="flex">
            <p className="font-custom1 font-bold m-2">Cuisine: </p>
            <input
              className="input input-bordered w-full "
              type="text"
              name="cuisine"
              placeholder="Bangladeshi,Spanish..."
              id=""
              required
            />
          </div>
          <div className="flex">
            <p className="font-custom1 font-bold m-2">Recipe Type: </p>
            <input
              className="input input-bordered w-full "
              type="text"
              name="recipeType"
              placeholder="Main Course,.."
              id=""
              required
            />
          </div>
        </div>

        <div className="p-5 flex flex-col items-start">
          <p className="font-custom1 font-bold my-2">Recipe: </p>
          <textarea
            className="textarea textarea-bordered w-full h-24"
            name="description"
            placeholder="Hilsha Fish Curry is a traditional Bangladeshi dish that is ..."
            required
          />
          <div>
            <p className="font-custom1 font-bold my-2">
              Rating:{" "}
              <select
                // onChange={(e) => setRating(e.target.value)}
                name="rating"
                id=""
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5" selected>
                  4.5
                </option>
                <option value="5">5</option>
              </select>
            </p>
          </div>
        </div>

        <input
          className="btn btn-outline btn-myprimary w-full"
          type="submit"
          value="Submit Your Recipe"
        />
      </form>
    </div>
  );
};

export default AddRecipe;
