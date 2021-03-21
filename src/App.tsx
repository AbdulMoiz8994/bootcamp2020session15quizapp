import React,{useEffect,useState} from 'react';
import './App.css';
import {Quiz_service} from './Components/services/Quiz_service'
import {QuestinsQuiz} from './Components/TypeofQuiz/QuizTypes'
import {QuestionsCards} from './Components/Questions/QuestionsCards'
// import {QuestionsCards} from './Components/Questions/QuestionsCards'

function App() {

let [quiz,setQuiz]=useState<QuestinsQuiz[]>([])
let[handleState,setHandleState]=useState(0)
  useEffect(() => {
    async function fetchData() {
      const questions:QuestinsQuiz[]=await Quiz_service(5,'easy')
      console.log(questions)
      setQuiz(questions)
      // console.log()
    }
    fetchData()
  }, [])

  let handleSubmit=(e:React.FormEvent<EventTarget>) =>{
    e.preventDefault()
    if(handleState !== quiz.length -1){
      setHandleState(++handleState)
    }else{
      alert("Quiz Has completed")
      setHandleState(0)
    }
  }
  
if(!quiz.length)
     return <h2 style={{textAlign: 'center'}}>loading...</h2>

  return (
    <div className="App">
      <QuestionsCards
           option={quiz[handleState].option}
           question={quiz[handleState].question}
     handleStateFunc={handleSubmit}
      />
    </div>
  );
}
  

export default App;
