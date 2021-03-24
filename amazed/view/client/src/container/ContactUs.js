import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { submitContacts } from '../actions/actionfile';
import Contact from '../components/Contact';

class ContactUs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contactInfo: { 
                userName:'',
                userEmail:'',
                phone:'',
                comment:''   
            },
            errors:{
                userName:'',
                userEmail:'',
                phone:'',
                comment:'',
            }
            
        }
    }

    // componentDidMount() {
    //     this.props.dispatch(getFromCart(sessionStorage.getItem('loggedInEmail')));
    // }
    changeHandler = (name,value) => {
        this.setState({
            contactInfo:{
                ...this.state.contactInfo,
                [name]: value
            }
            
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        // console.log(this.state)
        this.props.dispatch(submitContacts(this.state.contactInfo));
        this.props.history.push('/')
    }

    render() {
        return (
            <Contact 
                contactInfo = {this.state.contactInfo}
                errors = {this.state.errors}
                changeHandler = {this.changeHandler}
                submitHandler = {this.submitHandler}
                contactResult={this.props.contactResult}
            />
        )
    }
}

ContactUs.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    // console.log(state.contact.contactResult.success)
    return {
        contactResult: state.contact
    }
}

export default connect(mapStateToProps)(ContactUs);