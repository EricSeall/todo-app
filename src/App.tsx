import { useState } from "react";
import ItemList from "./ItemList.tsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(itemText: string) {
    const newList = [...items, { text: itemText, checked: false }];
    setItems(newList);
  }

  function handleDeleteItem() {}

  function handleEditItem() {}

  function handleCheckItem(id: number) {
    console.log("I dun been clicked");
    let list = items.map((item) => item);
    list[id].checked = !list[id].checked;
    setItems(list);
  }

  function handleClearList() {
    setItems(items.filter((item) => item.checked === false));
  }

  function handleInput() {
    handleAddItem(e.currentTarget.value);
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

        <ItemList
          items={items}
          handleCheckItem={handleCheckItem}
          handleDeleteItem={handleDeleteItem}
          handleClearList={handleClearList}
        />
        <div className="filtering-buttons">
          <p className="filter-button">All</p>
          <p className="filter-button">Active</p>
          <p className="filter-button">Completed</p>
        </div>
      </div>
      <div className="instructions">Drag and drop to reorder list</div>
    </>
  );
}

export default App;
