import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case 'increament':
      return {count: state.count + 1}
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [userInput, setUserImput] = useState('')
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)
  

  
  return (
    <main className="App" style={{color: color ? '#FFF' : "#FFF952"}}>
      <input
        
        
        type="text"
        value={userInput}
        onChange={(e) => setUserImput(e.target.value)}
      />
      
      <br />
      <br />

      <p>{count}</p>


      <section>
        <button onClick={(() => setCount(prev => prev - 1))}>-</button>
        <button onClick={(() => setCount(prev => prev + 1))}>+</button>
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