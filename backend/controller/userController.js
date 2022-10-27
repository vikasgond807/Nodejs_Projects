const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User=require('../model/userModel')


//desc  Register New User
// route POST/api/users
//access PUBLIC
const registerUser =asyncHandler (async (req,res)=>{

    const {name,email,password}=req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all Fields')
    }

    //check if User exits 
    const userExists =await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    //Hashing the password
    const salt =await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt)
    
    //create a user 
    const user =await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email

        })
        

    }
    else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
    

    
})

//desc  Authenticate a User
// route POST/api/users/login
//access PUBLIC
const loginUser =asyncHandler (async (req,res)=>{

    const {email,password}=req.body

    const user =await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email

        })
    }

    else{
        res.status(400)
        throw new Error('Incorrect UserName or Password')
    }
    
})

//desc  Gets User Info
// route GET /api/users/me
//access PUBLIC
const getMe = asyncHandler (async (req,res)=>{
    res.json({message:'Get User Data' })

})
module.exports={
    registerUser,
    loginUser,
    getMe
}