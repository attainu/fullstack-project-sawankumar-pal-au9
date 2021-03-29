import React from 'react';
import Category from '../components/Category';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories, userDetails } from '../actions/actionfile';

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(categories());
    }

    componentDidUpdate() {
        if(this.props.location.search){
            const query = this.props.location.search.split('=')[1];

            const [token, userName, email] = query.split('&');
            if(token && !sessionStorage.getItem('token')) {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('userName', userName);
                sessionStorage.setItem('loggedInEmail', email);
                sessionStorage.setItem('role', 'User');

                this.props.dispatch(userDetails(token));
            }
        }

        if(this.props.userDetails && !sessionStorage.getItem('userDetails')){
            sessionStorage.setItem('userDetails', JSON.stringify(this.props.userDetails))
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
        catData: state.category,
        userDetails: state.signup.userInfo
    }
}

export default connect(mapStateToProps)(Home);