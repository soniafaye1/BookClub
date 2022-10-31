import { reviews } from "../../../data/reviews";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(reviews);
  } else if (req.method === "POST") {
    const reviewContent = req.body.review;
    const newReview = {
      id: Date.now(),
      content: reviewContent,
    };

    reviews.push(newReview);
    res.status(201).json(newReview);
  }
}
