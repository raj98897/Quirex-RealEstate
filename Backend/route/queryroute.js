import express from 'express';
import { contactModel } from '../model/table.js';

const queryRoute = express.Router();

queryRoute.post('/contact-us',async(req,res)=>{
   try{
    const {name, email, phone, subject, message} = req.body;
    const isExist =await contactModel.findOne({email});
    if(isExist){
        res.json({
            code: 400,
            message: 'Email already exist',
            data: isExist
        })
    }
    else{
        const data = new contactModel({name, email, phone, subject, message})
        const result = await data.save();
        res.json({
            code: 200,
            message: 'Send Successfully, We contact you soon',
            data: result
        })
    }

   }
   catch(error){
    res.json({
        code: 500,
        message: "Internal Server Error!",
        data: ""
    })
   }
})

export default queryRoute;