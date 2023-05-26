const express=require('express')

const app=express()

app.listen(5000,console.log("app is runnig on part 5000"))

app.get("/",function(req,res){
    res.send("hello world")
})


const path=require("path")
const hour= new Date().getHours()
const day= new Date().getDay()

app.get("/home",(req,res)=>{
    if((day >=1 && day<=5 )&&(hour >=9 && hour <=17)){
        res.sendFile(path.join(__dirname,"Home.html"))
    }else{
        res.send('app closed')
    }

    
   
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"Contact.html"))
})

app.get("/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"style.css"))
})

app.get("/contact.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.css"))
})