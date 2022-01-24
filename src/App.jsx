import React,{useState} from 'react';
import Form from './Form';


function App() {
  const [todos,setTodos] = useState([]);

  const toggleComplate = (i) => setTodos(todos.map((todo,k) => k ===i ? {
    ...todo,
    complate: !todo.complate
  } :todo)
  );

  return( 
  <div>
    <Form onSubmit={text => setTodos([{text, complate: false}, ...todos])}></Form>
    <div>
      {
        todos.map(({text, complate}, i)=>(
          <div key={text} onClick={() => toggleComplate(i)}
          style={{
            textDecoration: complate ? 'line-through' : ''
          }}>{text}</div>
        ))
      }
    </div>
    <button onClick={() => setTodos([])}>reset</button>
  </div>);
}

export default App;
