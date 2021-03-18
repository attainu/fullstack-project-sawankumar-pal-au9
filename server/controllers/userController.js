import express from "express";
import session from 'express-session';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';
import config from '../config.js';

export const getAll = (req,res) => {
    User.find({}, (err,result) => {
        if(err) return res.status(500).send("Error")
        res.status(200).send(result)
    })
}

export const register = (req,res) =>{
    // console.log(req.body)
    const hashedPass = bcrypt.hashSync(req.body.password,8)
    const status = req.body.isActive;
    // console.log(">>>>>>>>>>",status)
    let toBool = (status) => {
        if(status === 'true'){
            return status= true
         }
         else{
             return status = false
         }

    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedPass,
        role:req.body.role?req.body.role:'User',
        isActive: status

    }, (err,result) => {
        if(err) return res.status(500),send('Error')
        res.status(200).send("Registration successful")
    })
}

export const login = (req,res) => {
    User.findOne({email:req.body.email}, (err,result) =>{
        if(err) return res.status(500).send({auth:false,"err":"Error while loging In"})
        if(!result) return res.status(500).send({auth:false,"err":"No User found,please resgister"})
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,result.password)
            if(!passIsValid) return res.status(500).send({auth:false,"err":"Invalid Password"})
            const token = jwt.sign({id:result._id},config.secret,{expiresIn:86400})
            req.session.user = result
            req.session.save();
            res.send({auth:true,token:token})
        }
    })
}

export const profile = (req,res) =>{
    if(!req.session.user) {
        return res.redirect('/?errmsg=No Session Found! Please Login Again')
    }
    const token = req.headers['x-access-token'];
    if(!token) return res.status(500).send({auth:false, "err": "No token given"})
    jwt.verify(token,config.secret, (err,data) => {
        if(err) return res.status(500).send({auth:false,"err":"Invalid Token"})
        User.findById(data.id,{password:0}, (err,result) => {
            if(err) return res.status(500).send({auth:false,"err":"No user found"})
            // console.log(result)
            res.status(200).send(result)
        })
    })
}

export const profileById = (req,res) =>{
    if(!req.session.user) {
        return res.redirect('/?errmsg=No Session Found! Please Login Again')
    }
    const Id = req.params.id
    User.findById(Id, (err,result) => {
        if(err) return res.status(500).send({"err":"Error while fetching the data"})
        if(!result) return res.status(500).send({"err":"No data found"})
        res.status(200).send(result)
    })
}

export const updateUser = (req,res) => {
    if(!req.session.user) {
        return res.redirect('/?errmsg=No Session Found! Please Login Again')
    }
    const Id = req.params.id
    const status = req.body.isActive;
    let toBool = (status) => {
        if(status === 'true'){
            return status= true
         }
         else{
             return status = false
         }

    }
    // console.log("nesstatus",status)
    User.updateOne({_id:Id},
        {
            $set:{
                name: req.body.name,
                email: req.body.email,
                role: req.body.role ?req.body.role:'User',
                isActive: status?status:true
            }
        }
        , (err,result) => {
        if(err) return res.status(500).send({"err":"Error while updating the user"})
        res.status(200).send("Data is updated")
    })
}

export const updateUserToAdmin = (req,res) => {
    if(!req.session.user) {
        return res.redirect('/?errmsg=No Session Found! Please Login Again')
    }
    const Id = req.params.id
    User.updateOne({_id:Id},{role:'Admin'}, (err,result) => {
        if(err) return res.status(500).send({"err":"Error while updating the user"})
        res.status(200).send("Data is updated")
    })
}

export const deleteUser = (req,res) => {
    if(!req.session.user) {
        return res.redirect('/?errmsg=No Session Found! Please Login Again')
    }
    const Id = req.params.id
    User.deleteOne({_id:Id},(err,result) =>{
        if(err) return res.status(500).send({"err":"Error while deleting the user"})
        res.status(200).send("One data is deleted")
    })
}
