import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { userDetails } from '../../actions/actionfile';
class GetUser extends React.Component {
    componentDidMount() {
        const token = sessionStorage.getItem('token');
        this.props.dispatch(userDetails(token))
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        sessionStorage.setItem('userName', nextProps.userDetails.name);
        sessionStorage.setItem('loggedInEmail', nextProps.userDetails.email);
        sessionStorage.setItem('role', nextProps.userDetails.role);
        sessionStorage.setItem('userDetails', JSON.stringify(nextProps.userDetails));
        this.validateDestination()        
    }
    validateDestination = () => {
        if(sessionStorage.getItem('login') === 'false')  {
            this.props.history.push('/buynow'); 
        }
        else if(sessionStorage.getItem('clogin') === 'false') {
            this.props.history.push(`/detail/${sessionStorage.getItem('asin')}`);
        }
        else if(sessionStorage.getItem('role') === 'Admin') {
            this.props.history.push('/admin');
        }
        else {
            this.props.history.push('/');
        }
    }
    render() {
        return(
            <div></div>
        )
    }
}

GetUser.prototypes = {
    dispatch:propTypes.func
}

const mapStateToProps = (state) => {
        console.log("state",state)
        return{
            userDetails:state.signup.userInfo
        }
   
}

export default connect(mapStateToProps)(GetUser);