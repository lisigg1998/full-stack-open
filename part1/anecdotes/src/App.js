import React, { useState } from 'react'

const Title = ({name}) => (
  <div>
    <h1>{name}</h1>
  </div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVote = ({anecdotes, votes}) => {
  let indexOfMax = 0;
  votes.reduce( (a,c,i) => c > a ? (indexOfMax = i,c) : a, 0)
  return(
    <div>
      <p>{anecdotes[indexOfMax]}</p>
      <p>has {votes[indexOfMax]} votes.</p>
    </div>
  )

}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const minNum = 0
  const maxNum = 5
  const [selected, setSelected] = useState(Math.floor(Math.random()*(maxNum-minNum+1)) + minNum)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    return(setVotes(copy))
  }

  const randomNum = (minNum,maxNum) => () => {
    const new_rand = Math.floor(Math.random()*(maxNum-minNum+1)) + minNum;
    setSelected(new_rand) 
  }

  return (
    <div>
      <Title name='Anecdote of the day'></Title>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes.</p>
      </div>

      <Button handleClick={vote} text='vote for it'></Button>
      <Button handleClick={randomNum(0,5)} text='next anecdote'></Button>
      
      <Title name='Anecdote with the most votes'></Title>
      <MostVote anecdotes={anecdotes} votes={votes} ></MostVote>

    </div>
  )
}

export default App