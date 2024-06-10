import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    // axios.get('https://localhost:3000/api/jokes')
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }
  )
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
     <h1>Full stack</h1>
     <p>Jokes:{jokes.length}</p>
     {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          
          <h3 style={{color: index%2 ===0?'red':'inherit'}}>{joke.title} at {index}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
