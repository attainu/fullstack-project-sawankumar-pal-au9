import { Link } from 'react-router-dom';

const MyOrders = (props) => {
    const cancelOrder = (event) => {
        event.preventDefault();
        const [id, status] = event.target.value.split(',');
        console.log(id, status);
        props.cancelOrder(id, status);
    }

    const renderOrderBtn = (status, id) => {
        if(status === "Product Delivered") {
            return (
                <th>
                    <button className="btn btn-danger" onClick={cancelOrder} value={[id, 'Deleted']}>Delete</button>
                </th>
            );
        }
        else {
            return (
                <th>
                    <button className="btn btn-danger" onClick={cancelOrder} value={[id, 'Cancelled']}>Cancel</button>
                </th>
            );
        }
    }
    const displayRender = ({orders}) => {
        console.log(orders, props)
        if(orders && orders.length > 0) {
           return orders.map((order)=>{
                return (
                    <div key={order._id}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <table className="table table-responsive">
                                    <thead style={{backgroundColor:"#347B98"}}>
                                        <tr>
                                            <th>ORDER DATE</th>
                                            <th>DELIVEREY TO</th>
                                            <th>CONTACT NO</th>
                                            <th>PAYMENT MODE</th>
                                            <th>ORDER STATUS</th>
                                            <th>CANCEL / DELETE</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{order.date}</td>
                                            <td>{order.orderDetails.firstName} {order.orderDetails.lastName}</td>
                                            <td>{order.orderDetails.phone}</td>
                                            <td>{order.productDetails.paymentMode}</td>
                                            <td>{order.orderStatus}</td>	
                                            {renderOrderBtn(order.orderStatus, order._id)}   
                                        </tr>
                                    </tbody>
                                    
                                </table>
                                
                            </div>
                            <div className="panel-body">
                                <Link to={`/detail/${order.productDetails.asin}`} style={{textDecoration:"none" ,color:"#67AFCB"}}><h4>{order.productDetails.productTitle}</h4></Link>
                                <p style={{display:"inline-block", margin:"20px"}}>Price: {order.productDetails.totalPrice}</p>
                                <p style={{display:"inline-block", margin:"20px"}}>Quantity: {order.productDetails.quantity}</p>
                                <p style={{display:"inline-block", margin:"20px"}}>Coupon Discount: {order.productDetails.couponDiscount}</p>
                                <p style={{display:"inline-block", margin:"20px"}}>Total Price: {order.productDetails.grandTotal}</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })

        }
        else{
            return(
                <center>
                    <div className="emptyDisplay">
                        <img src="/images/emptyOrder.png" alt="emptyOrder"></img>
                    </div>
                </center>
            )
        }

    }
    return(
        <div>
            {displayRender(props)}
        </div>
    );
}

export default MyOrders;