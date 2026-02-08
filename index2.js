import dotenv from 'dotenv';
dotenv.config()
import express from "express";
const app = express();

const port = 3000;

app.get('/',(req,res)=> {
    res.send("<h1>Express Server</h1>")
})
app.get('/index', (req,res)=> {
    res.send("Server is working");
})



app.listen(process.env.PORT,()=> {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})