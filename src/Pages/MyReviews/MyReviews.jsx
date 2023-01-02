import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../../Components/MyReviewCard";
import { Link } from "react-router-dom";

import { UserContext } from "../../Context/UserContext/Context";

const MyReviews = () => {
  const { user } = useContext(UserContext);
    const [MyReviews, setMyReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email]);
    
  const handleEdit = (id) => {
        
    fetch(`http://localhost:5001/unique-review/${id}`).then(res => res.json()).then(data => {
        setSelectedReview(data);
        console.log(selectedReview)
    })
   
    // const { recipeTitle, reviewText, rating } = selectedReview;

}
    
  const handleDelete = (id) => {
      const confirm = window.confirm('Are you sure to delete this?');
      if (confirm) {
        fetch(`http://localhost:5001/reviews/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                
                const remaining = MyReviews.filter(r => r._id !== id);
                setMyReviews(remaining)
            }
      
        })
      }
}

  return (
    <div className="bg-mybg md:p-20">
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
            <MyReviewCard key={review._id} review={review} handleDelete={handleDelete} handleEdit={handleEdit} selectedReview={selectedReview} ></MyReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
