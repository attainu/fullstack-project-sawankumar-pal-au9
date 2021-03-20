import './PlaceOrder.css';
const PlaceOderDisplay = (props) => {
    return(
        <div className="order-outer-container">
                <form>
                <div className="container order-container">
                    <div className="order-title">
                        <h2 className="order-h2">Product Order Form</h2>
                    </div>
                    <div className="d-flex">
                        <form className="order-form" >
                            <label className="order-label">
                                <span className="fname">First Name <span className="required">*</span></span>
                                <input 
                                    type="text" 
                                    name="fname" 
                                    autoComplete="new-off"
                                    value= {props.userData.fname}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.fname}</p>
                            </label>
                            <label className="order-label">
                                <span className="lname">Last Name <span className="required">*</span></span>
                                <input 
                                    type="text" 
                                    name="lname" 
                                    autoComplete="new-off"
                                    value= {props.userData.lname}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.lname}</p>
                            </label>
                            <label className="order-label">
                                <span>Address <span className="required">*</span></span>
                                <input type="text" 
                                    name="houseadd" 
                                    autoComplete="new-off"
                                    placeholder="House number and street name"
                                    value={props.userData.houseadd}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.houseadd}</p>
                            </label>
                            <label className="order-label">
                                <span>&nbsp;</span>
                                <input 
                                    type="text" 
                                    name="apartment" 
                                    autoComplete="new-off"
                                    value={props.userData.apartment}
                                    placeholder="Apartment, suite, unit etc. (optional)"
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)} />
                            </label>
                            <label className="order-label">
                                <span>Town / City <span className="required">*</span></span>
                                <input 
                                    type="text" 
                                    name="city" 
                                    autoComplete="new-off"
                                    value={props.userData.city}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.city}</p>
                            </label>
                            <label className="order-label">
                                <span>State <span className="required">*</span></span>
                                <input 
                                    type="text" 
                                    name="state" 
                                    autoComplete="new-off"
                                    value={props.userData.state}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.state}</p>
                            </label>
                            <label className="order-label">
                                <span>Country</span>
                                <input 
                                    type="text" 
                                    name="country" 
                                    value={props.userData.country} readOnly
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)} />
                            </label>
                            <label className="order-label">
                                <span>Postcode <span className="required">*</span></span>
                                <input 
                                    type="text" 
                                    name="postCode" 
                                    autoComplete="new-off"
                                    value={props.userData.postCode}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.postCode}</p>
                            </label>
                            <label className="order-label">
                                <span>Phone <span className="required">*</span></span>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    autoComplete="new-off"
                                    value={props.userData.phone}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.phone}</p>
                            </label>
                            <label className="order-label">
                                <span>Email Address <span className="required">*</span></span>
                                <input 
                                    type="email" 
                                    name="email" 
                                    autoComplete="new-off"
                                    value={props.userData.email}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                                    onBlur={(event) => props.blurHandler(event.target.name, event.target.value)} />
                                <p className="error-display">{props.userData.errors.email}</p>
                            </label>
                        </form>

                        <div className="Yorder">
                            <table className="order-table">
                                <tbody>
                                    <tr>
                                        <th colSpan="2">Your order</th>
                                    </tr>
                                    <tr>
                                        <td>Product Name</td>
                                        <td className="order-product-name">{props.userData.productTitle}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <tr>
                                            <td>Before: &#8377;{props.userData.beforePrice}</td>	
                                        </tr>	
                                        <tr>	
                                            <td>Saving: &#8377;{props.userData.savingAmount}</td>	
                                        </tr>	
                                        <tr>	
                                            <td>Now: &#8377;{props.userData.currentPrice}</td>
                                        </tr>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td>
                                            <select id="quantity" name="quantity"
                                                onChange={(event) => props.quantitychangeHandler(event.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>&#8377;{props.userData.totalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Free shipping</td>
                                    </tr>
                                </tbody>
                            </table><br />
                            <div className="radios">
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="NetBanking"
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)} />
                                <label className="order-label1">Net Banking</label>
                            </div>
                            {/* <p className="order-disclaimer">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p> */}
                            <div className="radios">
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="COD" checked
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)} />
                                <label className="order-label1">Cash on Delivery</label>
                            </div>
                            <div className="radios">
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="CDcard"
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)} />
                                <label className="order-label1">Credit / Debit Card</label>
                                <span>
                                    <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                                </span>
                            </div>

                            <div style={{fontSize:"16px",color:"red"}}>
                                <center>
                                    <span>{props.error}</span>
                                </center>
                            </div>

                            <div style={{fontSize:"16px",color:"green"}}>
                                <center>
                                    <span>{props.success}</span>
                                </center>
                            </div>

                            <button className="order-button" type="button"
                                onClick={props.submitHandler}>Place Order</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
    );
}

export default PlaceOderDisplay;