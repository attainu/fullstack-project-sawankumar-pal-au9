import Coupons from '../model/couponsModel.js';
import moment from 'moment';

//Add new Coupon
export const AddNewCoupon = async(req, res) => {
    let cur_date = moment(new Date(Date.now())).format('YYYY-MM-DD HH:mm:ss');
    let exp_date = moment(new Date(req.body.expiryDate)).format('YYYY-MM-DD HH:mm:ss');
    let coupon = {
        couponName:req.body.couponName,
        couponCode:req.body.couponCode,    
        createdDate:cur_date,
        category:req.body.category,
        discount: req.body.discount,
        expiryDate:exp_date
    }

    try {
        const response = await Coupons.create(coupon)
        res.status(201).send({"success":"Successfully added the coupon"})
    }

    catch(error){
        res.status(409).send({"err":error.message})
    }
};

//list all the Coupons
export const listCoupons = async(req, res) => {

    try {
        const response = await Coupons.find({})
        res.status(200).send(response)
    }

    catch(error){
        res.status(409).send({"err":error.message})
    }

}

// get coupon by category
export const listCouponsByCat = async(req, res) => {
    const query = req.query.category
    try {
        const response = await Coupons.find({category:query})
        res.status(200).send(response)
    }

    catch(error){
        res.status(409).send({"err":error.message})
    }

}

// get coupon details
export const couponById = async(req, res) => {
    const id = req.params.id
    try {
        const response = await Coupons.findById(id)
        res.status(200).send(response)
    }

    catch(error){
        res.status(409).send({"err":error.message})
    }

}

// delete coupon 
export const deleteItem = async(req, res) => {
    const id = req.params.id
    try {
        const response = await Coupons.findByIdAndDelete(id);
        res.status(204).send({"success":"successfully deleted"})
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }

}