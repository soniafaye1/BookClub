import { useState } from "react";

function ReviewComponent() {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");

  const fetchReviews = async () => {
    const reviews = await fetch("/api/reviews");
    const data = await reviews.json();
    setReviews(data);
  };

  const submitReview = async () => {
    const reviews = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ review }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await reviews.json();
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />

      <button onClick={submitReview}>Submit Review</button>

      <button onClick={fetchReviews}>Reviews</button>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <div>{review.title}</div>
            <div>{review.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewComponent;
