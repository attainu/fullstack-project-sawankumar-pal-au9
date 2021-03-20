import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getFromCart, removeFromCart } from '../actions/actionfile';
import CartDisplay from '../components/CartDisplay';

class Cart extends React.Component {

    componentDidMount() {
        this.props.dispatch(getFromCart(sessionStorage.getItem('loggedInEmail')));
    }

    removeFromCart = (id) => {
        this.props.dispatch(removeFromCart(id));
        setTimeout(() => {
            this.props.dispatch(getFromCart(sessionStorage.getItem('loggedInEmail')));
        }, 500);
    }

    render() {
        return (
            <CartDisplay cartData={this.props.cData.userCartData} remove={this.removeFromCart}/>
        )
    }
}

Cart.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        cData: state.order
    }
}

export default connect(mapStateToProps)(Cart);