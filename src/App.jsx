import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(new Map());

  return (
    <main className="main">
      <h1 className="main-title">Todo List</h1>

      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </main>
  );
}

const CreateTodo = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState("");
  const readInput = (event) => {
    setInputText(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    console.log(todos);
    todos.set(crypto.randomUUID(), { text: inputText });
    setTodos(new Map(todos));
    setInputText("");
  };

  return (
    <form className="add-todo-form" onSubmit={addTodo}>
      <input
        className="add-todo-input"
        type="text"
        placeholder="Add a todo..."
        value={inputText}
        onChange={readInput}
      />
      <button disabled={inputText.length === 0} className="add-todo-button">
        Add
      </button>
    </form>
  );
};

const Todos = ({ todos, setTodos }) => {
  return (
    <ul className="todos-container">
      {[...todos.keys()].map((todoId) => {
        return (
          <Todo
            key={todoId}
            todoId={todoId}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};

const Todo = ({ todoId, todos, setTodos }) => {
  const removeTodo = () => {
    todos.delete(todoId);
    setTodos(new Map(todos));
  };

  return (
    <li className="todo" key={todoId}>
      <h2 className="todo-title">{todos.get(todoId).text}</h2>
      <button className="todo-remove-btn" onClick={removeTodo}>
        X
      </button>
    </li>
  );
};

export default App;

// todos
/*
Map {
  id: {text: "lkjsdf"}
}
*/
