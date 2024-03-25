import { useEffect, useState } from "react";
import "./App.css";
import NewToDo from "./newToDo";
import TodoList from "./TodoList";
function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  function addTodo(title) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    setTodos((currentToDos) => {
      return [...currentToDos, { title: title }];
    });
  }
  const removeTodo = (selectedIndex) => {
    setTodos((todo) => {
      return todo.filter((todos, index) => index != selectedIndex);
    });
  };

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-screen w-full md:px-40 p-4 grid max-md:grid-rows-[auto_1fr]  bg-gray-100 max-md:px-2 overflow-hidden md:grid-flow-col">
      <div className=" grid grid-flow-col w-full max-md:grid-flow-row">
        <NewToDo onSubmit={addTodo} />
      </div>
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <h1 className="sticky top-0 text-2xl bg-gray-300 rounded-b- md flex justify-center p-3 font-extrabold ">
          Todo List
        </h1>
        <div>
          <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
