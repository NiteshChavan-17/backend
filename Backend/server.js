import express from "express"
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

// app.get('/',(req,res) => {
//     res.send("Server is running")
// })

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=> {
    const jokes = [
        {
            id:1,
            title:"A joke",
            content:'This is a joke'
        },

        {
            id:2,
            title:"Another joke",
            content:'This is a second joke'
        },

        {
            id:3,
            title:"one more joke",
            content:'This is third joke'
        },

        {
            id:4,
            title:"more joke",
            content:'This is fourth joke'
        },

        {
            id:5,
            title:"final joke",
            content:'This is fifth joke'
        },
    ]

    res.send(jokes)
});

app.get("/vlog",(req,res)=> {
    res.send(`hello`);
})

app.use(express.static('public'));


app.post('/', (req,res)=> {
    console.log('This is a post request');
    res.send("This is a post request")
});

app.post('/post', (req,res) => {
    console.log("Post Request Successful");
    res.send("Post Request Successful");
})

// app.put('/put',(req,res)=> {
//     console.log("This is put request");
//     res.send("This is put request");
// })

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

app.get('/index',(req,res)=> {
    console.log("This is index file");
    res.sendFile('template/index.html', {root:__dirname});
})

app.get('/vlog/:slug', (req,res)=> {
    res.send(`Hello ${req.params.slug}`)
})

let messege = 'hello'

app.get('/messege',(req,res)=> {
    res.send(messege);
})

app.put('/messege',(req,res)=> {
    messege = "update hello"
    res.send("messege updated");
})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`)
});