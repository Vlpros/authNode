require('dotenv').config()
const express=require('express')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
const app =express()
const PORT=process.env.PORT || 5000
const router =require('./router/index')
const erromiddlewear=require('./middlewear/error-middlewear')
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:process.env.CLIENT_URL
}))
app.use('/auth',router)
app.use(erromiddlewear)


const start= async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{

            useUnifiedTopology:true
        })
    app.listen(PORT,()=>{
        console.log('server starts on '+PORT)
    })
    }catch(e){
        console.log(e)
    }
}
start()