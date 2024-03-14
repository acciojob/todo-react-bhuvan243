
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([{id:1, title:"React"}]);
  function addTodo() {
    
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>To-Do List</h2>
        <div>
          <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
          <button type="submit" onClick={addTodo}>Add Todo</button>
        </div>
        <ul>
          {
            todoList && (
              todoList.map(todo => (
                            <li>
                              <span>{todo.title}</span>
                              <button>Delete</button>
                            </li>)
                          )
            )
          }
        </ul>
    </div>
  )
}

export default App
