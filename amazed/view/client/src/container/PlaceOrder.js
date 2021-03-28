import React from 'react';	
import { connect } from 'react-redux';	
import PropTypes from 'prop-types';	
import { placeOrder, getAllCoupons, updateCoupon } from '../actions/actionfile';	
import PlaceOrderDisplay from '../components/PlaceOrderDisplay';	
import NotSignedIn from '../components/SignInLogin/NotSignedIn';	
let tdate = new Date();	
class PlaceOrder extends React.Component {	
    constructor() {	
        super();	
        this.state = {	
            userName: '',	
            userEmail: '',	
            fname: '',	
            lname: '',	
            houseadd: '',	
            apartment: '',	
            city: '',	
            state: '',	
            country: 'India',	
            postCode: '',	
            phone: '',	
            email: '',	
            asin: '',	
            productTitle: '',	
            beforePrice: '',	
            savingAmount: '',	
            currentPrice: 1,	
            quantity: 1,	
            totalPrice: 1,	
            discountAmount:1,	
            payment: 'COD',	
            status: 'Order Placed',	
            delivered: false,	
            success: '',	
            couponDiscount: '',	
            grandTotal: '',	
            errors: {	
                fname: '',	
                lname: '',	
                houseadd: '',	
                apartment: '',	
                city: '',	
                state: '',	
                postCode: '',	
                phone: '',	
                email: '',	
                payment: 'COD',	
                status: 'Order Placed',	
                emptyFields: ''	
            }	
        }	
    }	
    componentDidMount() {	
        let productData = JSON.parse(sessionStorage.getItem('productData'))	
        let userName = sessionStorage.getItem('userName')	
        let userEmail = sessionStorage.getItem('loggedInEmail')	
        	
        this.setState({		
            ...this.state,		
            userName: userName,		
            userEmail: userEmail,		
            asin: productData.asin,		
            productTitle: productData.title,		
            beforePrice: productData.price.before_price,		
            savingAmount: productData.price.savings_amount,		
            currentPrice: productData.price.current_price,		
            totalPrice: (productData.price.current_price) * (this.state.quantity)	
        }, () => console.log(this.state))	
        	
        this.props.dispatch(getAllCoupons());	
    }	
    blurHandler = (name, value) => {	
        let errors = this.state.errors	
        let isnum = /^\d+$/.test(value);	
        switch (name) {	
            case 'fname':	
            case 'lname':	
                if (value === '') {	
                    errors[name] = 'Name can not be blank'	
                }	
                else if (value.length < 3) {	
                    errors[name] = 'Name should be more than three letters'	
                }	
                else if (isnum) {	
                    errors[name] = 'Name should not be a number'	
                }	
                else {	
                    errors[name] = ''	
                }	
                break;	
            case 'houseadd':	
            case 'city':	
            case 'state':	
                if (value === '') {	
                    errors[name] = 'Field can not be blank'	
                }	
                else {	
                    errors[name] = ''	
                }	
                break;	
            case 'postCode':	
            case 'phone':	
                if (value === '') {	
                    errors[name] = 'Field can not be blank'	
                }	
                else if (value.length < 5) {	
                    errors[name] = 'Field should contain more than 5 digits'	
                }	
                else if (!isnum) {	
                    errors[name] = 'Should contain only number'	
                }	
                else {	
                    errors[name] = ''	
                }	
                break;	
            case 'email':	
                let lastAtpos = value.lastIndexOf('@')	
                let lastDotpos = value.lastIndexOf('.')	
                if (value === '') {	
                    errors[name] = 'Field can not be blank'	
                }	
                else if (!(lastAtpos < lastDotpos && lastAtpos > 0 && value.indexOf('@@') === -1 && lastDotpos > 2 && (value.length - lastDotpos) > 2)) {	
                    errors[name] = 'Email is not valid'	
                }	
                else {	
                    errors[name] = ''	
                }	
                break;	
            default:	
                break;	
        }	
        this.setState({	
            errors, [name]: value	
        })	
    }	
    paymentProcess = (orderDetails) => {	
        console.log(orderDetails)	
            this.props.history.push({	
                pathname:'/payment',	
                state: {orderDetails:orderDetails}	
            })	
    }	
    changeHandler = (name, value) => {	
        this.blurHandler(name, value) 	
        this.setState({	
            [name]: value,	
        })	
    }	
    quantitychangeHandler = (value) => {	
        let grandTotal = (this.state.currentPrice * value) - this.state.couponDiscount;	
        this.setState({	
            quantity: value,	
            grandTotal: grandTotal	
        })	
    }	
    couponChangeHandler = (value) => {	
        console.log(value)	
        let discountPercent = (value === "Not Available" || value === "default") ? 0 : value;	
        let discount = (this.state.currentPrice * discountPercent) / 100;	
        let grandTotal = (this.state.totalPrice * this.state.quantity) - discount;	
        this.setState({	
            ...this.state,	
            couponDiscount: discount,	
            grandTotal: grandTotal?grandTotal:''	
        })	
    }	
    submitHandler = () => {	
        // console.log(this.state)	
        sessionStorage.removeItem('login');	
        let orderData = {	
            date: tdate.getDate()+'/'+(tdate.getMonth()+1)+'/'+tdate.getFullYear(),	
            userName:this.state.userName,	
            userEmail:this.state.userEmail,	
            fname: this.state.fname,	
            lname: this.state.lname,	
            houseadd: this.state.houseadd,	
            apartment: this.state.apartment,	
            city: this.state.city,	
            state: this.state.state,	
            country: this.state.country,	
            postCode: this.state.postCode,	
            phone: this.state.phone,	
            email: this.state.email,	
            asin: this.state.asin,	
            productTitle: this.state.productTitle,	
            beforePrice: this.state.beforePrice,	
            savingAmount: this.state.savingAmount,	
            currentPrice: this.state.currentPrice,	
            quantity: this.state.quantity,	
            totalPrice: this.state.totalPrice,	
            couponDiscount: this.state.couponDiscount,	
            grandTotal: this.state.grandTotal?this.state.grandTotal:this.state.totalPrice,	
            payment: this.state.payment,	
            status: this.state.status,	
            delivered: this.state.delivered	
        }	
        if (orderData.fname === '' || orderData.lname === '' || orderData.phone === ''	
            || orderData.houseadd === '' || orderData.postCode === '') {	
                // alert("All fields are required.")	
            this.setState({	
                errors: { ...this.state.errors, emptyFields: "All fields are required" }	
            })	
            	
        }	
        else if(orderData.payment === 'NetBanking' || orderData.payment === 'CDcard') {	
            this.paymentProcess(orderData);	
        }	
        else {	
            this.props.dispatch(placeOrder(orderData));	
            // alert("Your Order is Placed Successfully!");	
            this.setState({	
                errors: { ...this.state.errors, emptyFields: "" },	
                success: "Order Placed Successfully...!"	
            })	
            if(this.state.couponDiscount) {	
                let ele = document.getElementById('coupon');	
                let id = ele[ele.selectedIndex].id;	
                this.props.dispatch(updateCoupon(id, {email: this.state.userEmail}));	
            }	
            setTimeout(() => {	
                this.props.history.push('/orders');	
            }, 2000);	
        }	
       	
    }	
    	
    userValidation = () => {	
        	
        if (this.state.userName === '' || this.state.userName === undefined || this.state.userName === null)	
        {	
            // console.log(this.state.userName)	
            return(	
                <NotSignedIn/>	
            )	
        }	
        else{	
            return(	
                <PlaceOrderDisplay	
                userData = {this.state}	
                coupons = {this.props.coupons}	
                changeHandler = {this.changeHandler}	
                blurHandler = {this.blurHandler}	
                submitHandler = {this.submitHandler}	
                quantitychangeHandler = {this.quantitychangeHandler}	
                error = {this.state.errors.emptyFields}	
                success = {this.state.success}	
                couponChangeHandler = {this.couponChangeHandler}	
            />	
            )	
        	
        }	
        	
    }	
    render() {	
        // let productData = JSON.parse(sessionStorage.getItem('productData'))	
        	
        return(	
            <div>	
                {this.userValidation()}	
            </div>                	
        );	
    	
    }	
}	
const mapStateToProps = (state) => {	
    // console.log("from redux",state.order.orderStatus)	
    return {	
        orderResponse: state.order.orderStatus,	
        coupons: state.coupon.getAllCoupons	
    }	
}	
PlaceOrder.prototypes = {	
    dispatch: PropTypes.func	
}	
export default connect(mapStateToProps)(PlaceOrder)