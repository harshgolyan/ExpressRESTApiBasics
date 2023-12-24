
const express = require('express')
const members = require('./members')
const app = express()

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members);
})

app.get("/showUser/:uid",(req,res)=>{
    const id = parseInt(req.params.uid);
    const user = members.filter(member => member.id === id);
    user.length != 0 ?  res.status(200).json(user):res.status(200).json({msg:"user not found"});    
})

app.get("/",(req,res)=>{
    res.send("this is get request");
})
app.put("/",(req,res)=>{
    res.send("this is update request");
})
app.post("/",(req,res)=>{
    res.send("this is post request");
})
app.delete("/",(req,res)=>{
    res.send("this is delete request");
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))