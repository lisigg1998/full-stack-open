import React, { useState } from 'react'

  const Title = ({name}) => (
    <div>
      <h1>{name}</h1>
    </div>
  )

  const Statistic = ({name, number}) => {
    if(name ==='positive'){
      return(
        <tr>
          <td>{name}</td>
          <td>{number.toFixed(2)}%</td>

        </tr>
      )
    }else{
      return(
        <tr>
          <td>{name}</td>
          <td>{number}</td>
        </tr>
      )
    }
  }
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statistics = ({good, neutral, bad}) => {
    const all = (arr) => {
      let sum = 0;
      arr.forEach(element => {
        sum += element;
      });
      return(sum)
    }

    const average = (good, neutral, bad) => (
      (good * 1 + bad *(-1))/(good+neutral+bad)
    )

    const positive = (good, neutral, bad) => (
      (good)/(good +neutral + bad)
    )

    if(good === 0 && neutral === 0 && bad === 0){
      return(<div>No feedback given</div>)
    }else{
      return(
      <div>
        <Title name='Statistics'></Title>
        <table>
          <Statistic name='good' number={good}></Statistic>
          <Statistic name='neutral' number={neutral}></Statistic>
          <Statistic name='bad' number={bad}></Statistic>
          <Statistic name='all' number={all([good, neutral, bad])}></Statistic>
          <Statistic name='average' number={average(good,neutral, bad)}></Statistic>
          <Statistic name='positive' number={positive(good, neutral, bad)*100}></Statistic>
        </table>
        
      </div>
        
      )
    }
        
  }


  const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    

    return (
      <div>
        <Title name='give feedback!'></Title>
        <Button handleClick={() => setGood(good + 1)} text='good'> </Button>
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'> </Button>
        <Button handleClick={() => setBad(bad + 1)} text='bad'> </Button>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>     
      </div>
    )
  }

export default App