import prodKeys from './configKeys/prod.js';
import devKeys from './configKeys/dev.js';

let keys;
if(process.env.NODE_ENV === 'production') {
   keys = prodKeys;
}
else {
   keys = devKeys;
}

export default keys;