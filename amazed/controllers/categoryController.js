import Category from '../model/categoryModel.js';

//Add category
export const addNew = async (req, res) => {
    try {
        const isCategory = await Category.findOne({"category": req.body.category});
        if(isCategory) {
            return res.status(409).send({"err": "This category already exist"})
        }

        let data = {
            category: req.body.category,
            images: req.body.images,
            categoryNumber: req.body.categoryNumber
        }

        const response = await Category.create(data);

        return res.status(200).send("Category Added Successfully!")
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}


//Get all categories
export const getCategories = async (req, res) => {
    try {
        const data = await Category.find({});
        return res.status(200).send(data);
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}