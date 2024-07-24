import {useState} from "react"
import {Button,H2} from './components/Input'
var data = Math.floor(Math.random() * 20)

export default function App() 
{
  const [val,valChange]=useState("")
  const [attempt,attemptChange]=useState(20)
  const [score,scoreChange]=useState()
  function process(val) 
  {     
    var number = document.getElementById("b1").value
    if(number > data) 
    {
       valChange("Too high")
       attemptChange(attempt-1)
    }    
    else {
      if (number == data) 
        {
          alert("Congratulations!!!")
          attemptChange(attempt-1)
          scoreChange(attempt-1)
          valChange("Congrats! You Win")
      }
      else 
      {
        valChange("Too Small")
        attemptChange(attempt-1)
      }
    }
  }
  function again()
  {
    location.reload()
  }
  return (
      <div>
      <div class="div1">
      <center>
      <header>
        <h1>Guess My Number</h1>
        <p>Guess a number between 0-20</p>
      </header>
      <input type="number" id="b1" placeholder="Enter the number"></input>
      <main>
        <Button Click={process}>Guess</Button>
        <Button Click={again}>Again</Button>
      </main>
      </center>
      <H2 id="attempt">Attempt Left : {attempt}</H2>
      <H2 id="score">Your Score : {score}</H2>
      
      <h2 id="result">{val}</h2>
    </div>    
    </div>
    

  )
}
