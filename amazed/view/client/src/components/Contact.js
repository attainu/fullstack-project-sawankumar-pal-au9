import React from 'react';
const Contact = (props) => {
    return(
        <div className="container">
            <div>
                <h2>Contact Us</h2>
                {/* <div style={{fontSize:"25px",color:"green"}}>
                                <span id="contactSuccess">
                                    <p>{props.contactResult}</p>
                                </span>
                </div> */}
                <section>
                    <div className="w-30 m-auto">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    name="userName" 
                                    autoComplete="off" id="user" 
                                    className="form-control" required
                                    value={props.contactInfo.userName}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <p className="error-display">{props.errors.userName}</p>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    name="userEmail" 
                                    autoComplete="off" id="user" 
                                    className="form-control" required
                                    value={props.contactInfo.userEmail}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <p className="error-display">{props.errors.userEmail}</p>
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input 
                                    type="phone" 
                                    name="phone" 
                                    autoComplete="off" id="phone" 
                                    className="form-control" required
                                    value={props.contactInfo.phone}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <p className="error-display">{props.errors.phone}</p>
                            </div>
                            <div className="form-group">
                                <label>Comment</label>
                                <input 
                                    type="text" 
                                    name="comment" 
                                    autoComplete="off" id="comment" 
                                    className="form-control" required
                                    value={props.contactInfo.comment}
                                    onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <p className="error-display">{props.errors.comment}</p>
                            </div>
                            
                            <button style={{marginBottom:"30px"}} onClick={props.submitHandler} className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Contact;