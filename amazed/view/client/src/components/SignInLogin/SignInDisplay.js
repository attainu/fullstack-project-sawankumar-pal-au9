import './Form.css';
import { Link } from 'react-router-dom';
const SignInDisplay = (props) => {
    
    return (
        <div className="main-continer">
        <div className="form-class">
            <form className="form-data">
                <h3 className="font-size">Sign In Form</h3>

                <div className="form-group">
                    <label className="font-size">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        name="email"
                        value={props.userDetails.email}
                        onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                        onBlur={(event) => props.blurHandler(event.target.name, event.target.value)}
                    />
                    <p className="error-display">{props.userDetails.errors.email}</p>
                </div>

                <div className="form-group">
                    <label className="font-size">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        name="password"
                        value={props.userDetails.password}
                        onChange={(event) => props.changeHandler(event.target.name, event.target.value)}
                        onBlur={(event) => props.blurHandler(event.target.name, event.target.value)}
                    />
                    <p className="error-display">{props.userDetails.errors.password}</p>
                </div>

                <div style={{fontSize:"16px",color:"red"}}>
                    <span>{props.error}</span>
                </div>

                <div style={{fontSize:"16px",color:"green"}}>
                    <span>{props.success}</span>
                </div>

                <button type="submit" className="btn btn-warning btn-block"onClick={props.onSubmit}>Sign In</button>

                <p className="forgot-password text-right">Not a member? <Link to='/signup' style={{color:"dodgerblue"}}>sign up</Link>
                </p>    
            </form>

            <center>
                <p><b>-- or --</b></p>
                <button className="btn btn-light authBtn1">
                    <a 
                        href="/auth/google"
                        style={{textDecoration:"none", color:"black"}}
                    >
                        SIGN IN WITH GOOGLE
                    </a>
                </button><br/><br/>

                <button className="btn btn-primary authBtn2" style={{marginBottom:"10px"}}>
                    <a 
                        href="/auth/facebook"
                        style={{textDecoration:"none", color:"white"}}
                    >
                        SIGN IN WITH FACEBOOK
                    </a>
                </button>
            </center>
        </div>
        </div>
        
    );
}

export default SignInDisplay;