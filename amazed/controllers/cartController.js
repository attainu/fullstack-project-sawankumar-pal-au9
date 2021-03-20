import Cart from '../model/cartModel.js';

//Add to Cart
export const ItemToCart = async(req,res) => {
    const date = new Date();
    const month = date.toLocaleString('default', { month:'long' });
    try{
        let data = {
            date : req.body.date ? req.body.date : `${date.getDay()} ${month} ${date.getFullYear()}`,
            userName : req.body.userName,
            userEmail : req.body.userEmail,
            asin : req.body.product.asin,
            title : req.body.product.title,
            mainImage: req.body.product.main_image,
            rating: req.body.product.reviews.rating,            
            price:{
                before_price: req.body.product.price.before_price,
                savings_amount: req.body.product.price.savings_amount,
                current_price: req.body.product.price.current_price
            }                
        }

        const response = await Cart.create(data)
            res.status(201).send({"success":"Successfully added to the cart"})
        }

        catch(error){
            res.status(409).send({"err":error.message})
        }
};

// get cart by id
export const ItemById = async(req,res) => {
    try{
        const _id = req.params.id
        console.log(_id)
        const result = await Cart.findById(_id)
        
        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }

};

//get cart items by user name
export const ItemByEmail = async(req,res) => {
    try{
        const email = req.query.email
        const result = await Cart.find({userEmail:email}).sort({ date: -1})

        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }
};

//delete item on cart
export const deleteItem = async (req, res) => {

    try {
        const _id = req.params.id
        const deleted = await Cart.findByIdAndDelete(_id);

        res.status(204).send({"success":"successfully deleted"});
    }

    catch(error) {
        res.status(404).send({"err":error.message})
    }
};