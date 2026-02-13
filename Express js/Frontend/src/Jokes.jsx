import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import { FaHeart } from "react-icons/fa";


function Jokes() {

    let [jokes, setJokes] = useState([]);

    useEffect(()=> {

        axios.get(`/api/jokes`)
        .then((res)=> {
            setJokes(res.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    }, []);

    function handleLike(id) {
        let updatedjoke = jokes.map((joke)=> {
            if(joke.joke_id === id){
                return {...joke, likes:joke.isLiked? joke.likes:joke.likes+1 , isLiked:!joke.isLiked}
            }
            return joke;
        });
        setJokes(updatedjoke);
    }

    function handleBookMark(id) {
        let updateJoke = jokes.map((joke)=> {
            if(joke.joke_id === id) {
                return {...joke, isbookmarked:!joke.isbookmarked}
            }
            return joke;
        });
        setJokes(updateJoke);
    }

    function handleRead(id) {
        let upgraded = jokes.map((joke)=> {
            if(joke.joke_id === id) {
                return {...joke, isRead:!joke.isRead}
            }
            return joke;
        });
        setJokes(upgraded);
    }

    return(
        <>
        <h1>Jokes</h1>
        <p className="title">total jokes: {jokes.length} </p>
        {
            jokes.map((joke)=> (
                <div style={{display:'flex', flexDirection:'column', gap:"10px"}} key={joke.joke_id}>
                <h3 className="title">{joke.joke_id}.{joke.joke_title}</h3>
                <p className="title">{joke.joke_content}</p>
                <p>Likes:{joke.likes}</p>
                <button onClick={()=>handleLike(joke.joke_id)}>Like</button>
                <button onClick={()=>handleBookMark(joke.joke_id)}>{joke.isbookmarked? "Remove BookMark":"BookMark"}</button>
                <button onClick={()=>handleRead(joke.joke_id)}>{joke.isRead? "Mark as Unread":"Mark as Read"}</button>
                {joke.isLiked && <FaHeart className="icon"/>}
                {joke.isbookmarked?<p>saved</p>:!joke.isbookmarked}
                {joke.isRead && <p>✅ Read</p>}
                </div>
            ))
        }

        </>
    );
}

export default Jokes