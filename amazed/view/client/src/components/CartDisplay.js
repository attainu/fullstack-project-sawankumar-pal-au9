import { Link } from 'react-router-dom';
import './CartDisplay.css';

const CartDisplay = (props) => {

    const renderCartData = (data) => {
        const productData = (e) => {
            const product = JSON.parse(e.target.value);

            sessionStorage.setItem('login', 'false');
            sessionStorage.setItem('productData', JSON.stringify(product));
        }

        const removeItem = (e) => {
            e.preventDefault();
            props.remove(e.target.value);
        }

        if(data.cartData) {
            if(data.cartData.length > 0) {
                return data.cartData.map((item) => {
                    return (
                        <div className="cartContainer" key={item._id}>
                            <div className="cartImage">
                                <img src={item.mainImage} alt="cartImage"/>
                            </div>

                            <center>
                                <div className="cartData">
                                    <div className="cartTitle">
                                        <Link to={`/detail/${item.asin}`} style={{textDecoration:"none" ,color:"#67AFCB"}}><h3 className="link">{item.title}</h3></Link>
                                    </div>
                                    <p><b style={{color:'orange'}}>Rating: </b><span className="rating">{item.rating}</span> out of 5</p>
                                    <p><b>M.R.P: </b><del>Rs. {item.price.before_price}</del></p>
                                    <p><b>Price: </b>Rs.<b className="amount">{item.price.current_price}</b></p>
                                    <p><b>Saving: </b>Rs.{item.price.savings_amount}</p>
                                    <Link to="/buynow"><button onClick={productData} className="btn btn-warning" value={JSON.stringify(item)}>Buy Now</button></Link>
                                    &nbsp;
                                    &nbsp;
                                    <button onClick={removeItem} className="btn btn-danger" value={item._id}>Remove</button>
                                </div>
                            </center>
                        </div>
                    );
                })
            }

            else {
                return (
                    <center>
                        <div className="emptyDisplay">
                            <img src="/images/emptyCart.png" alt="emptyCart"></img>
                        </div>
                    </center>
                );
            }
        }
    }

    return (
        <div className="cartDisplay">
            <h2 className="cartHeading">Shopping Cart</h2>
            <hr/>
            <center>
                <div className="cartProducts">
                    {renderCartData(props)}
                </div>
            </center>
        </div>
    );
}

export default CartDisplay;