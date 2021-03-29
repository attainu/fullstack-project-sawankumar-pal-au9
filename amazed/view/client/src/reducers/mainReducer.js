import { combineReducers } from 'redux';
import category from './category';
import search from './search';
import order from './order';
import signup from './signup';
import coupon from './coupon';
import contact from './contact';

const rootReducer = combineReducers({
    category,
    search,
    order,
    signup,
    coupon,
    contact      
});

export default rootReducer;