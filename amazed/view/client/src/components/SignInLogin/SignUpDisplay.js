import { Link } from 'react-router-dom';
import './Form.css'
const SignUpDisplay = (props) => {
    // console.log(props)
    const renderHeading = () => {
        if(sessionStorage.getItem('createAdmin')) {
            return (
                <h3 className="font-size">Create Admin</h3>
            );
        }
        else {
            return (
                <h3 className="font-size">Sign Up Form</h3>
            );
        }
    }

    const renderButton = () => {
        if(sessionStorage.getItem('createAdmin')) {
            return (
                <>
                    <div className="form-group">
                        <label className="font-size">User Role</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="userRole"
                            value="Admin"
                            readOnly
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block"
                    onClick= {props.submitHandler}>Create</button>
                </>
            );
        }
        else {
            return (
                <>
                    <button type="submit" className="btn btn-primary btn-block"
                    onClick= {props.submitHandler}>Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to='/signin'>sign in?</Link>
                    </p>
                </>
            );
        }
    }

    return(
        <div className="main-continer">
            <div className="form-class">
            <form className="form-data">
                {renderHeading()}

                <div className="form-group">
                    <label className="font-size">User name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="User name"
                        autoComplete="new-off" 
                        name="userName"
                        value={props.signUpDetails.userName}
                        onChange = {(event)=>props.changeHandler(event.target.name,event.target.value)}
                        onBlur = {(event)=>props.blurHandler(event.target.name,event.target.value)}/>
                        <p className="error-display">{props.signUpDetails.errors.userName}</p>
                </div>

                <div className="form-group">
                    <label className="font-size">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        autoComplete="new-off"
                        name="email"
                        value={props.signUpDetails.email}
                        onChange = {(event)=>props.changeHandler(event.target.name,event.target.value)}
                        onBlur = {(event)=>props.blurHandler(event.target.name,event.target.value)}/>
                        <p className="error-display">{props.signUpDetails.errors.email}</p>
                </div>

                <div className="form-group">
                    <label className="font-size">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        autoComplete="new-off" 
                        name="passWord"
                        value={props.signUpDetails.passWord}
                        onChange = {(event)=>props.changeHandler(event.target.name,event.target.value)}
                        onBlur = {(event)=>props.blurHandler(event.target.name,event.target.value)}/>
                    <p className="error-display">{props.signUpDetails.errors.passWord}</p>
                </div>
                <div style={{fontSize:"16px",color:"red"}}>
                    <span>{props.error}</span>
                </div>

                {renderButton()}
            </form>
        </div>
        </div>
                
    );
}

export default SignUpDisplay;