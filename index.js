import dotenv from "dotenv";
dotenv.config();
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=> {
    res.send("Nitesh Chavan")
})

app.get("/login",(req,res)=> {
    res.send("<h1>Please login first</h1>")
})

app.get("/backend", (req,res)=> {
    res.send(`<ul>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        </ul>`)
});

app.get('/githubuser', (req,res)=> {
    res.json('https://api.github.com/users/NiteshChavan-17');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})