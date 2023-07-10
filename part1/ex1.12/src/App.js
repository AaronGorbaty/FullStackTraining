import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [top, setTop] = useState("no votes yet")

  const nextAnecdote = () => {
    const newIndex = Math.floor(Math.random() * (anecdotes.length))
    setSelected(newIndex)
  }

  const addVote = () => {
    const copy = [ ... vote ];
    copy[selected] += 1
    setVote(copy)
    let largest = 0
    for (let i = 1; i < copy.length - 1; i++) {
      if (copy[i] > copy[largest]) {
        largest = i;
      }
    }
    const newTop = anecdotes[largest]
    setTop(newTop)
  }

  return (
    
    <div>
      <h2>"{anecdotes[selected]}"</h2>
      <h2>has {vote[selected]} votes </h2>
      <button onClick={() => addVote()}> vote </button>  
      <button onClick={() => nextAnecdote()}> next </button>  
      <h2>Top Anecdote for the Day: </h2>
      <h2>{top}</h2>
    </div>
    
  )
}

export default App