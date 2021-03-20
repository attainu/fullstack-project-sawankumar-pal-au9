import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../container/Home';
import Search from '../container/Search';
import Detail from '../container/Detail';
import About from './About';
import Contact from './Contact';
import PlaceOrder from '../container/PlaceOrder';
import Cart from '../container/Cart';
import SignIn from '../container/SignInLogin/SignIn';
import SignUp from '../container/SignInLogin/SignUp';
import Dashboard from '../container/AdminDashboard';
import GetUser from '../container/SignInLogin/GetUser';
import Myorder from '../container/Myorder';
import NotSignedIn from './SignInLogin/NotSignedIn';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path='/buynow' component={PlaceOrder}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/orders' component={Myorder}/>
            <Route path='/admin' component={Dashboard}/>
            <Route path='/user' component={GetUser}/>
            <Route path='/notSignedIn' component={NotSignedIn}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routing;