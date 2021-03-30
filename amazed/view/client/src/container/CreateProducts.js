import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createProduct, categories } from '../actions/actionfile';
import CreateProductsDisplay from '../components/CreateProductsDisplay';


class CreateProducts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {
                asin: '', 
                category: '', 
                product: '', 
                type: '', 
                price: {
                    discounted: false,
                    current_price: 0,
                    currency: "INR",
                    before_price: 0,
                    savings_amount: 0,
                    savings_percent: 0
                }, 
                reviews: { 
                    total_reviews:  0,
                    rating: 0.0
                },
                title: '',
                thumbnailFile: '', 
                thumbnail: '', 
                description: '',
                imageFiles: [],
                images: [], 
                dimensions: '', 
                weight: '', 
                manufacturer: '', 
                model_number: '', 
                sold_by: '', 
                brand: ''
            },
            error: ""
        }
    }

    componentDidMount() {
        this.props.dispatch(categories());
    }

    changeImageHandler = (value) => {
        this.setState({
            ...this.state,
            product: {
                ...this.state.product, 
                imageFiles:[
                    ...value
                ]  
            }            
        })
    }

    renderPriceChange = (name, value) => {
        console.log(name, value)
        this.setState({
            ...this.state,
            product: {
                ...this.state.product,
                price:{
                    ...this.state.product.price,
                    [name]: value
                }
            }
        })
    }
    
    renderChange = (name, value) => {
        this.setState({
            ...this.state,
            product: {
                ...this.state.product,
                [name]: value
            }
        })
    }


    submitImages = () => { 
    
        return this.state.product.imageFiles.map(image =>{
            const data = new FormData()	
            data.append("file",image)	
            data.append("upload_preset","image_uploader")	
            data.append("clone_name","sawan")

            return fetch('https://api.cloudinary.com/v1_1/sawan/upload',
                    {
                        method:'POST',
                        body:data
                    }
                )
                .then(res => res.json())
                .then(resData => {
                    console.log("response", resData)
                    this.setState({
                        ...this.state,
                        product: {
                            ...this.state.product,
                            images: [...this.state.product.images, resData.url]
                        }
                    })
                    
                    if(this.state.product.imageFiles.length === this.state.product.images.length) {
                        let {asin, product, title, type} = this.state.product;
                        let cprice = this.state.product.price.current_price;

                        if(asin, product, title, type, cprice) {
                            const prodData = {
                                asin: this.state.product.asin, 
                                category: this.state.product.category, 
                                product: this.state.product.product, 
                                type: this.state.product.type, 
                                price: this.state.product.price, 
                                reviews: this.state.product.reviews,
                                title: this.state.product.title,
                                thumbnail: this.state.product.thumbnail, 
                                description: this.state.product.description,
                                images: this.state.product.images, 
                                dimensions: this.state.product.dimensions, 
                                weight: this.state.product.weight, 
                                manufacturer: this.state.product.manufacturer, 
                                model_number: this.state.product.model_number, 
                                sold_by: this.state.product.sold_by, 
                                brand: this.state.product.brand
                            }

                            this.setState({
                                ...this.state,
                                error: ""
                            })

                            this.props.dispatch(createProduct(prodData));
                            this.props.history.push("/app_products");
                        }
                        else {
                            this.setState({
                                ...this.state,
                                error: "Asin, Product Name, Title, Type and Current Price Are Menditory"
                            })
                        }
                    }
                })
        })
    }

    submitThumbnail = () => {
        const data = new FormData()	
            data.append("file",this.state.product.thumbnailFile)	
            data.append("upload_preset","image-uploader")	
            data.append("clone_name","sunitta")	
            console.log(data)            	
            return fetch('https://api.cloudinary.com/v1_1/sunitta/image/upload',{	
                method:'POST',	
                body:data	
            })            
    }

    submit = async () => {

        if(this.state.product.price.current_price && parseInt(this.state.product.price.current_price) > 0) {
            
            const result1 = await this.submitThumbnail();
            console.log(result1)
            const respdata = await result1.json();	
            this.setState({ 	
                ...this.state,
                product: {
                    ...this.state.product ,           	
                    thumbnail: respdata.url
                }  
            },()=>console.log(this.state.product))

            await this.submitImages();
        }else {
            this.setState({
                ...this.state,
                error: "Product Current Price is manditory and its value should be greater than 0"
            })
        }
    }

    render() {
        return (
            <CreateProductsDisplay
                categories = { this.props.categories }
                changeHandler = { (name, value) => {this.renderChange(name, value)} }
                submitHandler = { () => {this.submit()} }
                renderPriceChange = { this.renderPriceChange }
                changeImageHandler = { this.changeImageHandler }
                error= { this.state.error }
            />
        );
    }
}

CreateProducts.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.Categories,
        createdMessage: state.search.CreateProduct
    }
}

export default connect(mapStateToProps)(CreateProducts);