import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { allProducts, deleteProduct, search, allSubCategories } from '../actions/actionfile';
import ProductDisplay from '../components/ProductDisplay';

class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            category: '',
            asin: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(allProducts());
        this.props.dispatch(allSubCategories());
    }

    delete = (id) => {
        this.props.dispatch(deleteProduct(id));
        this.props.dispatch(allProducts());
    }

    changeCategory = (e) => {
        this.setState({
            category: e.target.value, 
            asin: ''
        })
    }

    searchAsin = (asin) => {
        this.setState({
            asin: asin,
            category: ''
        })
    }

    render() {
        return (
            <div className="container" style={{overflowX:"auto"}}>
                <ProductDisplay 
                    products={ this.props.products } 
                    categories={ this.props.categories }
                    category={ this.state.category }
                    categoryChanged={ this.changeCategory }
                    asin={ this.state.asin }
                    searchAsin= { this.searchAsin }
                    delete={(e) => {
                        e.preventDefault();
                        this.delete(e.target.value)
                    }}
                    history={this.props.history}
                />
            </div>
        );
    }
}

Products.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        products: state.search.AllProducts,
        categories: state.category.AllSubCategories
    }
}

export default connect(mapStateToProps)(Products);