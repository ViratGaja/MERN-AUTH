import bcrypt from 'bcrypt';
import { JsonWebTokenError } from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email ||!password){
        return res.json({success:false,message:"Missing Details"})
    }

    try{

    }
    catch(err){
        res.json({success:false,message:err.message})

    }
}