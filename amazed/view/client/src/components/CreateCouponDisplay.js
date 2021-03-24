import React from 'react';
import './CreateCoupon.css';

const CreateCouponDisplay = (props) => {
    const handleChange = (e) => {
        let categoryNumber = document.getElementById('categoryNumber');
        categoryNumber.value = e.target.value;

        props.changeHandler(e.target.name, e.target.options[e.target.selectedIndex].text);
        props.changeHandler(categoryNumber.name, categoryNumber.value);
    }

    return (
        <div className="container">
            <form className="form-group col-md-6 col-md-offset-3 create-coupon-form">
                <h2 id="create-coupon">Create Coupon Form</h2>
                <hr/>
                <div className="coupon-data">
                    <label className="field" htmlFor="couponName">
                        Coupon Name
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Coupon Name"
                        name="couponName" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="coupon-data">
                    <label className="field" htmlFor="couponCategory">
                        Coupon Category
                    </label>

                    <select 
                        className="form-control field-value"
                        name="category" onChange={handleChange} 
                        required>
                            <option selected disabled>Select Category</option>
                            {
                                props.categories &&
                                props.categories.map(item => {
                                    return (
                                        <option key={item._id} value={item.categoryNumber}>
                                            {item.category}
                                        </option>
                                    )
                                })
                            }
                    </select>
                </div>

                <div className="coupon-data">
                    <label className="field" htmlFor="categoryNumber">
                        Category Number
                    </label>

                    <input 
                        type="number" 
                        className="form-control field-value"
                        id="categoryNumber" 
                        name="categoryNumber"
                        required
                        readOnly>
                    </input>
                </div>

                <div className="coupon-data">
                    <label className="field" htmlFor="couponCode">
                        Coupon Code
                    </label>

                    <input 
                        type="text" 
                        style={{textTransform: "uppercase"}}
                        className="form-control field-value"
                        placeholder="Enter Coupon Code"
                        name="couponCode" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="coupon-data">
                    <label className="field" htmlFor="discountPercent">
                        Discount Percent
                    </label>

                    <input 
                        className="form-control field-value"
                        placeholder="Enter Dicount In Percentage"
                        type="number" 
                        name="discountPercent" 
                        min="0" max="100" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="coupon-data">
                    <label className="field" htmlFor="expiryDate">
                        Expiry Date
                    </label>

                    <input 
                        className="form-control field-value"
                        type="date" 
                        name="expiryDate" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>
                
                <br/>

                <div>
                    <input
                        className="form-control btn btn-warning field-value" 
                        type="submit"
                        value="Create Coupon"
                        onClick={(e) => {
                            e.preventDefault();
                            props.submitHandler();
                        }}
                    >
                    </input>
                </div>
            </form>
        </div>
    );
}

export default CreateCouponDisplay;