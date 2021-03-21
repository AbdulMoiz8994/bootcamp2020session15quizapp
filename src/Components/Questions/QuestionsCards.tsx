import React from 'react';
type questonTypes={
  option: string[],
  question: string,
  handleStateFunc: (e:React.FormEvent<EventTarget>) =>void,
  
}


export const QuestionsCards = ({option,question,handleStateFunc}:questonTypes) => {
  console.log(option,question)
    return (
      <div>
        <h3>{question}</h3>
        {option.map((opt: string,ind: number) =>{
return(
  <div key={ind}>
  <label>
<input type="radio" name="opt" value={option}/>
{opt}
  </label>
</div>
)
})}
  
        <form  onSubmit={handleStateFunc}>
          <input type="submit" value="Submit" />
        </form>
      </div>

    )
}
