import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUpDisplay from '../../components/SignInLogin/SignUpDisplay';
import { signUp } from '../../actions/actionfile';
class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            userName:'',
            email:'',
            password:'',
            image:'',	
            imageUrl: '',	
            phone:'',	
            location:'',
            errors: {
                userName: '',
                email: '',
                password: '',
                phone: '',
                location: '',
                emptyField: ''
            },
            success: ''
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.signupMessage && nextProps.signupMessage.auth === false) {
            this.setState({	
                errors: { 
                    ...this.state.errors, 
                    emptyField: "This email is already registerd with us.Please login with the same email and password or register with a new email"
                }	
            });
        }else if(nextProps.signupMessage && nextProps.signupMessage.auth) {
            this.setState({
                errors: { 
                    ...this.state.errors, 
                    emptyField: "success" 
                }	
            });

            setTimeout(() => {
                if(sessionStorage.getItem('createAdmin')){	
                    alert("Admin Created Successfully!");	
                    this.props.history.push('/admin');	
                }	
                else{	
                    this.props.history.push('/signin');	
                }	
            }, 2000)
        }
    }


    changeHandler = (name,value) => {
        this.setState({
            ...this.state,
            [name]:value            
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

            case 'password':
                if (value === '') {
                    errors[name] = 'Password can not be blank'
                }
                else if (value.length < 8) {
                    errors[name] = 'Password should be more than eight letters'
                }
                else {
                    errors[name] = ''
                }
                break;
            case 'email':
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

            default:
                break;
        }
    }

    submitHandler = async(event) => {	
        event.preventDefault()	
        console.log("state>>>>>>>>>>",this.state)	
    
        try{	
            if(this.state.image) {
                const data = new FormData()	
                data.append("file",this.state.image)	
                data.append("upload_preset","image-uploader")	
                data.append("clone_name","sunitta")	
                console.log(data)	

                const resp = await fetch('https://api.cloudinary.com/v1_1/sunitta/image/upload',{	
                method:'POST',	
                body:data	
                })	
                const respdata = await resp.json();	
                this.setState({ 	
                    ...this.state,           	
                    imageUrl:respdata.url
                })	
            }
            
            const userData = {	
                name: this.state.userName,	
                email: this.state.email,	
                password: this.state.password,	
                role: sessionStorage.getItem('createAdmin')?"Admin":"User",	
                phone:this.state.phone,	
                location:this.state.location,	
                imageUrl:this.state.imageUrl	
            }	

            if (this.state.errors.userName !== '' || this.state.errors.email !== ''	
                || userData.name === ''	|| userData.email === '' || 
                userData.password === '') {	
            
                this.setState({	
                    errors: { ...this.state.errors, 
                        emptyField: "UserName Email and Password should be correct and are required fields."
                    }	
                });	
            }	

            else if (this.state.errors.password !== '') {
                this.setState({	
                    errors: { ...this.state.errors, 
                        emptyField: this.state.errors.password
                    }	
                });
            }
                
            else{		
                this.props.dispatch(signUp(userData));	
            }	   	
        }	
        catch (err) {	
            console.log(err);	
        }	
    }

    render() {
        return(            
            <SignUpDisplay 
            signUpDetails = {this.state} 
            changeHandler = {this.changeHandler}
            blurHandler = {this.blurHandler}
            submitHandler = {this.submitHandler}
            error = {this.state.errors.emptyField}/>               
            
        );
    }
}

SignUp.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        signupMessage: state.signup.signupStatus
    }
}
export default connect(mapStateToProps)(SignUp);