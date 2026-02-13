import dotenv from "dotenv";
dotenv.config();
import express from 'express';
const app = express()
const port = 3000

let github = {
  "login": "NiteshChavan-17",
  "id": 178712419,
  "node_id": "U_kgDOCqbvYw",
  "avatar_url": "https://avatars.githubusercontent.com/u/178712419?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/NiteshChavan-17",
  "html_url": "https://github.com/NiteshChavan-17",
  "followers_url": "https://api.github.com/users/NiteshChavan-17/followers",
  "following_url": "https://api.github.com/users/NiteshChavan-17/following{/other_user}",
  "gists_url": "https://api.github.com/users/NiteshChavan-17/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/NiteshChavan-17/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/NiteshChavan-17/subscriptions",
  "organizations_url": "https://api.github.com/users/NiteshChavan-17/orgs",
  "repos_url": "https://api.github.com/users/NiteshChavan-17/repos",
  "events_url": "https://api.github.com/users/NiteshChavan-17/events{/privacy}",
  "received_events_url": "https://api.github.com/users/NiteshChavan-17/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Nitesh Prashant Chavan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-08-18T12:21:03Z",
  "updated_at": "2026-01-23T15:41:00Z"
}

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
    res.json(github);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})