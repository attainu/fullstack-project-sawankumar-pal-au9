import Orders from '../model/ordersModel.js';
import { checkEmail, checkNumber, checkString } from '../utils/validator.js';

//Place order
export const newOrder = async(req,res) => {
    
    try{

        // if(!req.session.user && req.session.user.role !== 'User') {
        //     return res.status(400).send('No Session Found! Please Login Again')
        // }

        // if((req.session.user.name !== req.body.userName) || (req.session.user.email !== req.body.userEmail)) {
        //     return res.status(400).send('No Session Found! Please Login Again')
        // }

        // const IsValidUserEmail = checkEmail(req.body.userEmail);
        // if(!IsValidUserEmail){
        //     res.send("Invalid Email")
        // }

        // const IsValidEmail = checkEmail(req.body.email);
        // if(!IsValidEmail){
        //     res.send("Invalid Email")
        // }

        // const IsValidFName = checkString(req.body.fname);
        // if(!IsValidFName){
        //     res.send("Invalid first name")
        // }

        // const IsValidLName = checkString(req.body.lname);
        // if(!IsValidLName){
        //     res.send("Invalid last name")
        // }

        // const IsValidPhone = checkNumber(req.body.phone);
        // if(!IsValidPhone){
        //     res.send("Invalid phone number")
        // }
        console.log("payment", req.body.payment)
        let data = {
            date : req.body.date,
            userName : req.body.userName,
            userEmail : req.body.userEmail,
            orderDetails : {
                firstName : req.body.fname,
                lastName : req.body.lname,
                houseAddress : req.body.houseadd ? req.body.houseadd: '',
                apartment : req.body.apartment ? req.body.apartment: '',
                city : req.body.city,
                state : req.body.state,
                country : req.body.country,
                postCode : req.body.postCode,
                phone : req.body.phone,
                email : req.body.email,
                paymentMode : req.body.payment,
                transactionId:req.body.transactionid,
                transactionAmount:req.body.transactionamount
            },
            productDetails : {
                asin : req.body.asin,
                productTitle : req.body.productTitle,
                beforePrice : req.body.beforePrice,
                saving : req.body.savingAmount,
                currentPrice : req.body.currentPrice,
                quantity : req.body.quantity,
                totalPrice : req.body.totalPrice,
                couponDiscount: req.body.couponDiscount,
                grandTotal: req.body.grandTotal
                
            },
            orderStatus : req.body.status,
            delivered : req.body.delivered,
            coupon:{
                code : req.body.code,
                discount : req.body.discount,
                expiry : req.body.expiry
            }
        }

        const response = await Orders.create(data)
            res.status(201).send({"success":"Successfully placed the order"})
        }

        catch(error){
            res.status(409).send({"err":error.message})
        }
};

//get All orders
export const allOrders = async(req,res) => {
    try{
        if(!req.session.user && req.session.user.role !=='Admin') {
            return res.status(400).send('No Session Found! Please Login Again')
        }

        const result = await Orders.find({}).sort({date: -1})

        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }
};

// get order by id
export const ordersById = async(req,res) => {
    try{
        
        if(!req.session.user) {
            return res.status(400).send('No Session Found! Please Login Again')
        }

        const result = await Orders.findById(req.params.id)
        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }

};

//get orders by userEmail
export const ordersByEmail = async(req,res) => {
    try{

        // if(!req.session.user) {
        //     return res.status(400).send('No Session Found! Please Login Again')
        // }

        const userEmail = req.query.userEmail
        const result = await Orders.find({userEmail:userEmail}).sort({ date: -1})

        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }

    catch(error){
        res.status(200).send({"err":error.message})
    }
};

//update order
export const updateOrder = async (req, res) => {
    const user = req.body;
    
    try {

        if(!req.session.user) {
            return res.status(400).send('No Session Found! Please Login Again')
        }

        const _id = req.params.id
        await Orders.findByIdAndUpdate(_id, {
            "delivered":req.body.delivered, 
            "orderStatus":req.body.orderStatus
        });

        return res.status(200).send({"success":"Order is updated successfully"});
    }

    catch (error) {
        return res.status(404).send({"err":error.message})
    }
};

//delete an order
export const deleteOrder = async (req, res) => {

    try {

        if(!req.session.user) {
            return res.status(400).send('No Session Found! Please Login Again')
        }

        const _id = req.params.id
        const deleted = await Orders.findByIdAndDelete(_id);

        res.status(204).send({"success":"successfully deleted"});
    }

    catch(error) {
        res.status(404).send({"err":error.message})
    }
};