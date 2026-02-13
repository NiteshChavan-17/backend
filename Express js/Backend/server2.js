import express from 'express';

let app = express();

let port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=> {

    const jokes = [
        {
            joke_id:1,
            joke_title:'First Joke',
            joke_content:"This is first joke",
            likes:10,
            isRead:false
        },

        {
            joke_id:2,
            joke_title:'Second Joke',
            joke_content:"This is second joke",
            likes:8,
            isRead:false
        },

        {
            joke_id:3,
            joke_title:'Third Joke',
            joke_content:"This is third joke",
            likes:9,
            isRead:true
        },

        {
            joke_id:4,
            joke_title:'Fourth Joke',
            joke_content:"This is fourth joke",
            likes:11,
            isRead:false
        },

        {
            joke_id:5,
            joke_title:'Fifth Joke',
            joke_content:"This is fifth joke",
            likes:15,
            isRead:true
        },
    ]

    res.send(jokes);
});

app.get('/cart', (req,res)=> {

    const items = [
        {
            id:1,
            name:'Milk',
            price:40
        },

        {
            id:2,
            name:'Butter',
            price:50
        },

        {
            id:3,
            name:'Bread',
            price:45
        }
    ]

    res.send(items);
});

app.listen(port, ()=>{
    console.log(`Example app litening on http://localhost:${port}`);
})