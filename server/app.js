import express from 'express';
import cors from 'cors';
import category from './routes/categoryRoutes.js';
import products from './routes/productsRoutes.js';
import deatils from './routes/detailsRoutes.js';
import reviews from './routes/reviewRoutes.js';
import orders from './routes/ordersRoutes.js';
import cart from './routes/cartRoutes.js';
import user from './routes/userRoutes.js';
import passport from 'passport';
import google from './routes/googleRoutes.js';
import facebook from './routes/facebookRouter.js';
import {strategy} from './controllers/googleController.js';
import './db/db.js';

const app = express();
const PORT = process.env.PORT || 9800;

//parse data for post call
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

//start passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
    cb(null,user);
});

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
app.use('/google', google);
app.use('/facebook', facebook);

app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})