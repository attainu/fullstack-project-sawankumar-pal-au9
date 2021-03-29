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
                emptyField:''
            },
            success:''    
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

    blurHandler = (name, value) => {
        let errors = this.state.errors
        var regexNum = /^[0-9]+$/;
        let isValid = regexNum.test(value);

        switch (name) {
            case 'userName':
                if (value === '') {
                    errors[name] = 'Username can not be blank'
                }
                else if (value.length < 3) {
                    errors[name] = 'Username should be more than three letters'
                }
                else {
                    errors[name] = ''
                }              
                break;

            case 'userEmail':
                let lastAtpos = value.lastIndexOf('@')
                let lastDotpos = value.lastIndexOf('.')
                if (value === '') {
                    errors[name] = 'Email can not be blank'
                }

                else if (!(lastAtpos < lastDotpos && lastAtpos > 0 && value.indexOf('@@') === -1 && lastDotpos > 2 && (value.length - lastDotpos) > 2)) {

                    errors[name] = 'Email is not valid'
                }
                else {
                    errors[name] = ''
                }
                break;  

            case 'phone':
                if (value.length < 5) {	
                    errors[name] = 'Field should contain more than 5 digits'	
                }	
                else if (!isValid) {	
                    errors[name] = 'Should contain only number'	
                }	
                else {	
                    errors[name] = ''	
                }	
                break;
            
            case 'comment':
                if (value === '') {
                    errors[name] = 'Comment can not be blank'
                }
                else {
                    errors[name] = ''
                }
                break;

            default:
                break;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let info = this.state.contactInfo;

        if(info.userName !== '' && info.userEmail !== '' && info.phone !== '' && info.comment !== '') {
            this.props.dispatch(submitContacts(this.state.contactInfo));
            this.props.history.push('/')
        }else {
            this.setState({
                errors: { ...this.state.errors, emptyField: "All fields are required." }
            })
        }
    }

    render() {
        return (
            <Contact 
                contactInfo = {this.state.contactInfo}
                errors = {this.state.errors}
                changeHandler = {this.changeHandler}
                submitHandler = {this.submitHandler}
                blurHandler = {this.blurHandler}
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