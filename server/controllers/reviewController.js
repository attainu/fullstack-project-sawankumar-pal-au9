import Review from '../model/reviewModel.js';

//Add review
export const addReview = async (req, res) => {
    const date = new Date();
    const month = date.toLocaleString('default', { month:'long' });

    try {
        const response = await Review.updateOne(
            {"asin": req.params.asin},
            {
                $push: {
                    reviews: {
                        name: req.body.name,
                        date: `${date.getDay()} ${month} ${date.getFullYear()}`,
                        rating: req.body.rating,
                        review: req.body.review
                    }
                }
            }
        )

        return res.status(200).send("Review Submitted Successfully");
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}


//Get reviews
export const getReviews = async (req, res) => {
    try {
        const data = await Review.findOne({"asin": req.params.asin});

        return res.status(200).send(data);
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}