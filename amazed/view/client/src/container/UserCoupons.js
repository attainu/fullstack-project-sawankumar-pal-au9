import React from 'react';
import { getAllCoupons, deleteCoupon } from '../actions/actionfile';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import UserCouponsDisplay from '../components/UserCouponsDisplay';

class UserCoupons extends React.Component {
     
    componentDidMount() {
        this.props.dispatch(getAllCoupons());
    }

    render() {
        return (
        <UserCouponsDisplay
            coupons={this.props.coupons}
            delete={(e) => {
                e.preventDefault();
                this.props.dispatch(deleteCoupon);
            }}
        />
        );
    }
}

UserCoupons.prototypes = {
    disptach: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        coupons: state.coupon.getAllCoupons
    }
}


export default connect(mapStateToProps)(UserCoupons);