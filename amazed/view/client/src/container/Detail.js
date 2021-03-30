import React from 'react';
import propTypes from 'prop-types';
import DetailsDisplay from '../components/DetailsDisplay';
import Review from '../components/Review';
import { connect } from 'react-redux';
import { detail, review, addToCart } from '../actions/actionfile';


class Detail extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            detData: {ProductDetails: null},
            revData: {ProductReviews: null}
        }
    }

    componentDidMount() {
        this.props.dispatch(detail(this.props.match.params.id));

        this.props.dispatch(review(this.props.match.params.id));
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            detData: nextProps.detailsData,
            revData: nextProps.reviewData
        })
    }

    addDataToCart = (data) => {
        const cartData = {
            "userName": sessionStorage.getItem('userName'),
            "userEmail": sessionStorage.getItem('loggedInEmail'),
            "product": data
        }

        this.props.dispatch(addToCart(cartData));

        setTimeout(() => {
            this.props.history.push('/customer_cart');
        }, 500);
      
    }

    render() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        return (
            <React.Fragment>
                <DetailsDisplay 
                    dData={this.state.detData.ProductDetails} 
                    addData={this.addDataToCart}
                    history={this.props.history}
                    match={this.props.match}/>
                <hr/>

                <Review rData={this.state.revData.ProductReviews}/>

            </React.Fragment>
        );
    }
}

Detail.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        detailsData: state.search,
        reviewData: state.search,
        addedToCart: state.order.addedItem
    }
}

export default connect(mapStateToProps)(Detail);