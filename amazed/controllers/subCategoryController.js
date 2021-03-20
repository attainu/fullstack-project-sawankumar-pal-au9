import subCategory from '../model/subCategoryModel.js';

// Get subcategories by categoryNumber
export const getSubCategories = async (req, res) => {
    try {
        const data = await subCategory.find({categoryNumber: req.params.categoryNumber});

        return res.status(200).send(data);
    }
    catch(error) {
        return res.status(409).send({"err": error.message});
    }
}