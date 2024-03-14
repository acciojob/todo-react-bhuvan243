import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  function addTodo(event) {
    event.preventDefault();
    let lastTodoId =
      todoList.length === 0 ? 0 : todoList[todoList.length - 1].id;
    setTodoList([...todoList, { id: lastTodoId + 1, title: inputValue }]);
    setInputValue("");
  }
  function deleteTodo(todo) {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>To-Do List</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todoList &&
          todoList.map((todo) => (
            <li>
              <span>
                {todo.id}. {todo.title}
              </span>
              <button key={todo.id} onClick={() => deleteTodo(todo)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
