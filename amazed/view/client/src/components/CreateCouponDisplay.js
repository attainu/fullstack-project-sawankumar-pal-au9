import React from 'react';

const CreateCouponDisplay = (props) => {
    const handleChange = (e) => {
        let categoryNumber = document.getElementById('categoryNumber');
        categoryNumber.value = e.target.value;

        props.changeHandler(e.target.name, e.target.options[e.target.selectedIndex].text);
        props.changeHandler(categoryNumber.name, categoryNumber.value);
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <label htmlFor="couponName">
                        Coupon Name
                    </label>

                    <input type="text" name="couponName" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} required></input>
                </div>

                <div className="row">
                    <label htmlFor="couponCategory">
                        Coupon Category
                    </label>

                    <select name="category" onChange={handleChange} required>
                        <option selected disabled>select category</option>
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

                <div className="row">
                    <label htmlFor="categoryNumber">
                        Category Number
                    </label>

                    <input type="number" id="categoryNumber" name="categoryNumber" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} required></input>
                </div>

                <div className="row">
                    <label htmlFor="couponCode">
                        Coupon Code
                    </label>

                    <input type="text" name="couponCode" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} required></input>
                </div>

                <div className="row">
                    <label htmlFor="discountPercent">
                        Discount Percent
                    </label>

                    <input type="number" name="discountPercent" min="0" max="100" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} required></input>
                </div>

                <div className="row">
                    <label htmlFor="expiryDate">
                        Expiry Date
                    </label>

                    <input type="date" name="expiryDate" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} required></input>
                </div>

                <input 
                    type="submit" 
                    onClick={(e) => {
                        e.preventDefault();
                        props.submitHandler()
                    }}
                />
            </form>
        </div>
    );
}

export default CreateCouponDisplay;