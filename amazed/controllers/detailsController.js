import details from '../model/detailsModel.js';
import Details from '../model/detailsModel.js';
import Review from '../model/reviewModel.js';

//Add product detail
export const addNew = async (req, res) => {
    const { asin, title, description,reviews, price, discount, images, dimensions, weight, manufacturer, model_number, sold_by, brand } = req.body;
    const features = req.body.features.split(',');
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });

    try {
        let data = {
            asin: asin,
            title: title,
            description: description,
            feature_bullets: features,
            reviews: reviews,
            price: price,
            total_images: images.length,
            images: images,
            product_information: {
                dimensions: dimensions,
                weight: weight,
                available_from: `${date.getDay()} ${month} ${date.getFullYear()}`,
                available_from_utc: date.toISOString(),
                manufacturer: manufacturer,
                model_number: model_number,
                sold_by: sold_by,
                fulfilled_by: "Amazed",
                brand: brand
            }
        }

        const asinPresent = await Details.findOne({"asin": asin});

        if(asinPresent) {
            return res.status(409).send({"err": "asin given by you is already present"})
        }

        const reviewData = {
            asin: asin
        }

        await Review.create(reviewData);

        const response = await Details.create(data);

        return res.status(200).send({"success":"Successfully Added the deatils"})
    }

    catch(error) {
        return res.status(409).send({"err":error.message});
    }
}

//Get detail
export const getDetail = async (req, res) => {
    try {
        const data = await details.findOne({"asin": req.params.asin});
        
        return res.status(200).send(data);
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}

//Delete detail
export const deleteDetail = async (req, res) => {
    try {
        const data = await Details.deleteOne({"asin": req.body.asin});

        return res.status(200).send({"success": "Deleted Successfully!"})
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}