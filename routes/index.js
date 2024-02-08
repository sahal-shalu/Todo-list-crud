const express=require('express')
const router=express.Router()
const path=require('path')


let todos=[]



router.post('/add',(req,res)=>{
    const {task}=req.body;
    todos.push({id:Date.now(),task})
    res.redirect('/')
})

router.delete('/delete/:id',(req,res)=>{
    const{id}=req.params;
    todos=todos.filter(todo=>todo.id!==parseInt(id))
    res.json(todos)
})

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"))
})

module.exports=router;
