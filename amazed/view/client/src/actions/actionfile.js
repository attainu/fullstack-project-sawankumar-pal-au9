const category_url = '/categories';
const product_url = '/products';
const detail_url = '/details';
const review_url = `/reviews`;
const order_url = '/orders';
const cart_url = '/cart';
const subcategory_url = '/subcategories';
const coupon_url = '/coupons';
const contact_url = '/contacts';
const user_url = '/users';

//get all categories
export function categories(){
    const output = fetch(category_url, {method:'GET'})
    .then((res) => res.json())
    
    return {
        type: 'CATEGORIES',
        payload: output
    }
}

//get all subCategories
export function allSubCategories(){
    const output = fetch(subcategory_url, {method:'GET'})
    .then((res) => res.json())

    return {
        type: 'ALL_SUB_CATEGORIES',
        payload: output
    }
}

//get subCategories
export function subCategories(categoryNumber){
    const output = fetch(`${subcategory_url}/${categoryNumber}`, {method:'GET'})
    .then((res) => res.json())

    return {
        type: 'SUB_CATEGORIES',
        payload: output
    }
}

//get all products
export function allProducts(){
    const output = fetch(`${product_url}`, 
        {method:'GET'})
    .then(res => res.json())

    return {
        type: 'ALL_PRODUCTS',
        payload: output
    }
}

//get products based on conditions
export function search(query){
    const output = fetch(`${product_url}/category/${query}`, {
        method:'GET',
    })
    .then((res) => res.json())

    return {
        type: 'SEARCH',
        payload: output
    }
}

//create product 
export function createProduct(productData){
    const output = fetch(product_url,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(res => res.json())

    return {
        type: 'CREATE_PRODUCT',
        payload: output
    }
}

//delete product 
export function deleteProduct(id){
    const output = fetch(`${product_url}/${id}`, 
        {method:'DELETE'})
    .then(res => res.json())

    return {
        type: 'DELETE_PRODUCT',
        payload: output
    }
}

//get product details based on asin
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

//get product reviews based on asin
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

//posting order data
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

//posting signup data
export function signUp(signUpDetails) {
    const output = fetch(`${user_url}/register`, {
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

//posting sigin details to get token
export function signIn(signInDetails) {
    const output = fetch(`${user_url}/login`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(signInDetails)
        })
    .then(res => res.json())
    .catch((err) => {
        console.log(err);
    })
    return {
        type: 'SIGNIN',
        payload: output
    }
}

//get user details
export function userDetails(token) {
    const output = fetch(`${user_url}/profile`,{
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

//get all users
export function getAllUsers() {
    const output = fetch(user_url,{method:'GET'})
    .then((res) => res.json())

    return {
        type: 'GET_ALL_USERS',
        payload: output
    }   
}

//update user profile
export function updateProfile(userDetails){	
    const id = userDetails._id
    const output = fetch(`${user_url}/${id}`, {	
        method:'PUT',	
        headers: {	
                    'Accept':'application/json',	
                    'Content-Type':'application/json'	
                },	
                body: JSON.stringify(userDetails)	
                })	
    .then((res) => res.json())	
    return {	
        type: 'UPDATE_USER',		
        payload: "successfully updated the profile"	
    }	
}

//get all orders placed by users
export function Admin(){
    const output = fetch(`${order_url}/all`, {method:'GET'})
    .then((res) => res.json())

    return {
        type: 'ADMIN',
        payload: output
    }
}

//add product to cart
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

//get product from cart
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

//remove product from cart
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

//get all orders of paricular user
export function GetMyOrders(query){
    const output = fetch(`${order_url}/?${query}`, 
        {method:'GET'})
    .then((res) => res.json())
    .catch((err) => console.log(err))

    return {
        type: 'USER_ORDER',
        payload: output
    }
}

//cancel or delete order from users order list
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

//get coupons based on category
export function coupon(asin){	
    const output = fetch(`${coupon_url}/category?${asin}`, {	
        method:'GET',	
    })	
    .then((res) => res.json())	
    return {	
        type: 'COUPON',	
        payload: output	
    }	
}

//create coupon
export function createCoupon(couponData){
    const output = fetch(coupon_url,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(couponData)
    })
    .then(res => res.json())

    return {
        type: 'CREATE_COUPON',
        payload: output
    }
}

//get all coupons 
export function getAllCoupons(){
    const output = fetch(coupon_url, 
        {method:'GET'})
    .then(res => res.json())
    .catch(err => console.log(err))

    return {
        type: 'ALL_COUPONS',
        payload: output
    }
}

//get coupons based on categoryNumber
export function getCouponByCategory(number){
    const output = fetch(`${coupon_url}/category/?categoryNumber=${number}`,
        {method:'GET'})
    .then(res => res.json())
    .catch(err => console.log(err))

    return {
        type: 'COUPON_BY_CATEGORY',
        payload: output
    }
}

//delete coupon
export function deleteCoupon(id){
    const output = fetch(`${coupon_url}/${id}`, 
        {method:'DELETE'})
    .then(res => res.json())
    .catch(err => console.log(err))

    return {
        type: 'DELETE_COUPON',
        payload: output
    }
}

//update coupon by adding user email
export function updateCoupon(id, data){
    const output = fetch(`${coupon_url}/${id}`,{ 
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    return {
        type: 'UPDATE_COUPON',
        payload: output
    }
}

//post contact details
export function submitContacts(contactDetails){	
    const output = fetch(contact_url, {	
        method:'POST',	
        headers: {	
                    'Accept':'application/json',	
                    'Content-Type':'application/json'	
                },	
                body: JSON.stringify(contactDetails)	
                })	
    .then((res) => res.json())	
    return {	
        type: 'CONTACT',		
        payload: output	
    }	
}