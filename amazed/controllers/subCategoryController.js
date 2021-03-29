import subCategory from '../model/subCategoryModel.js';
import { checkNumber } from '../utils/validator.js';

// Get subcategories by categoryNumber
export const getSubCategories = async (req, res) => {
    try {

        // if(!req.session.user) {
        //     return res.status(400).send('No Session Found! Please Login Again')
        // }

        const IsValid = checkNumber(req.params.categoryNumber);
        if(!IsValid){
            res.send("Invalid category")
        }

        const data = await subCategory.find({categoryNumber: req.params.categoryNumber});

        return res.status(200).send(data);
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}

// Get all subcategories
export const allSubcategories = async (req, res) => {
    try {

        // if(!req.session.user) {
        //     return res.status(400).send('No Session Found! Please Login Again')
        // }

        const data = await subCategory.find({});

        return res.status(200).send(data);
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}