import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import User from '../model/userModel.js';
import passport from 'passport';

const facebookRouter = express.Router();

facebookRouter.get('/', passport.authenticate('facebook'));

facebookRouter.get('/callback', passport.authenticate('facebook', 
  { failureRedirect: '/login' }), (req, res) => {
    console.log(req.user)
    const token = jwt.sign({id:req.user._id}, config.secret, {expiresIn:86400});
    const userName = req.user.name;
    const email = req.user.email;
    res.redirect(`http://localhost:3000/?token=${token}&${userName}&${email}`);
      
  }
);

export default facebookRouter;