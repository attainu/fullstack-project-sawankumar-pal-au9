import e from 'express';
import Products from '../model/productsModel.js';

//add a product
export const addNew = async(req,res) => {
    const { asin, category, product, type, price, reviews, title, thumbnail } = req.body;
    const newProduct = new Products({ asin, category, product, type, price, reviews, title, thumbnail });

    try {
       
        const response = await newProduct.save()
        res.status(201).send({"success":"Successfully Added the product"})
    }
    catch(error){
        res.status(409).send({"err":error.message})
    }
 
};

//add multiple products
export const addMultiple = async(req,res) => {
    const data = req.body.products
    
    try {       
        const response = await Products.create(data)
        res.status(201).send({"success":"Successfully placed the order"})
    }
    catch(error){
        res.status(409).send({"err":error.message})
    }
 
};


//get all products
export const getProducts = async(req,res) => {
    try{
        const result = await Products.find({})
        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }
    catch(error){
        res.status(404).send({"err":error.message})
    }
};

//get products by category or (product and type)
export const getProdsByCategory = async(req,res) => {
    try{
        const category = req.query.category;
        const product = req.query.product;
        const type = req.query.type;

        if(category && product && type) {
            const result = await Products.find({
                $and:[{category:category}, {product:product}, {type:type}]
            })

            return res.status(200).send(result)
        }else if(category && (product || type)) {

            return res.status(409).send({"err": "Some paramter is missing"});           
        }else if(category){
            const result = await Products.find({category:category});

            return res.status(200).send(result)
        }
    }
    catch(error){
        return res.status(404).send({"err":error.message})
    }
};