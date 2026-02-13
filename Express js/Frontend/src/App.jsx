import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [jokes,setJokes] = useState([]);

  useEffect(()=> {

    axios.get("/api/jokes")
    .then((response)=> {
      setJokes(response.data);
    })
    .catch((error)=> {
      console.log(error)
    })
  })

  return(
    <>
    <h1>Jokes</h1>
    <p className='title'>Jokes: {jokes.length}</p>

    {
      jokes.map((joke)=> (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p className='title'>{joke.content}</p>
        </div>
      ))
    }
    </>
  );
}

export default App
