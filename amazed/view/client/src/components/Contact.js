const Contact = (props) => {
    const redirect = (e) => {
        e.preventDefault();
        
        const user = document.getElementById("user");
        const email = document.getElementById("email");
        const number = document.getElementById("number");
        const comment = document.getElementById("comment");
        if(user.value && email.value && number.value && comment.value) {
            // alert("Your Query Submitted Successfully...!")
            document.getElementById("contactSuccess").innerHTML = "Your Query Submitted Successfully...!";
            setTimeout(() => {
                props.history.push('/');
            }, 1000);
        }
    }

    return(
        <div className="container">
            <div>
                <h2>Contact Us</h2>
                <section>
                    <div className="w-30 m-auto">
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="user" autoComplete="off" id="user" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="user" autoComplete="off" id="email" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="number" name="user" autoComplete="off" id="number" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>Comment</label>
                                <textarea rows="6" id="comment" className="form-control" required></textarea>
                            </div>
                            <div style={{fontSize:"16px",color:"green"}}>
                                <span id="contactSuccess"></span>
                            </div>
                            <button style={{marginBottom:"30px"}} onClick={redirect} className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Contact;