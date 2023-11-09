import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case 'increament':
      return {count: state.count + 1}
    case 'decreament':
      return {count: state.count - 1}

      case 'decreament':
        return {...state, count: state.count - 1}
      case 'increament':
        return {...state, count: state.count + 1}
        case 'newUserInput':
          return {...state,userInput: action.payLoad}
          case 'tgColor':
            return {color: !state.color}
      default:
        throw new Error()
  }
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
        onChange={(e) => setUserImput(e.target.value)} 
      />
      
      <br />
      <br />

      <p>{state.count}</p> 


      <section>
        <button onClick={(() => dispatch({type: 'decrement'}))}>-</button>
        <button onClick={(() => dispatch({type: 'increment'}))}>-</button>
       
        <button onClick={(() => setColor(prev => !prev))}>color</button>
      </section>

      

      <br />
      <br />

      

      <br />
      <br />

      <p>{userInput}</p>
    </main>
  );
};

export default App;