import Razorpay from 'razorpay';
import crypto from 'crypto';
import Transaction from '../model/transctions.js';

import config from '../config.js';

export const newOrders = (req,res) => {
    let instance = new Razorpay({
        key_id: config.razorpay_auth.key_id,
        key_secret: config.razorpay_auth.key_secret
      })
      let options = {
          amount: req.body.amount?req.body.amount:100,  // amount in the smallest currency unit
          currency: "INR",
          receipt: "order_rcptid_11",
          payment_capture : 1
      };
      instance.orders.create(options, function(err, order) {
          if(err){
          return res.send(err)}
          else{
          return res.json(order)}
      });
}

export const newPayment = (req,res) => {
    const generated_signature = crypto.createHmac('sha256',config.razorpay_auth.key_secret)
    generated_signature.update(req.body.razorpay_order_id+"|"+ req.body.transactionid)
    if ( generated_signature.digest('hex') === req.body.razorpay_signature){
            const transaction = new Transaction({
              transactionid:req.body.transactionid,
              transactionamount:(req.body.transactionamount)/100,
          });
          transaction.save(function(err, savedtransac){
            if(err){
                console.log(err);
                return res.status(500).send("Some Problem Occured");
            }
            res.send({transaction: savedtransac});
        });
    }
    else{
      return res.send('failed');
    }
}

export const getPayment = async(req,res) =>{
    const Id = req.params.id
    
    try{
        
        const result = await Transaction.findById(Id)
        if(result.length <1) return res.status(404).send({"err":"No Data Found"});
        res.status(200).send(result)
    }

    catch(error){
        res.status(404).send({"err":error.message})
    }

};

