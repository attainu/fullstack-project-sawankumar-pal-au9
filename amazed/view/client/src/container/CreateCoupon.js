import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createCoupon, categories } from '../actions/actionfile';
import CreateCouponDisplay from '../components/CreateCouponDisplay';


class CreateCoupon extends React.Component {
    constructor() {
        super()

        this.state = {
            couponName: "",
            category: "",
            categoryNumber: "",
            couponCode: "",
            discountPercent: "",
            expiryDate: ""
        }
    }

    componentDidMount() {
        this.props.dispatch(categories());
    }

    renderChange = (name, value) => {
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    submit = () => {
        console.log(this.state)
        const { couponName, category, couponCode, discountPercent, expiryDate } = this.state;
        if(couponName && category && couponCode && discountPercent && expiryDate) {
            // console.log(this.state)
            this.props.dispatch(createCoupon(this.state));

            setTimeout(() => {
                this.props.history.push('/coupon')
            }, 1000)
        }
    }

    render() {
        return (
            <CreateCouponDisplay
                categories={ this.props.categories }
                changeHandler= { (name, value) => {this.renderChange(name, value)} }
                submitHandler= { () => {this.submit()} }
            />
        );
    }
}

CreateCoupon.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.Categories
    }
}

export default connect(mapStateToProps)(CreateCoupon);