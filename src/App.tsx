import React,{useEffect,useState} from 'react';
import './App.css';
import {Quiz_service} from './Components/services/Quiz_service'
import {QuestinsQuiz} from './Components/TypeofQuiz/QuizTypes'
import {QuestionsCards} from './Components/Questions/QuestionsCards'
// import {QuestionsCards} from './Components/Questions/QuestionsCards'

function App() {

let [quiz,setQuiz]=useState<QuestinsQuiz[]>([])
let[handleState,setHandleState]=useState(0)
let[score,setSocre]=useState(0)

  useEffect(() => {
    async function fetchData() {
      const questions:QuestinsQuiz[]=await Quiz_service(10,'easy')
      console.log(questions)
      setQuiz(questions)
      // console.log()
    }
    fetchData()
  }, [])


  let handleSubmit=(e:React.FormEvent<EventTarget>,userAns: string) =>{
    e.preventDefault()
const currentQuestion: QuestinsQuiz=quiz[handleState]

    if(userAns===currentQuestion.correct_answer ){
            setSocre(++score)
    }
    if(handleState !== quiz.length -1){
      setHandleState(++handleState)
    }else{
      alert(`your Socre ${score} out of ${quiz.length}`)
      setHandleState(0)
      setSocre(0)
    }
  }  
if(!quiz.length)
     return <h2 style={{textAlign: 'center'}}>loading...</h2>

  return (
    <div className="App">
      <h1>Welome To Quiz App</h1>
      <h3>Your Score</h3>
         <h5>{score}/{quiz.length}</h5>

      <QuestionsCards
           option={quiz[handleState].option}
           question={quiz[handleState].question}
     handleStateFunc={handleSubmit}
      />
    </div>
  );
}
  

export default App;
