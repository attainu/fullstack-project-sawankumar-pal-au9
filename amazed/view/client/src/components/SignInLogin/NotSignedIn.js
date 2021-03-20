import { Link } from 'react-router-dom';

const NotSignedIn = () => {
    return (
        <div className="container-fluid">
            <div className="panel panel-danger">
                <div className="panel-heading text-center">
                    <h3> SignIn Alert! </h3>
                </div>
                <div className ="panel-body">
                    <h4 className="text-info">You Are Not Signed In.<br/><br/>
                    Please Sign In To Proceed.</h4>
                    <Link to="/signin"><button className="btn btn-primary">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
}

export default NotSignedIn;