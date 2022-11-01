const jwt =require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User =require('../model/userModel')

const protect=asyncHandler(async(req,res,next)=>{
    let token 

    if(req.headers.authorization &&  req.headers.authorization.startsWith('Bearer')){
        try {

            //Get Token From Hearder 
            token=req.headers.authorization.split(' ')[1]

            //Verify Token
            const decoded=jwt.verify(token,process.env.JWT_SECRET)

            // Get User form the Token 
            req.user=await User.findById(decoded.id).select('-password')

            next()
            
        } catch (error) {

            console.log(error);
            res.status(401)
            throw new Error('Not Authorized')


            
        }

        if(!token){
            res.status(401)
            throw new Error('Not Authorized')
        }
    }
})

module.exports={protect}