import express from 'express';
import { addReview, getReviews } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

reviewRouter.get('/:asin', getReviews);
reviewRouter.put('/add/:asin', addReview);

export default reviewRouter;