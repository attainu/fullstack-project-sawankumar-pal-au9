import express from 'express';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import products from './routes/productsRoutes.js';
import orders from './routes/ordersRoutes.js';
import cart from './routes/cartRoutes.js';
import user from './routes/userRoutes.js';
import google from './routes/googleRoutes.js';
import facebook from './routes/facebookRouter.js';
import {strategy} from './controllers/googleController.js';
import deatils from './routes/detailsRoutes.js';
import reviews from './routes/reviewRoutes.js';
import category from './routes/categoryRoutes.js';
import './db/db.js';

const app = express();
const PORT = process.env.PORT || 9800;

//parse data for post call
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.use(session({
  secret:'mySecretToken'
}))

passport.use(strategy);
app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser((user,cb) => {
//   cb(null,user)
// })
// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

app.get('/health', (req,res) => {
  res.send("Health OK!!")
})

app.use('/users', user)
app.use('/products', products);
app.use('/orders', orders);
app.use('/cart', cart);
app.use('/google', google);
app.use('/', facebook);
app.use('/categories', category);
app.use('/details', deatils);
app.use('/reviews', reviews);
app.get("*", (req, res) => {
  res.send("You've tried to reaching a route that doesn't exist.")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})