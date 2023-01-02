import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext/Context";

const Review = () => {
  const { recipe } = useLoaderData();
  const { user } = useContext(UserContext);
  //   const [rating, setRating] = useState(null);

  const { _id, title, image } = recipe;
  const navigate = useNavigate();
  const handlePlaceReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName || "anonymus";
    const email = user?.email || "unregistered";
    const reviewText = form.review.value;
    const rating = form.rating.value;

    const review = {
      recipeID: _id,
        recipeTitle: title,
      recipeImage: image,
      reviewerName: name,
      reviewerEmail: email,
      reviewerPhoto: user?.photoURL,
      reviewText: reviewText,
      rating: rating,
    };
    console.log(review);
    //positng the review to server with fetch
    fetch("http://localhost:5001/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          alert("Review posted successfully");
          form.reset();
          navigate(`/recipe/${_id}`);
        }
      });
  };

  return (
    <div className="bg-mybg text-center ">
      <h1 className="text-3xl font-custom1 text-myprimary">
        {" "}
        Review for {title}
      </h1>
      <form onSubmit={handlePlaceReview} className="p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 p-5">
          <div className="flex">
            <p className="font-custom1 font-bold m-2">Name: </p>
            <input
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
              type="text"
              name="name"
              placeholder="Your name"
              id=""
              readOnly
            />
          </div>

          <div className="flex">
            <p className="font-custom1 font-bold m-2">Email: </p>
            <input
              defaultValue={user?.email}
              className="input input-bordered w-full "
              type="email"
              name="email"
              placeholder="Your email"
              id=""
              readOnly
            />
          </div>
        </div>

        <div className="p-5 flex flex-col items-start">
          <p className="font-custom1 font-bold my-2">Review: </p>
          <textarea
            className="textarea textarea-bordered w-full h-24"
            name="review"
            placeholder="Write Your Review..."
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
          value="Submit Your Review"
        />
      </form>
    </div>
  );
};

export default Review;
