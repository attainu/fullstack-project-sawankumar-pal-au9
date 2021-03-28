import React from 'react';
import axios from "axios";

const transaction_url = 'http://localhost:9800/transaction';
const razor_key = 'rzp_test_i3q74EogT2Neiu'
class PaymentProcess extends React.Component {
  constructor(props){
    super(props);
    this.state={
      amount:0,
      orderDetails:''
    }
  }
  componentDidMount (props) {
    const orderDetails = this.props.location.state.orderDetails
    // console.log(orderDetails)
    sessionStorage.setItem('orderDetails',JSON.stringify(orderDetails))
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
    document.body.appendChild(script);
    this.setState({
        orderDetails: orderDetails,
        amount:orderDetails.grandTotal
    },()=>this.openPayModal(this.state.amount))
}
openPayModal = (amt) => {
  let amount = amt * 100; 
  console.log(amount)
  let options = {
    "key": process.env.razor_key || razor_key,
    "amount": amount, // 2000 paise = INR 20, amount in paisa
    "currency":'INR',
    "name": 'Amazed.in',
    "description": "Thank you for choosing us!!!",
    'order_id':"",
    "handler": function(response) {
        // console.log(response);
        let values ={
            razorpay_signature : response.razorpay_signature,
            razorpay_order_id : response.razorpay_order_id,
            transactionid : response.razorpay_payment_id,
            transactionamount : amount,
          }
          axios.post(`${transaction_url}/payment`,values)
          .then(res=>{
            sessionStorage.setItem('transaction',JSON.stringify(res))            
            let redirect_url;
            if (typeof res.razorpay_payment_id == 'undefined' ||  res.razorpay_payment_id < 1) {
              redirect_url = '/thankyou';
            } else {
              alert("Transaction failed, please try again")
            }
            window.location.replace(redirect_url);
          })
          .catch(e=>console.log(e))
      },
    "prefill":{
        "name":this.state.orderDetails.userName,
        "email":this.state.orderDetails.userEmail,
        "contact":this.state.orderDetails.userPhone,
    },
    "notes": {
      "address": "xxx"
    },
    "theme": {
      "color": "#528ff0"
    }
  };
axios.post(`${transaction_url}/order`,{amount:amount})
.then(res=>{
  console.log(res)
    options.order_id = res.data.id;
    options.amount = res.data.amount;
    console.log(options)
    let rzp1 = new window.Razorpay(options);
    rzp1.open();
})
.then(res=>console.log(res))
.catch(e=>console.log(e))
}

  render(){
    return (
    <div>
    </div>
  );
}
  
}
export default PaymentProcess;