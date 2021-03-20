import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SignInDisplay from  '../../components/SignInLogin/SignInDisplay';
import { signIn } from '../../actions/actionfile';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            passWord:'',
            email:'',
            success:'',
            errors: {
                email: '',
                passWord: '',
                signinError: ''
            }
        }
    }

    changeHandler = (name,value) => {
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    blurHandler = (name,value)=> {
        console.log(name,value)
    }

    onSubmit = (event)=> {
        // console.log("submitted")
        event.preventDefault()
        // console.log(this.state.email)
        const signInDetails = {
            email: this.state.email,
            password: this.state.passWord
        }
        // console.log(signInDetails)        
        this.props.dispatch(signIn(signInDetails));

        setTimeout(() => {
            if(sessionStorage.getItem('invalidUser')) {
                this.setState({
                    errors: { ...this.state.errors, signinError: "Invalid email or password" }
                })
            }
        }, 500);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.signinStatus && this.state.email) {
            sessionStorage.removeItem('invalidUser');
            sessionStorage.setItem('token', nextProps.signinStatus.token);

            this.setState({
                errors: { ...this.state.errors, signinError: "" },
                success: "Signed In Successfully"
            })
            
            setTimeout(() => {
                this.props.history.push('/user'); 
            }, 1000);
        }
        else {
            this.setState({
                errors: { ...this.state.errors, signinError: "Invalid email or password" }
            })
        } 
    }

    render() {
        return(
            <div>
                <SignInDisplay 
                    userDetails = {this.state}
                    changeHandler = {this.changeHandler}
                    blurHandler = {this.blurHandler}
                    onSubmit = {this.onSubmit}
                    error = {this.state.errors.signinError}
                    success = {this.state.success}
                /> 
            </div>
            
        );
    }
}

SignIn.prototypes = {
    dispatch:propTypes.func
}

const mapStateToProps = (state) => {
    // console.log("state",state.signup.signinStatus)
    return{ 
        signinStatus: state.signup.signinStatus        
    }
}
export default connect(mapStateToProps)(SignIn);