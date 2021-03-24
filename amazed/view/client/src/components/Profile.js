import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

class Profile extends Component{
    constructor(){
        super()

        this.state={
            userDetails:''
        }
    }

    render(){
        return(
        <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col-xl-6 col-md-12">
                    <div class="card user-card-full">
                        <div class="row m-l-0 m-r-0">
                            <div class="col-sm-4 bg-c-lite-green user-profile">
                                <div class="card-block text-center text-white">
                                    <div class="m-b-25"> 
                                        <img src={`${this.state.userDetails.imageUrl}`} class="img-radius" alt="User-Profile-Image"/>

                                    </div>
                                    <h6 class="f-w-600">{this.state.userDetails.name}</h6>
                                    <p>{this.state.userDetails.location}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="card-block">
                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Email</p>
                                            <h6 class="text-muted f-w-400">{this.state.userDetails.email}</h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Phone</p>
                                            <h6 class="text-muted f-w-400">{this.state.userDetails.phone}</h6>
                                        </div>
                                    </div>
                                    {
                                    (this.state.userDetails.role !== 'Admin') && 
                                    <>
                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Details</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Recent Orders</p>
                                            <h6 class="text-muted f-w-400">
                                                <Link to="/orders" style={{color:"#298EDC"}}>@orders</Link>
                                            </h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Products on Cart</p>
                                            <h6 class="text-muted f-w-400">
                                            <Link to="/cart" style={{color:"#298EDC"}}>@cart</Link>
                                            </h6>
                                        </div>
                                    </div>
                                    </> 
                                    }
                                    {
                                    (this.state.userDetails.role === 'Admin') && 
                                    <>
                                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Details</h6>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Add Coupon</p>
                                            <h6 class="text-muted f-w-400">
                                                <Link to="/create_coupon" style={{color:"#298EDC"}}>@coupons</Link>
                                            </h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Add Products</p>
                                            <h6 class="text-muted f-w-400">
                                            <Link to="/product" style={{color:"#298EDC"}}>@products</Link>
                                            </h6>
                                        </div>
                                    </div>
                                    </> 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }

    componentDidMount(){
        this.setState({
            userDetails:JSON.parse(sessionStorage.getItem('userDetails')),
            
        })

    }
}


export default Profile