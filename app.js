const express=require('express')
const app=express()
const indexrouter=require('./routes/index')
const bodyparser=require('body-parser')



//To take static files from public directory
app.use(express.static('public'))

app.use(bodyparser.urlencoded({extended:true}))

// use rout handlers
app.use('/',indexrouter)

// Start the server
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})