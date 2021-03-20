const category_url = 'http://localhost:9800/categories';
const search_url ='http://localhost:9800/products/category';
const detail_url = 'http://localhost:9800/details';
const review_url = 'http://localhost:9800/reviews';
const order_url = 'http://localhost:9800/order';
const cart_url = 'http://localhost:9800/cart';
const reg_url = 'http://localhost:9800/users/register';
const login_url = 'http://localhost:9800/users/login';
const userinfo_url ="http://localhost:9800/users/profile";
const getAllUser_url = "http://localhost:9800/users";
const subcategory_url = 'http://localhost:9800/subcategories';

export function categories(){
    const output = fetch(category_url, {method:'GET'})
    .then((res) => res.json())
    
    return {
        type: 'CATEGORIES',
        payload: output
    }
}

export function subCategories(categoryNumber){
    const output = fetch(`${subcategory_url}/${categoryNumber}`, {method:'GET'})
    .then((res) => res.json())

    return {
        type: 'SUB_CATEGORIES',
        payload: output
    }
}

export function search(query){
    const output = fetch(`${search_url}/${query}`, {
        method:'GET',
    })
    .then((res) => res.json())

    return {
        type: 'SEARCH',
        payload: output
    }
}

export function detail(asin){
    const output = fetch(`${detail_url}/${asin}`, {
        method:'GET',
    })
    .then((res) => res.json())

    return {
        type: 'DETAIL',
        payload: output
    }
}


export function review(asin){
    const output = fetch(`${review_url}/${asin}`, {
        method:'GET',
    })
    .then((res) => res.json())

    return {
        type: 'REVIEW',
        payload: output
    }
}


export function placeOrder(orderDetails){
    const output = fetch(order_url, {
        method:'POST',
        headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(orderDetails)
                })
    .then((res) => res.json())

    return {
        type: 'ORDER',
        payload: output
    }
}

export function getAllUsers() {
    const output = fetch(getAllUser_url,{method:'GET'})
    .then((res) => res.json())

    return {
        type: 'GET_ALL_USERS',
        payload: output
    }   
}

export function signUp(signUpDetails) {
    const output = fetch(reg_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpDetails)
        })
    .then((res) => res.json())
    .catch((err) => console.log(err))
        
    return {
        type: 'SIGNUP',
        payload: output
    }   
}

export function signIn(signInDetails) {
    const output = fetch(login_url,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(signInDetails)
        })
    .then(resp=>resp.json())
    .catch((err) => {
        console.log(err)
        sessionStorage.setItem('invalidUser', 'Invalid email or password');
    })
    return {
        type: 'SIGNIN',
        payload: output
    }
}

export function userDetails(token) {
    const output = fetch(userinfo_url,{
        method:'GET',
        headers:{
            'x-access-token':token
        }
        })
    .then(resp=>resp.json())
    .catch((SyntaxError) => {
        alert("Invalid UserName");
        console.log(SyntaxError)
        })
    return {
        type: 'USER',
        payload: output
    }
}

export function Admin(){
    const output = fetch(order_url, {method:'GET'})
    .then((res) => res.json())

    return {
        type: 'ADMIN',
        payload: output
    }
}

export function addToCart(cartData) {
    fetch(cart_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartData)
        })
    .then((res) => res.json())
        
    return {
        type: 'ADD_TO_CART',
        payload: 'Added Item into Cart'
    }   
}

export function getFromCart(query){
    const output = fetch(`${cart_url}?email=${query}`, 
        {method:'GET'})
    .then((res) => res.json())
    .catch((err) => console.log(err))

    return {
        type: 'GET_FROM_CART',
        payload: output
    }
}

export function removeFromCart(id){
    fetch(`${cart_url}/${id}`, {
        method:'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))

    return {
        type: 'REMOVE_FROM_CART',
        payload: 'Removed Item From Cart'
    }
}

export function GetMyOrders(query){
    const output = fetch(`${order_url}?${query}`, 
        {method:'GET'})
    .then((res) => res.json())
    .catch((err) => console.log(err))

    return {
        type: 'USER_ORDER',
        payload: output
    }
}

export function cancelOrder(id){
    fetch(`${order_url}/${id}`, {
        method:'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))

    return {
        type: 'CANCEL_ORDER',
        payload: 'Order is cancelled'
    }
}