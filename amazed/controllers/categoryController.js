import Category from '../model/categoryModel.js';
import { checkNumber } from '../utils/validator.js';

//Add category
export const addNew = async (req, res) => {

    if(!req.session.user && req.session.user.role !=='Admin') {
        return res.status(400).send('No Session Found! Please Login Again')
    }
    try {
        const IsValid = checkNumber(req.body.categoryNumber);
        if(!IsValid){
            res.send("Invalid category number")
        }

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

        return res.status(201).send("Category Added Successfully!")
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