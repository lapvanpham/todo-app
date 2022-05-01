import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('abc');

  const handleChange = (e) => {
    console.log(e)
    setInput(e.target.value);
  };

  const resetInput = () => {
    console.log('reset fired 🔥');
    setInput('');
  };

  const handleAddItem = () => {
    setTodos([...todos, input]);
    resetInput();
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input value={input} type='text' onChange={handleChange} />
      <button onClick={handleAddItem}>Add</button>
      <h3>My tasks</h3>

      <ul className='todos-container'>
        {todos.map((item) => {
          console.log(todos);
          return <li className='todo'>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
