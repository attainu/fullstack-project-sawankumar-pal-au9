
import Cart from '../model/cartModel.js';

//Add to Cart
export const ItemToCart = async(req,res) => {
    try{
        let data = {
            date : req.body.date,
            userName : req.body.userName,
            userEmail : req.body.userEmail,
            product : {
                asin : req.body.asin,
                productTitle : req.body.productTitle,
                beforePrice : req.body.beforePrice,
                saving : req.body.savingAmount,
                currentPrice : req.body.currentPrice,
                quantity : req.body.quantity,
                totalPrice : req.body.totalPrice,
                paymentMode : req.body.payment
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
        res.status(200).send({"success":result})
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }

};

//get cart items by user name
export const ItemByName = async(req,res) => {
    try{
        const name = req.params.name
        const result = await Cart.find({userName:name}).sort({ date: -1})

        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send({"success":result})
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