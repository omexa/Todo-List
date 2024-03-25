import react, { useEffect, useState } from "react";
import "./App.css";

function NewToDo({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    if (newItem.length > 20) {
      // alert("is above 15 character");
      return;
    } else {
      onSubmit(newItem);
      setNewItem("");
    }
  };
  useEffect(() => {
    if (newItem.length > 20) {
      alert("max number of character is 20");
    }
  });
  return (
    <form className="p-2 flex flex-col gap-2">
      <label className="font-semibold flex self-center">NEW ITEM</label>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        value={newItem}
        placeholder="write here your item max char(15)"
        className="focus-visible:outline-none pl-2 border border-gray-400 font-serif text-black placeholder-gray-400 focus-visible:border-blue-700 rounded-md p-1"
      />
      <button
        className="bg-blue-500 text-white font-semibold disabled:bg-blue-400 p-1 rounded-md"
        onClick={handleAdd}
        disabled={!newItem}
      >
        ADD
      </button>
    </form>
  );
}

export default NewToDo;
