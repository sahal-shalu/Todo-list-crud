const express=require('express')
const app=express()
const indexrouter=require('./routes/index')

//To take static files from public directory
app.use(express.static('public'))

// use rout handlers
app.use('/',indexrouter)

// Start the server
app.listen(4000,()=>{
    console.log('http://localhost:4000')
})