console.log('Server is running');
const express=require('express')
const dotenv=require('dotenv').config()
const {errorHandler} =require('./middleware/errorMiddleware')

const connectDB=require('./config/db');
const port=process.env.PORT || 5000


connectDB()
const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes.js'))

app.listen(port,()=> console.log(`Server Started on port ${port}`))
