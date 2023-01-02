import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../../Components/MyReviewCard";
import { Link } from "react-router-dom";

import { UserContext } from "../../Context/UserContext/Context";

const MyReviews = () => {
  const { user } = useContext(UserContext);
  const [MyReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user]);
    
 

  return (
    <div className="bg-mybg p-20">
      {MyReviews.length === 0 ? (
        <div className="text-center">
          <Link to="/recipes">
            <button className="btn btn-bgprimary font-custom1">
              Add your own review first!{" "}
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-mybg">
          {MyReviews.map((review) => (
            <MyReviewCard key={review._id} review={review} ></MyReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
