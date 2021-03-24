const coupon = (state={}, action) => {
    switch(action.type) {
        case 'ALL_COUPONS':
            return { ...state, getAllCoupons: action.payload }

        case 'CREATE_COUPON':
            return { ...state, createCoupon: action.payload }

        case 'COUPON_BY_CATEGORY':
            return { ...state, couponByCategory: action.payload }

        case 'DELETE_COUPON':
            return { ...state, deleteCoupon: action.payload }

        default:
            return state
    }
}

export default coupon;