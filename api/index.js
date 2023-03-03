import express from "express";

const app = express();

app.use((req,res,next) =>{
    console.log(req.url);
    next();
})

app.get("/api/salam", (req,res)=>{
    res.send("Assalamulaikum")
})

app.listen(3000, ()=>{
    console.log("server running at port 3000")
})