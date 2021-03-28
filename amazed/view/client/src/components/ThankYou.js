import React from 'react';
import './Thankyou.css';
const trans_url ='http://localhost:9800/transaction';
const order_url ='http://localhost:9800/orders'
class ThankYou extends React.Component {
    constructor(){
        super() 
        this.state={
            details:'',
            orderDetails:''
        }
    }
    componentDidMount(){
        const transInfo = JSON.parse(sessionStorage.getItem('transaction'))
        const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails'))
        this.setState({
            orderDetails:orderDetails
        })
        const id = transInfo.data.transaction._id
        fetch(`${trans_url}/${id}`,
            {method:'GET'})
            .then(res => res.json())
            .then(res=> this.setState({
                details:res
            },()=>{
                this.setState({
                    orderDetails:{
                        ...orderDetails,
                        transactionid:this.state.details.transactionid,
                        transactionamount:this.state.details.transactionamount
                    }
                },()=>{fetch(order_url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state.orderDetails)
        })
        .then(res=>console.log(res))
               })
            })
        )
    }            
      
    displayReference = (details) => {
        console.log(details)
        if(details){
            return(
                <div className="container">
                    <div className="content-box">
                        <div className="tick-mark">
                            <img src="/images/tickMark.png" alt="tickMark"></img>
                        </div>
                        <div className="success">
                            <h2>Payment Successful !!!!</h2>
                            <h3>Thank you for the purchase</h3>
                        </div>
                        <div className="payment-info">
                            <h4>Your refernce number <span className="payment-details">{details.transactionid}</span></h4>
                            <h4>Amount paid <span className="payment-details">{details.transactionamount}</span></h4>
                        </div>
                        <div className="payment-buttons">
                            <button className="btn btn-warning payment-buttons1"
                            onClick={()=>{this.props.history.push('/orders')}}
                            >My orders</button>

                            <button className="btn btn-warning payment-buttons2"
                            onClick={()=>{this.props.history.push('/cart')}}
                            >Products on cart</button>
                        </div>
                        
                    </div>

                </div>
            )

        }
       
    }
    render(){
        return(
            <div>
                {this.displayReference(this.state.details)}
            </div>
        )
    };
    
}

export default ThankYou;