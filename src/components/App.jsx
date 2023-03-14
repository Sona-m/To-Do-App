import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [work, setWork] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const workField = event.target.value;
    setWork(workField);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, work];
    });
    setWork("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={work} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
