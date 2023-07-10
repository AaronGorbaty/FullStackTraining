import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0; 
  const positivePercentage = (good / total) * 100 || 0;
  if(good === 0 && bad===0 && neutral===0){
    return(<h3>No Feedback Given</h3>)
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total: {total}</p>
        <p>average: {average}</p>
        <p>positive: {positivePercentage}%</p>
      </div>
    );
  }
  
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const incrementNeutral = () => {
    const newMed = neutral + 1
    setNeutral(newMed)
  }

  const incrementBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <div>
      <h2>Feedback</h2>
      <Button handleClick={() => incrementGood()} text="good" />
      <Button handleClick={() => incrementNeutral()} text="neutral" />
      <Button handleClick={() => incrementBad()} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export default App