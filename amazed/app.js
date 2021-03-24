import express from 'express';
import cors from 'cors';
import session, { Session } from 'express-session';
import category from './routes/categoryRoutes.js';
import products from './routes/productsRoutes.js';
import deatils from './routes/detailsRoutes.js';
import reviews from './routes/reviewRoutes.js';
import orders from './routes/ordersRoutes.js';
import cart from './routes/cartRoutes.js';
import user from './routes/userRoutes.js';
import subCategory from './routes/subCategoryRoutes.js';
import coupons from './routes/couponsRoutes.js';
import contacts from './routes/contactsRoutes.js';
import passport from 'passport';
import google from './routes/googleRoutes.js';
import facebook from './routes/facebookRouter.js';
import { G_Strategy } from './controllers/googleController.js';
import { F_Strategy } from './controllers/facebookController.js';
import './db/db.js';

const app = express();
const PORT = process.env.PORT || 9800;

//parse data for post call
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

//creating session
app.use(session({
  'secret': 'amazed'
}));

//start passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(G_Strategy);
passport.use(F_Strategy);

passport.serializeUser((user, cb) => {
    cb(null,user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Health check
app.get('/health', (req,res) => {
  res.send("Health OK!!")
})

app.use('/users', user);
app.use('/categories', category);
app.use('/products', products);
app.use('/details', deatils);
app.use('/reviews', reviews);
app.use('/orders', orders);
app.use('/cart', cart);
app.use('/coupons', coupons);
app.use('/subcategories', subCategory);
app.use('/auth/google', google);
app.use('/auth/facebook', facebook);
app.use('/contacts', contacts);

app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('./view/client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__diename, 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})