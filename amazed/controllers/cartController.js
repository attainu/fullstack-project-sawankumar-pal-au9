import Cart from '../model/cartModel.js';
import { checkEmail } from '../utils/validator.js';
import moment from 'moment';

//Add to Cart
export const ItemToCart = async(req,res) => {
    let cur_date = moment(new Date(Date.now())).format('YYYY-MM-DD HH:mm:ss');

    if(!req.session.user && req.session.user.role !=='User') {
        return res.status(400).send('No Session Found! Please Login Again')
    }
    const IsValid = checkEmail(req.body.userEmail);
    if(!IsValid){
        res.send("Invalid Email")
    }
    try{
        let data = {
            date : req.body.date ? req.body.date : cur_date,
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

    if(!req.session.user && req.session.user.role !=='User') {
        return res.status(400).send('No Session Found! Please Login Again')
    }

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

    if(!req.session.user && req.session.user.role !=='User') {
        return res.status(400).send('No Session Found! Please Login Again')
    }

    const IsValid = checkEmail(req.query.email);
    if(!IsValid){
        res.send("Invalid Email")
    }

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

    if(!req.session.user && req.session.user.role !=='User') {
        return res.status(400).send('No Session Found! Please Login Again')
    }

    try {
        const _id = req.params.id
        const deleted = await Cart.findByIdAndDelete(_id);

        res.status(204).send({"success":"successfully deleted"});
    }

    catch(error) {
        res.status(404).send({"err":error.message})
    }
};