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
        res.status(200).send({"success":result})
    }
    catch(error){
        res.status(404).send({"err":error.message})
    }
};

//get products by name
export const getProductsByName = async(req,res) => {
    try{
        const product = req.params.product
        // console.log(product)
        const result = await Products.find({product:product})
        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send({"success":result})
    }
    catch(error){
        res.status(404).send({"err":error.message})
    }
};
//get products by Id
export const getProdsById = async(req,res) => {
    //  console.log("test1 ")
    try{
        const Id = req.params.id
        console.log(Id)
        const result = await Products.findById(Id)
        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send({"success":result})
    }
    catch(error){
        res.status(404).send({"err":error.message})
    }
};

