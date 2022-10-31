import { reviews } from "../../../data/reviews";

export default function handler(req, res) {
  const { reviewId } = req.query;
  const review = reviews.find((review) => review.id === parseInt(reviewId));
  res.status(200).json(review);
}
