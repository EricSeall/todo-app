import { useState } from "react";
import ItemList from "./ItemList.tsx";
import "./App.css";

interface Item {
  text: string;
  checked: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState("All");

  function handleAddItem(itemText: string) {
    const newList = [...items, { text: itemText, checked: false }];
    setItems(newList);
  }

  function handleDeleteItem() {}

  function handleEditItem(id: number, newText: string) {
    console.log("Edited");
    let list = items.map((item) => item);
    list[id].text = newText;
    setItems(list);
  }

  function handleCheckItem(id: number) {
    console.log("I dun been clicked");
    let list = items.map((item) => item);
    list[id].checked = !list[id].checked;
    setItems(list);
  }

  function handleClearList() {
    setItems(items.filter((item) => item.checked === false));
  }

  function handleInput(value: string) {
    handleAddItem(value);
    document.getElementById("input-field").value = "";
  }

  function handleFilterChange(newFilter: string) {
    setFilter(newFilter);
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
            id="input-field"
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" ? handleInput(e.currentTarget.value) : null
            }
            placeholder="Create a new todo..."
            autoFocus
          ></input>
        </div>

        <ItemList
          items={items}
          filter={filter}
          handleCheckItem={handleCheckItem}
          handleDeleteItem={handleDeleteItem}
          handleClearList={handleClearList}
          handleEditItem={handleEditItem}
        />
        <div className="filtering-buttons">
          <p
            className="filter-button"
            onClick={() => handleFilterChange("All")}
          >
            All
          </p>
          <p
            className="filter-button"
            onClick={() => handleFilterChange("Active")}
          >
            Active
          </p>
          <p
            className="filter-button"
            onClick={() => handleFilterChange("Completed")}
          >
            Completed
          </p>
        </div>
      </div>
      <div className="instructions">Drag and drop to reorder list</div>
    </>
  );
}

export default App;
