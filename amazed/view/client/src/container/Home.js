import React from 'react';
import Category from '../components/Category';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories } from '../actions/actionfile';

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(categories());
    }

    componentDidUpdate() {
        if(this.props.location.search){
            const query = this.props.location.search.split('=')[1];
            console.log(query);
            const [token, userName, email] = query.split('&');
            if(token) {
                sessionStorage.setItem('_ltk', token);
                sessionStorage.setItem('userName', userName);
                sessionStorage.setItem('loggedInEmail', email);
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <Category cData={this.props.catData.Categories}/>
            </React.Fragment>
        );
    }
}

Home.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        catData: state.category
    }
}

export default connect(mapStateToProps)(Home);