import { useState } from "react";
import ItemList from "./ItemList.tsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem: string) {
    const newList = [...items, newItem];
    setItems(newList);
  }

  function handleDeleteItem() {}

  function handleEditItem() {}

  function handleCheck() {
    console.log("I dun been clicked");
  }
  return (
    <>
      <img className="bg-mobile-dark" src="./images/bg-mobile-dark.jpg" />
      <div className="header">
        <p className="title">TODO</p>
        <img className="color-mode-icon" src="./images/icon-sun.svg" />
      </div>
      <div className="main-content">
        <div id="input-card" className="card">
          <div className="check-button-unchecked"></div>

          <input
            className="item-input"
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" ? handleAddItem(e.currentTarget.value) : null
            }
            placeholder="Create a new todo..."
          ></input>
        </div>

        <ItemList items={items} handleCheck={handleCheck} />
        <div className="filtering-buttons">
          <p className="filter-button">All</p>
          <p className="filter-button">Active</p>
          <p className="filter-button">Completed</p>
        </div>
      </div>
      Drag and drop to reorder list
    </>
  );
}

export default App;
