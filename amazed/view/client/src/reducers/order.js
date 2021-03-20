const order = (state={},action) => {
    switch (action.type) {
        case 'ORDER':
            return { ...state, orderStatus: action.payload }
        
        case 'ADMIN':
            return { ...state, allOrders: action.payload }
        
        case 'USER_ORDER':
            return { ...state, myOrder: action.payload }

        case 'GET_FROM_CART':
            return { ...state, userCartData: action.payload }

        case 'ADD_TO_CART':
            return { ...state, addedItem: action.payload }

        case 'CANCEL_ORDER':
            return { ...state, cancelOrder: action.payload }
        
        default:
            return state   
    }
}

export default order;