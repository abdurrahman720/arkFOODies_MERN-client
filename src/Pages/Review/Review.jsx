import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../Context/UserContext/Context";

const Review = () => {
  const { recipe } = useLoaderData();
  const { user } = useContext(UserContext);

  const { _id, title } = recipe;

  return (
    <div className="bg-mybg text-center">
      <h1 className="text-3xl font-custom1 text-myprimary">
        {" "}
        Review for {title}
      </h1>
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 p-5">
          <input
            defaultValue={user?.displayName}
            className="input input-bordered w-full "
            type="text"
            name="name"
            placeholder="Your name"
            id=""
            readOnly
          />
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

              <div className="p-5">
              <textarea className="textarea textarea-bordered w-full" name="review" placeholder="Write Your Review..." required/>
              </div>
                  
             
      </form>
    </div>
  );
};

export default Review;
