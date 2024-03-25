import React from "react";

function TodoItem({ id, title, removeTodo }) {
  return (
    <div
      key={id}
      className="flex gap-1 items-center justify-between p-2 rounded-md hover:bg-gray-200"
    >
      <input type="checkbox" className="size-5 " />
      <p className="font-semibold">{title}</p>
      <button
        className="text-white rounded-md px-4 py-2 bg-red-500 font-semibold"
        onClick={() => removeTodo(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
