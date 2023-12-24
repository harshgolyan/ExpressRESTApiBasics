
const express = require('express')
const app = express()

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