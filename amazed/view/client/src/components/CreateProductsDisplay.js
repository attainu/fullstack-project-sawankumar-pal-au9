import React from 'react';
import './CreateProducts.css';

const CreateProductsDisplay = (props) => {
    const handleChange = (e) => {
        let categoryNumber = document.getElementById('categoryNumber');
        categoryNumber.value = e.target.value;

        props.changeHandler(e.target.name, e.target.options[e.target.selectedIndex].text);
        props.changeHandler(categoryNumber.name, categoryNumber.value);
    }

    const renderDiscounted = (e) => {
        let flag = e.target.value;
        let price = document.querySelector('#current_price');
        let savingAmount = document.querySelector('#savings_amount');
        let savingPercent = document.querySelector('#savings_percent');
        let beforePrice = document.querySelector('#before_price');
        let conditionBased = document.getElementsByClassName('conditionBased')[0];

        if(flag === "true") {
            conditionBased.style.display = "block";
            price.value = 0;
        }else {
            conditionBased.style.display = "none";
            savingAmount.value = 0;
            savingPercent.value = 0;
            price.value = beforePrice.value;
            props.renderPriceChange(price.name, price.value);
        }

        props.renderPriceChange(e.target.name, e.target.value);
    }

    const renderCurrentPrice = (e) => {
        let price = e.target.value;
        let beforePrice = document.querySelector('#before_price');
        let savingAmount = document.querySelector('#savings_amount');
        let savingPercent = document.querySelector('#savings_percent');
        
        if(beforePrice.value && parseInt(beforePrice.value) > parseInt(price)) {
            savingAmount.value = beforePrice.value - price;
        }else {
            savingAmount.value = 0;
        }

        if(savingAmount.value) {
            savingPercent.value = (savingAmount.value / beforePrice.value)*100; 
        }else {
            savingPercent.value = 0;
        }

        props.renderPriceChange(e.target.name, e.target.value);
    }

    const renderBeforePrice = (e) => {
        let price = document.querySelector('#current_price');
        let beforePrice = e.target.value;
        let savingAmount = document.querySelector('#savings_amount');
        let savingPercent = document.querySelector('#savings_percent');
        
        if(price.value && parseInt(beforePrice) > parseInt(price.value)) {
            savingAmount.value = beforePrice - price.value;
        }else {
            savingAmount.value = 0;
        }

        if(savingAmount.value) {
            savingPercent.value = (savingAmount.value / beforePrice)*100; 
        }else {
            savingPercent.value = 0;
        }

        props.renderPriceChange(e.target.name, e.target.value);

        price.value = e.target.value;
        props.renderPriceChange(price.name, price.value);
    }
    

    return (
        <div className="container">
            <form className="form-group col-md-6 col-md-offset-3 create-products-form" encType="multipart/form-data" >
                <h2 id="create-products">Create Products Form</h2>
                <hr/>
                <div className="products-data">
                    <label className="field" htmlFor="asin">
                        Asin
                    </label>

                    <input 
                        type="text" 
                        style={{textTransform: "uppercase"}}
                        className="form-control field-value"
                        placeholder="Enter asin code"
                        name="asin" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="product">
                        Product Name
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Name"
                        name="product" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="title">
                        Product Title
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Title"
                        name="title" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="type">
                        Product Type
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Type"
                        name="type" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="description">
                        Product Description
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Description"
                        name="description" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="features">
                        Product Features
                    </label>

                    <textarea 
                        className="form-control field-value"
                        placeholder="Enter Product Features"
                        name="features" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </textarea>
                </div>

                
                <div className="products-data">
                    <label className="field" htmlFor="category">
                        Product Category
                    </label>

                    <select 
                        defaultValue="default"
                        className="form-control field-value"
                        name="category" onChange={handleChange} 
                        required>
                            <option value="default" disabled>Select Category</option>
                            {
                                props.categories && props.categories.length > 0 &&
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

                <div className="products-data">
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

                <div className="products-data">
                    <label className="field" htmlFor="before_price">
                        Product Before Price
                    </label>

                    <input 
                        type="number" 
                        className="form-control field-value"
                        id="before_price" 
                        name="before_price"
                        onChange={ renderBeforePrice }
                        required>
                    </input>
                </div>


                <div className="products-data">
                    <label className="field" htmlFor="discounted">
                        Discounted or Not: 
                    </label>
                    &nbsp;
                    <label className="field">
                    <input 
                        type="radio" 
                        className=""
                        id="discounted" 
                        name="discounted"
                        value= "true"
                        onChange={ renderDiscounted }
                        >
                    </input>True
                    </label>
                    &nbsp; &nbsp;
                    <label className="field">
                    <input 
                        type="radio" 
                        className=""
                        id="discounted" 
                        name="discounted"
                        value= "false"
                        onChange={ renderDiscounted }
                        >
                    </input>False
                    </label>
                </div> 
                
                <div className="conditionBased">
                    <div className="products-data">
                        <label className="field" htmlFor="current_price">
                            Product Current Price
                        </label>

                        <input 
                            type="number" 
                            className="form-control field-value"
                            id="current_price" 
                            name="current_price"
                            onChange={ renderCurrentPrice }
                            required>
                        </input>
                    </div>

                    <div className="products-data">
                        <label className="field" htmlFor="savings_amount">
                            Savings Amount
                        </label>

                        <input 
                            type="number" 
                            className="form-control field-value"
                            id="savings_amount" 
                            name="savings_amount"
                            onChange={(e) => props.renderPriceChange(e.target.name, e.target.value)}
                            required readOnly>
                        </input>
                    </div>

                    <div className="products-data">
                        <label className="field" htmlFor="savings_percent">
                            Savings Percent
                        </label>

                        <input 
                            type="number" 
                            className="form-control field-value"
                            id="savings_percent" 
                            name="savings_percent"
                            onChange={(e) => props.renderPriceChange(e.target.name, e.target.value)}
                            required readOnly>
                        </input>
                    </div> 
                </div>       

                <div className="products-data">
                    <label className="field" htmlFor="thumbnailFile">
                        Thumbnail image
                    </label>

                    <input 
                        type="file" 
                        className="form-control field-value"
                        placeholder="Enter Product Type"
                        name="thumbnailFile" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.files[0])} 
                        required>
                    </input>
                </div>
                
                <div className="products-data">
                    <label className="field" htmlFor="images">
                        Product Images
                    </label>

                    <input 
                        type="file" multiple
                        className="form-control field-value"
                        placeholder="Upload Product Images"
                        name="imageFiles" 
                        onChange={(e) => props.changeImageHandler(e.target.files)} 
                        required>
                    </input>
                                       
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="dimensions">
                        Product Dimensions
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Dimensions"
                        name="dimensions" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="weight">
                        Product Weight
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Weight"
                        name="weight" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="manufacturer">
                        Product Manufacturer
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Manufacturer"
                        name="manufacturer" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="model_number">
                        Product Model Number
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product Model number"
                        name="model_number" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="sold_by">
                        Product sold By
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Product sold by"
                        name="sold_by" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>

                <div className="products-data">
                    <label className="field" htmlFor="brand">
                        Product Brand
                    </label>

                    <input 
                        type="text" 
                        className="form-control field-value"
                        placeholder="Enter Brand"
                        name="brand" 
                        onChange={(e) => props.changeHandler(e.target.name, e.target.value)} 
                        required>
                    </input>
                </div>
                                
                <br/>
                
                <span id="cprod_err">{ props.error }</span>

                <div>
                    <input
                        className="form-control btn btn-warning field-value" 
                        type="submit"
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

export default CreateProductsDisplay;