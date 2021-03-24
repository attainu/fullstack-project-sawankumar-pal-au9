import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUpDisplay from '../../components/SignInLogin/SignUpDisplay';
import { signUp, getAllUsers } from '../../actions/actionfile';
class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            userName:'',
            email:'',
            passWord:'',
            image:'',	
            imageUrl: '',	
            phone:'',	
            location:'',
            errors: {
                userName: '',
                email: '',
                passWord: '',
                emptyField: ''
            }
        }
    }

    componentDidMount() {
        this.props.dispatch(getAllUsers())
    }


    changeHandler = (name,value) => {
        console.log("frmchange",name,value)	
        // this.blurHandler(name, value)
        this.setState({
            ...this.state,
            [name]:value            
        })
    }

    blurHandler = (name,value) => {
        let errors = this.state.errors
        switch (name) {
            case 'userName':
                if (value === '') {
                    errors[name] = 'Username can not be blank'
                }
                else if (value.length < 5) {
                    errors[name] = 'Username should be more than five letters'
                }
                else {
                    errors[name] = ''
                }              
                break;
            case 'passWord':
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
            default:
                break;
        }
    }

    submitHandler = async(event) => {	
        event.preventDefault()	
        console.log("state>>>>>>>>>>",this.state)	
        	
        const data = new FormData()	
        data.append("file",this.state.image)	
        data.append("upload_preset","image-uploader")	
        data.append("clone_name","sunitta")	
        console.log(data)	
        try{	
            const resp = await fetch('https://api.cloudinary.com/v1_1/sunitta/image/upload',{	
            method:'POST',	
            body:data	
        })	
        const respdata = await resp.json();	
        this.setState({ 	
            ...this.state,           	
            imageUrl:respdata.url})	
        const userData = {	
            name: this.state.userName,	
            email: this.state.email,	
            password: this.state.passWord,	
            role: sessionStorage.getItem('createAdmin')?"Admin":"User",	
            phone:this.state.phone,	
            location:this.state.location,	
            imageUrl:this.state.imageUrl	
        }	
        if (this.state.errors.userName !== '' || this.state.errors.email !== ''	
            || this.state.errors.passWord !== ''  || userData.name === ''	
            || userData.email === '' || userData.password === '') {	
    	
            this.setState({	
                errors: { ...this.state.errors, emptyField: "All fields are required and should have proper entries." }	
            });	
        }	
        	
        else{	
            // console.log("USER detail>>>>>>>>>>",JSON.stringify(userDetails))	
            const userDetails = this.props.allUsersDetails	
            console.log(userDetails)	
            const filteredUserData = userDetails.filter((user) => {	
               return (user.email === this.state.email)	
            })	
            console.log(filteredUserData)	
            if(filteredUserData.length > 0) {	
                alert("This email is already registerd with us.Please login with the same email and password or register with a new email");	
                this.setState({	
                    userName:'',	
                    email:'',	
                    passWord:'',	
                })	
                this.props.history.push('/signup');	
            }	
            else{	
                this.props.dispatch(signUp(userData));	
                if(sessionStorage.getItem('createAdmin')){	
                    alert("Admin Created Successfully!");	
                    this.props.history.push('/admin');	
                }	
                else{	
                    this.props.history.push('/signin');	
                }	
            }       	
        }	
        	
    }	
    catch (err) {	
        this.setState({error:"Invalid User details"})	
    }	
    }

    render() {
        // console.log(this.props.signup.signupStatus)
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
        allUsersDetails : state.signup.allusers
    }
}
export default connect(mapStateToProps)(SignUp);