import { useState } from "react";

const App = () => {
  const [userInput, setUserImput] = useState('')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)
  

  
  return (
    <main className="App" style={{color: color ? '#fff' : "#fff92"}}>
      <input
        
        onChange={handleInputChange}
        type="text"
        value={userInput}
        placeholder={(e) => setUserImput(e.target.value)}
      />
      
      <br />
      <br />

      <p>{countupdate}</p>


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