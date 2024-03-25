import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo }) {
  return (
    <div className="divide-y divide-gray-300">
      {todos.length === 0
        ? "Todos NOT found..."
        : todos.map((todo, index) => {
            return (
              <TodoItem
                {...todo}
                removeTodo={removeTodo}
                id={index}
                key={index}
              />
            );
            {
              /* <TodoItem id={todo.id} title={todo.title} key={todo.id} />; */
            }
          })}
    </div>
  );
}

export default TodoList;
