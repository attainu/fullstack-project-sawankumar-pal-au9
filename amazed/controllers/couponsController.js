import Coupons from '../model/couponsModel.js';
import moment from 'moment';

//Add new Coupon
export const AddNewCoupon = async(req, res) => {
    try {
        let date = new Date();
        let cur_date = `${date.getDate()} ${date.toLocaleString('default', {month:'long'})} ${date.getFullYear()}`;

        let couponData = {
            couponName: req.body.couponName,
            couponCode: req.body.couponCode,    
            createdDate: cur_date,
            category: req.body.category,
            categoryNumber: req.body.categoryNumber,
            discountPercent: req.body.discountPercent,
            expiryDate: req.body.expiryDate
        }
        const response = await Coupons.create(couponData)
        res.status(201).send({"success":"Successfully added the coupon"})
    }

    catch(error){
        res.status(409).send({"err":error.message})
    }
};

//list all the Coupons
export const listCoupons = async(req, res) => {

    try {
        const response = await Coupons.find({}).sort({createdDate: -1})
        res.status(200).send(response)
    }

    catch(error){
        res.status(409).send({"err":error.message})
    }

}

// get coupon by categoryNumber
export const listCouponsByCat = async(req, res) => {
    if(req.query.category) {
        const query = req.query.category	
        try {	
            const response = await Coupons.find({category:query})	
            res.status(200).send(response)	
        }	
        catch(error){	
            res.status(409).send({"err":error.message})	
        }
    }else {
        const query = req.query.categoryNumber
        try {
            const response = await Coupons.find({categoryNumber:query})
            res.status(200).send(response)
        }

        catch(error){
            res.status(409).send({"err":error.message})
        }
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