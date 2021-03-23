import React,{useState} from 'react';
type questonTypes={
  option: string[],
  question: string,
  handleStateFunc: (e:React.FormEvent<EventTarget>,userAns: string) =>void,
  
}


export const QuestionsCards = ({option,question,handleStateFunc}:questonTypes) => {


  // console.log(option,question)
 

let[selectAns,setSelectAns]=useState("")
let[number,setNumber]=useState(0)

const onChangeFunc=(e: any) =>{
    setSelectAns(e.target.value)
}
if(number>10 -1){
   setNumber(0)
}
    return (
      <div>
        <h5>Question: {number}/10</h5>
        <h3>{question}</h3>
        
        <form  onSubmit={(e: React.FormEvent<EventTarget>) =>handleStateFunc(e,selectAns)}>
        {option.map((opt: string,ind: number) =>{
return(
  <div key={ind}>
  <label>
<input type="radio" name="opt" required value={opt} checked={selectAns===opt}  onChange={onChangeFunc}/>
{opt}
  </label>
</div>
)
})}
  
          <input type="submit" value="Submit" onClick={() => setNumber(++number)}/>
        </form>
      </div>

    )
}
