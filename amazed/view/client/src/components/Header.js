import React from 'react';
import './Header.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { categories, subCategories } from '../actions/actionfile';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            categories: [],
            subCategories: [],
            loggedIn: false
        }
    }

    componentDidMount() {
        this.props.dispatch(categories());
        this.setState({
            userName: sessionStorage.getItem('userName')
        })
    }

    componentDidUpdate() {
        let user = sessionStorage.getItem('userName');

        if(user && !this.state.loggedIn) {
            this.setState({
                userName: user,
                loggedIn: true
            });
        }  
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            categories: nextProps.categories,
            subCategories: nextProps.subCategories
        })
    }

    renderLogo = () => {
        if(sessionStorage.getItem('role') === 'Admin') {
            return (
                <span className="brandlink">
                    <Link to='/admin' className="navbar-brand"><b id="brand">amazed</b>.in</Link>
                </span>
            );
        }else {
            return (
                <span className="brandlink">
                    <Link to='/' className="navbar-brand"><b id="brand">amazed</b>.in</Link>
                </span>
            );
        }
    }

    renderTogBtn = (e) => {
        e.preventDefault();
        let navBtns = document.querySelector('#navBtns');
        if(navBtns.style.display === "none") {
            navBtns.style.display = "block";
        }else {
            navBtns.style.display = "none";
        }
    }

    checkForUserType = () => {
        if(sessionStorage.getItem('role') === 'Admin') {
            return (
                <>
                    <li>
                        <button className="headerBtn">
                            <Link style={{textDecoration:'none', color:'white'}} to="/admin">
                                <i className="fa fa-user"></i> Admin
                            </Link>
                        </button>
                    </li>

                    <li>
                        <button className="headerBtn">
                            <Link style={{textDecoration:'none', color:'white'}} to="/coupon">
                                <i className="fa fa-tag"></i> Coupons
                            </Link>
                        </button>
                    </li>

                    <li>
                        <button className="headerBtn">
                            <Link style={{textDecoration:'none', color:'white'}} to="/app_products">
                                <i className="fa fa-product-hunt"></i> Products
                            </Link>
                        </button>
                    </li>
                </>
            );
        }else {
            return (
                <>
                    <li>
                        <button className="headerBtn">
                            <Link style={{textDecoration:'none', color:'white'}} to="/customer_orders">
                                <i className="fa fa-list" aria-hidden="true"></i> Orders
                            </Link>
                        </button>
                    </li>

                    <li>
                        <button className="cart">
                            <Link style={{textDecoration:"none", color:'white'}} to="/customer_cart">
                                <i className="fa fa-cart-plus"></i> Cart
                            </Link>
                        </button>
                    </li>

                    <li>
                        <button className="headerBtn">
                            <Link style={{textDecoration:'none', color:'white'}} to="/usercoupon">
                                <i className="fa fa-tag"></i> Coupons
                            </Link>
                        </button>
                    </li>
                </>
            );
        }
    }

    handleLogout = () => {   
        this.setState({
            userName: '',
            loggedIn: false
        });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('loggedInEmail');
        sessionStorage.removeItem('userDetails');
        sessionStorage.removeItem('asin');
        sessionStorage.removeItem('clogin');
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('categoryNumber');
        sessionStorage.removeItem('createAdmin');
        sessionStorage.removeItem('userDetails');
        sessionStorage.removeItem('productData');
        sessionStorage.removeItem('transaction');
        sessionStorage.removeItem('orderDetails');
        this.props.history.push('/signin');
    }

    CondtionalRender = () => {
        if(sessionStorage.getItem('userName') === null){
            return(
                <ul className="nav navbar-nav navbar-right" id="signinBtn">
                    <li>
                        <button className="auth">
                            <Link style={{textDecoration:'none', color: 'white'}} to="/signin">
                            <i className="fa fa-sign-in"></i> Sign In/Up</Link>
                        </button>
                    </li>
                </ul>
            );
        }
        else {
            return(
                <ul className="nav navbar-nav navbar-right" id="navBtns">
                    {this.checkForUserType()} 

                    <li>	
                        <button className="auth">	
                            <Link style={{textDecoration:"none", color:'white'}} to="/profile">
                                <i className="fa fa-user-plus"></i> Profile
                            </Link>	
                        </button>	
                    </li>  

                    <li>
                        <button className="auth" onClick={this.handleLogout}>
                            <i className="fa fa-sign-out"></i>SignOut
                        </button>
                    </li>
                </ul>
            ) 
        }

    }

    getSubCategories = (e) => {
        sessionStorage.setItem('categoryNumber', e.target.value);
        this.props.dispatch(subCategories(e.target.value));
    }

    renderCategoryOptions = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return (
                    <option 
                        id={item.categoryNumber}
                        value={item.categoryNumber}
                        key={item._id}
                    >
                        {item.category}
                    </option>
                );
            })
        }
    }

    renderSubCategoriesOptions = (data) => {
        if(data) {
            return data.map(item => {
                return (
                    <option 
                        value={`${item.categoryNumber}/${item.product}/${item.type}`}
                        key={item._id}
                    >
                        {item.subCategory}
                    </option>
                );
            })
        }
    }

    renderSearch = (e) => {
        const [categoryNumber, product, type] = e.target.value.split('/');
        const category = document.getElementById(categoryNumber).innerText;
        this.props.history.push(`/search/?category=${category}&product=${product}&type=${type}`);
        document.getElementsByClassName('default_opt')[0].selected = true;
        document.getElementsByClassName('default_opt')[1].selected = true;
    }
    
    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse" style={{borderRadius:"0px"}}>
                    <div className="container-fluid">
                        <div className="navbar-header navHeader">
                            {this.renderLogo()}  
                            {
                                sessionStorage.getItem('userName') &&
                                <div className="toggleBtn">
                                    <button className="navTogBtn" onClick={this.renderTogBtn}>
                                        <i className="fa fa-bars"></i>
                                    </button>
                                </div> 
                            }                    
                        </div>

                        {this.CondtionalRender()}    
                    </div>

                    {
                        sessionStorage.getItem('role') !== 'Admin' &&

                        <center>
                            <div className="search form-group col-md-offset-3 col-md-3 col-sm-8">
                                <select id="category" defaultValue="default" className="form-control" onChange={this.getSubCategories}>
                                    <option className="default_opt" value="default" disabled>Select Category</option>
                                    { this.renderCategoryOptions(this.state.categories) }
                                </select>
                            </div>

                            <div className="search form-group col-md-3 col-sm-8">
                                <select className="form-control" defaultValue="default" onChange={this.renderSearch}>
                                    <option className="default_opt" value="default" disabled>Select Sub-Category</option>
                                    { this.renderSubCategoriesOptions(this.state.subCategories) }
                                </select>
                            </div>
                        </center>
                    }
                </nav>
            </header>
        );
    }
}

Header.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.Categories,
        subCategories: state.category.SubCategories
    }
};

export default connect(mapStateToProps)(withRouter(Header));