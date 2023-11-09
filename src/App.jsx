import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {...state, count: state.count + 1}
    case 'decrement':
      return {...state, count: state.count - 1}
    case 'newUserInput':
        return {...state,userInput: action.payLoad}
    case 'tgColor':
        return {...state, color: !state.color}
    default:
      throw new Error()
  }
}

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor'
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, userInput:'', color: false})
  // const [userInput, setUserImput] = useState('')
  // // const [count, setCount] = useState(0)
  // const [color, setColor] = useState(false)
  

  
  return (
    <main className="App" style={{color: state.color ? '#FFF' : "#FFF952"}}>
      <input
        
        
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({type: 'newUserInput', payLoad: e.target.value})} 
      />
      
      <br />
      <br />

      <p>{state.count}</p> 


      <section>
        <button onClick={(() => dispatch({type: 'ACTION.DECREMENT'}))}>-</button>
        <button onClick={(() => dispatch({type: 'ACTION.INCREMENT'}))}>+</button>
       <button onClick={(() => dispatch({type: 'ACTION.TG_COLOR'}))}>Color</button>
      </section>

      

      <br />
      <br />

      

      <br />
      <br />

      <p>{state.userInput}</p>
    </main>
  );
};

export default App;