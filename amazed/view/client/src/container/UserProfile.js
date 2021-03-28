import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateProfile } from '../actions/actionfile';
import Profile from '../components/Profile';

class UserProfile extends React.Component{
    constructor(){
        super()

        this.state={
            userDetails:'',
            image:'',
            successStatus:''
        }
    }

    componentDidMount(){
        this.setState({
            userDetails: JSON.parse(sessionStorage.getItem('userDetails'))            
        })
    }

    changeDetails = (name,value) => {
        this.setState({
            userDetails:{
                ...this.state.userDetails,
                [name]:value
            }
            
        })
    }

    changeImage = (name,value) => {
        this.setState({
            [name]:value
            
        })
    }

    updateUser = async(event) => {
        event.preventDefault();
        if(this.state.userDetails.imageUrl !== this.state.image && event.target.name !== "closeModal") {
            const data = new FormData()	
            data.append("file",this.state.image)
            data.append("upload_preset","image-uploader")	
            data.append("clone_name","sunitta")	
            console.log(data)	
            try{	
                const resp = await fetch('https://api.cloudinary.com/v1_1/sunitta/image/upload',
                {	
                method:'POST',	
                body:data	
                })
                const respdata = await resp.json();	
                this.setState({
                    userDetails:{
                        ...this.state.userDetails,
                        imageUrl:respdata.url
                    }  
                })
            }

            catch (err) {	
                this.setState({error:"Invalid User details"})	
            }
        }
        	
        const userData = {
            _id: this.state.userDetails._id,	
            name: this.state.userDetails.name,	
            email: this.state.userDetails.email,	
            role: this.state.userDetails.role,	
            phone:this.state.userDetails.phone,	
            location:this.state.userDetails.location,	
            imageUrl:this.state.userDetails.imageUrl,
            isActive:this.state.userDetails.isActive	
        }

        if(event.target.name !== "closeModal") {
            sessionStorage.setItem('userDetails',JSON.stringify(userData))
            sessionStorage.setItem('userName',JSON.stringify(userData.name))
        }
        
        this.setState({
            userDetails: JSON.parse(sessionStorage.getItem('userDetails'))
        })
        

        this.props.dispatch(updateProfile(this.state.userDetails));
    }
   	
    render(){
        return(
            <Profile 
                userDetails = {this.state.userDetails}
                changeDetails = {this.changeDetails}
                changeImage = {this.changeImage}
                updateUser = {this.updateUser}
            />
        );
    }
}

UserProfile.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        successStatus: state.signup.updatedDetails
    }
}
export default connect(mapStateToProps)(UserProfile)