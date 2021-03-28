import express from "express";
import jwt from 'jsonwebtoken';
import config from '../config.js';
import passport from 'passport';

const googleRouter = express.Router();

// Request data from google
googleRouter.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// when done with google it comes to this
googleRouter.get('/callback', passport.authenticate('google', 
    { failureRedirect: '/login' }), (req, res) => {
        console.log(req.user)
        const token = jwt.sign({id:req.user._id}, config.secret, {expiresIn:86400});
        const userName = req.user.name;
        const email = req.user.email;
        res.redirect(`/?token=${token}&${userName}&${email}`);
});

export default googleRouter;