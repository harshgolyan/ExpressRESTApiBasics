
const express = require('express')
const uuid = require('uuid')
const members = require('./members')
const app = express()

app.use(express.json())

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members);
})

app.get("/showUser/:uid",(req,res)=>{
    const id = parseInt(req.params.uid);
    const user = members.filter(member => member.id === id);
    user.length != 0 ?  res.status(200).json(user):res.status(200).json({msg:"user not found"});    
})

app.post("/addUser",(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    members.push({id:uuid.v4(),name,email})
    res.status(200).json(members)
})
app.delete("/deleteUser/:uid",(req,res)=>{
    const id = parseInt(req.params.uid);
    const found = members.some(member =>member.id === id)
    if(found){
        const result = members.filter(member => member.id !== id)
        res.status(200).json(result);

    }
    else{
        res.status(400).json({msg:"user not found"})
    }
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