import express from "express";
import MoviesController from "./movies.controller.js";
import ReviewsController from './reviews.controller.js';

router.route("/id/:id").get(MoviesController.apiGetMovieById)
router.route("/ratings").get(MoviesController.apiGetRatings)

const router = express.Router(); // get access to express router
router.route("/").get(MoviesController.apiGetMovies);
router 
.route("/review") 
.post(ReviewsController.apiPostReview) 
.put(ReviewsController.apiUpdateReview) 
.delete(ReviewsController.apiDeleteReview);
export default router;
