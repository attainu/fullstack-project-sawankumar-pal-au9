import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { placeOrder } from '../actions/actionfile';
import PlaceOderDisplay from '../components/PlaceOderDisplay';
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
            payment: 'COD',
            status: 'Order Placed',
            delivered: false,
            success: '',
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

    changeHandler = (name, value) => {
        // console.log(name,value)
        this.blurHandler(name, value) 
        this.setState({
            [name]: value,

        })
        // console.log(this.state)
    }

    quantitychangeHandler = (value) => {
        this.setState({
            quantity: value,
            totalPrice: this.state.currentPrice * value
        })
    }

    submitHandler = () => {
        // console.log(this.state)
        sessionStorage.removeItem('login')
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
            payment: this.state.payment,
            status: this.state.status,
            delivered: this.state.delivered
        }
        if (orderData.fname === '' || orderData.lname === ''
            || orderData.email === '' || orderData.phone === ''
            || orderData.houseadd === '' || orderData.postCode === '') {
                // alert("All fields are required.")
            this.setState({
                errors: { ...this.state.errors, emptyFields: "All fields are required" }
            })
            
        }
        else {
            this.props.dispatch(placeOrder(orderData));
            // alert("Your Order is Placed Successfully!");
            this.setState({
                errors: { ...this.state.errors, emptyFields: "" },
                success: "Order Placed Successfully...!"
            })

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
                <PlaceOderDisplay
                userData = {this.state}
                changeHandler = {this.changeHandler}
                blurHandler = {this.blurHandler}
                submitHandler = {this.submitHandler}
                quantitychangeHandler = {this.quantitychangeHandler}
                error = {this.state.errors.emptyFields}
                success = {this.state.success}
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
        orderResponse: state.order.orderStatus

    }
}

PlaceOrder.protoTypes = {
    dispatch: PropTypes.func
}
export default connect(mapStateToProps)(PlaceOrder)