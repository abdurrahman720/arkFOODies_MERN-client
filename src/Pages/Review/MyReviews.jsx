import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../../Components/MyReviewCard";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../Context/UserContext/Context";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("MyReviews");
  const { user, logOut } = useContext(UserContext);
    const [MyReviews, setMyReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("arkFOODies-token")}`
      }
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("arkFOODies-token");
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      }).catch(err=>console.log(err))
  }, [user?.email, logOut]);
    
  const handleEdit = (id) => {
        
    // fetch(`http://localhost:5001/unique-review/${id}`).then(res => res.json()).then(data => {
    //     setSelectedReview(data);
    //     console.log(selectedReview)
    // }) no need to fetch sperately by review id beacuse we already have reviews of user....
      const modalReview = MyReviews.find(r => r._id === id);
      setSelectedReview(modalReview);

  }
    
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating.value;
        console.log(reviewText, rating);

        const updatedReview = {
            reviewText: reviewText,
            rating: rating
        }

        fetch(`http://localhost:5001/review/${selectedReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success('Review updated successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                const updatedReviewToShow = MyReviews.find(r => r._id === selectedReview._id);
                updatedReviewToShow.reviewText = reviewText;
                updatedReviewToShow.rating = rating;
                const remainingReviews = MyReviews.filter(r => r._id !==selectedReview._id)
                setMyReviews([updatedReviewToShow,...remainingReviews]);
            }
        })

    }
    
  const handleDelete = (id) => {
      const confirm = window.confirm('Are you sure to delete this?');
      if (confirm) {
        fetch(`http://localhost:5001/reviews/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
              toast.success('Review deleted successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                const remaining = MyReviews.filter(r => r._id !== id);
                setMyReviews(remaining)
            }
      
        })
      }
}

  return (
    <div className="bg-mybg md:p-20">
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
            <MyReviewCard key={review._id} review={review} handleDelete={handleDelete} handleEdit={handleEdit} selectedReview={selectedReview} handleUpdate={handleUpdate}></MyReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
