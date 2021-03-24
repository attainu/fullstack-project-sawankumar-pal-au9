import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = (props) => {

    console.log(props)
    const renderProfile = (userDetails) =>{
        if(userDetails) {
            return(
            <>
                <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25"> 
                                                <img src={`${userDetails.imageUrl}`} class="img-radius" alt="User-Profile-Image"/>
                
                                            </div>
                                            <h6 class="f-w-600">{userDetails.name}</h6>
                                            <p>{userDetails.location}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">{userDetails.email}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                    <h6 class="text-muted f-w-400">{userDetails.phone}</h6>
                                                </div>
                                            </div>
                                            {
                                            (userDetails.role !== 'Admin') && 
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
                                            (userDetails.role === 'Admin') && 
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
                                            <div className="float-right">
                                                <button className="edit-button btn btn-default" data-toggle="modal" data-target="#myModal"
                                                name="id" value={userDetails._id}                                        
                                                id={userDetails._id}>Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
        
                 {/* Modal Header */}
                <div className="modal-header">
                    <h4 className="modal-title">Update the User Details</h4>
                    <button type="button" className="close" 
                    data-dismiss="modal"
                    onClick={()=>window.location.reload()}
                    >&times;</button>
                </div>
        
                {/* Modal body */}
                <div className="modal-body">
                    <form action="/editUser" method="POST" id="update_user" enctype="multipart/form-data">
                    <div className="form-group">
                            <label for="name">Id:</label>
                            <input type="text" readonly 
                                className="form-control" 
                                id="update_id"  
                                name="_id" readOnly
                                value={userDetails._id}
                                
                            />
                        </div>
                        
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input 
                                type="text" className="form-control" 
                                id="update_name" placeholder="Enter First name" 
                                name="name" required
                                value={userDetails.name}
                                onChange={(event)=> props.changeDetails(event.target.name,event.target.value)}
                            />
                        </div>                                                             
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input 
                                type="email" className="form-control" 
                                id="update_email" placeholder="Enter Email" 
                                name="email" readOnly
                                value={userDetails.email}
                            />
                        </div>
                        <div className="form-group">
                            <label for="location">Location:</label>
                            <input 
                                type="text" className="form-control" 
                                id="update_location"  
                                name="location" 
                                value={userDetails.location}
                                onChange={(event)=> props.changeDetails(event.target.name,event.target.value)}                                       
                            />
                        </div>
                        <div className="form-group">	
                            <label for="image">Profile Image</label>	
                            <input 	
                                type="file" className="form-control" 	
                                className="form-control" 	
                                name="image"
                                onChange = {(event)=>props.changeDetails(event.target.name,event.target.files[0])}		
                            />	
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone number:</label>                                    
                            <input  
                                type="phone" className="form-control" 
                                id="update_phone"  
                                name="phone" 
                                value={userDetails.phone}
                                onChange={(event)=> props.changeDetails(event.target.name,event.target.value)}
                                />
                            
                        </div>
                        
                    </form>
        
                </div>
        
                 {/* Modal footer  */}
                <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal"
                        onClick={()=>window.location.reload()}>Close</button>
                        <button type="submit" id="update_table" className="btn btn-primary"
                        onClick={(event)=>props.updateUser(event)}>update</button>
                </div>
        
            </div>
        </div>
    </div>
    </>
 )}
        
}
    
    return(
        <div>
            {renderProfile(props.userDetails)}
        </div>        
    )
  
}


export default Profile