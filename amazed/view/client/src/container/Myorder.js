import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetMyOrders, cancelOrder } from '../actions/actionfile'
import MyOrders from '../components/MyOrders';
class Myorder extends React.Component{

    componentDidMount() {
        const query = `userEmail=${sessionStorage.getItem('loggedInEmail')}`;
        console.log(query)
        this.props.dispatch(GetMyOrders(query))
    }

    cancelOrder = (id, status) => {
        this.props.dispatch(cancelOrder(id))
        document.getElementById("error").innerHTML = `Order ${status} Successfully`;
        setTimeout(function(){
            document.getElementById('error').style.opacity = "0";
        },2000);

        setTimeout(() => {
            document.getElementById("error").innerHTML = '';
            document.getElementById('error').style.opacity = "1";
            
            const query = `userEmail=${sessionStorage.getItem('loggedInEmail')}`;
            this.props.dispatch(GetMyOrders(query));
        }, 2000);
    }

    render(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="cartHeading">Orders List</h2>

                    <div style={{fontSize:"20px",color:"green"}}>
                        <center>
                            <span id="error"></span>
                        </center>
                    </div>

                    <MyOrders orders = {this.props.orders}
                    cancelOrder = {this.cancelOrder}/>
                </div>
            </React.Fragment>
        
        )}
    
}

Myorder.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return{
        orders:state.order.myOrder
    }
}

export default connect(mapStateToProps)(Myorder);