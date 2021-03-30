import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SignInDisplay from  '../../components/SignInLogin/SignInDisplay';
import { signIn } from '../../actions/actionfile';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            password:'',
            email:'',
            success:'',
            errors: {
                email: '',
                password: '',
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
        let errors = this.state.errors;
        switch (name) {
            case 'email':	
                let lastAtpos = value.lastIndexOf('@')	
                let lastDotpos = value.lastIndexOf('.')	
                if (value === '') {	
                    errors[name] = 'Field can not be blank'	
                }	
                else if (!(lastAtpos < lastDotpos && lastAtpos > 0 && value.indexOf('@@') === -1 && lastDotpos > 2 && (value.length - lastDotpos) > 2)) {	
                    errors[name] = 'Email is not valid'	
                }	
                else {	
                    errors[name] = ''	
                }	
                break;	

            case 'password':
                if (value.length < 8) {	
                    errors[name] = 'Password should have atleast 8 characters'
                }else {	
                    errors[name] = ''	
                }	
                break;

            default:	
                break;
        }
        this.setState({	
            errors, [name]: value	
        })
    }

    onSubmit = (event)=> {
        event.preventDefault();
        
        const signInDetails = {
            email: this.state.email,
            password: this.state.password
        }
              
        this.props.dispatch(signIn(signInDetails));
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.signinStatus && nextProps.signinStatus.auth && this.state.email) {
            sessionStorage.removeItem('invalidUser');
            sessionStorage.setItem('token', nextProps.signinStatus.token);

            this.setState({
                errors: { ...this.state.errors, signinError: "" },
                success: "Signed In Successfully"
            })
            
            setTimeout(() => {
                this.props.history.push('/getUser'); 
            }, 1000);
        }
        else {
            sessionStorage.setItem('invalidUser', true);

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
    return{ 
        signinStatus: state.signup.signinStatus        
    }
}
export default connect(mapStateToProps)(SignIn);