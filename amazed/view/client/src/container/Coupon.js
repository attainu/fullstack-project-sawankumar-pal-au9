import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getAllCoupons, deleteCoupon, categories } from '../actions/actionfile';
import CouponDisplay from '../components/CouponDisplay';

class Coupon extends React.Component {
    constructor() {
        super()

        this.state = {
            ActiveCoupons: "",
            ExpiredCoupons:""
        }
    }

    componentDidMount() {
        this.props.dispatch(getAllCoupons());
        this.props.dispatch(categories());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.coupons && nextProps.coupons.length > 0){
            let ActiveCoupons = nextProps.coupons.filter(item => {
                let expiryDate = new Date(item.expiryDate);
                let date = new Date();
                let tDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    
                return (expiryDate >= new Date(tDate));
            })
    
            let ExpiredCoupons = nextProps.coupons.filter(item => {
                let expiryDate = new Date(item.expiryDate);
                let date = new Date();
                let tDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    
                return (expiryDate < new Date(tDate));
            })

            this.setState({
                ActiveCoupons: ActiveCoupons,
                ExpiredCoupons: ExpiredCoupons
            })
        }
    }

    delete = (id) => {
        console.log("Delete", typeof id)
        this.props.dispatch(deleteCoupon(id))
    }

    Afilter = (category) => {
        if(category && this.props.coupons.length > 0) {
            let filteredCoupons = this.props.coupons.filter(item => {
                let expiryDate = new Date(item.expiryDate);
                let date = new Date();
                let tDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    
                return (expiryDate >= new Date(tDate)) && item.category === category;
            })
            this.setState({
                ActiveCoupons: filteredCoupons
            })
        }else {
            let filteredCoupons = this.props.coupons.filter(item => {
                let expiryDate = new Date(item.expiryDate);
                let date = new Date();
                let tDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    
                return (expiryDate >= new Date(tDate));
            })
            this.setState({
                ActiveCoupons: filteredCoupons
            })
        }
    }

    Efilter = (category) => {
        if(category && this.props.coupons.length > 0) {
            let filteredCoupons = this.props.coupons.filter(item => {
                let expiryDate = new Date(item.expiryDate);
                let date = new Date();
                let tDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    
                return (expiryDate < new Date(tDate)) && item.category === category;
            })
            this.setState({
                ExpiredCoupons: filteredCoupons
            })
        }else {
            let filteredCoupons = this.props.coupons.filter(item => {
                let expiryDate = new Date(item.expiryDate);
                let date = new Date();
                let tDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
    
                return (expiryDate < new Date(tDate));
            })
            this.setState({
                ExpiredCoupons: filteredCoupons
            })
        }
    }

    render() {
        return (
            <div className="container" style={{overflowX:"auto"}}>
                <CouponDisplay 
                    ActiveCoupons={ this.state.ActiveCoupons } 
                    ExpiredCoupons={ this.state.ExpiredCoupons }
                    categories={ this.props.categories }
                    delete={(e) => {
                        e.preventDefault();
                        this.delete(e.target.value)
                    }}
                    Afilter={(e) => {this.Afilter(e.target.value)}}
                    Efilter={(e) => {this.Efilter(e.target.value)}}
                    history={this.props.history}
                />
            </div>
        );
    }
}

Coupon.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        coupons: state.coupon.getAllCoupons,
        categories: state.category.Categories
    }
}

export default connect(mapStateToProps)(Coupon);