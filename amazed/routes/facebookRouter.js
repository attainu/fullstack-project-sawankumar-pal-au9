import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import passport from 'passport';

const facebookRouter = express.Router();

facebookRouter.get('/', passport.authenticate('facebook'));

facebookRouter.get('/callback', passport.authenticate('facebook', 
  { failureRedirect: '/login' }), (req, res) => {
    const token = jwt.sign({id:req.user._id}, config.secret, {expiresIn:86400});
    const userName = req.user.name;
    const email = req.user.email;
    res.redirect(`/?token=${token}&${userName}&${email}`);
  }
);

export default facebookRouter;