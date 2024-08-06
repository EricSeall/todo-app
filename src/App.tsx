import { useState, useEffect } from "react";
import ItemList from "./ItemList.tsx";
import "./App.css";
import { Item } from "./types.ts";

function App() {
  const storedItems = window.localStorage.getItem("Eric_Seall_To_Do_Items");
  const storedFilter = window.localStorage.getItem("Eric_Seall_To_Do_Filter");
  const storedTotalItems = window.localStorage.getItem(
    "Eric_Seall_To_Do_Total_Items"
  );
  const storedColorMode = window.localStorage.getItem("Eric_Seall_To_Do_Color");

  const [items, setItems] = useState<Item[]>(() =>
    storedItems ? JSON.parse(storedItems) : []
  );
  const [filter, setFilter] = useState(() =>
    storedFilter ? storedFilter : "All"
  );
  const [totalItems, setTotalItems] = useState(() =>
    storedTotalItems ? JSON.parse(storedTotalItems) : 0
  );
  const [colorMode, setColorMode] = useState(() =>
    storedColorMode ? storedColorMode : "dark"
  );

  useEffect(() => {
    window.localStorage.setItem(
      "Eric_Seall_To_Do_Items",
      JSON.stringify(items)
    );
    window.localStorage.setItem("Eric_Seall_To_Do_Filter", filter);
    window.localStorage.setItem(
      "Eric_Seall_To_Do_Total_Items",
      JSON.stringify(totalItems)
    );
    window.localStorage.setItem("Eric_Seall_To_Do_Color", colorMode);
    console.log("logged");
  });

  document.querySelector("body")?.setAttribute("data-theme", colorMode);

  function handleToggleTheme() {
    if (colorMode === "dark") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  }

  function handleAddItem(itemText: string) {
    const newList = [
      ...items,
      { text: itemText, id: totalItems + 1, checked: false },
    ];
    setTotalItems(totalItems + 1);
    setItems(newList);
  }

  function handleDeleteItem(id: number) {
    console.log("Deleted");
    let list = items.map((item) => item);

    setItems(list.filter((item) => item.id != id));
  }

  function handleEditItem(element: HTMLElement, id: number, newText: string) {
    console.log("Edited");
    let list = items.map((item) => item);
    const activeItem = list.find((item) => item.id === id);
    if (activeItem) {
      activeItem.text = newText;
    }
    element.blur();
    setItems(list);
  }

  function handleCheckItem(id: number) {
    console.log("I dun been clicked");
    let list = items.map((item) => item);
    const activeItem = list.find((item) => item.id === id);
    console.log(activeItem);
    if (activeItem) {
      activeItem.checked = !activeItem.checked;
    }

    setItems(list);
  }

  function handleClearList() {
    setItems(items.filter((item) => item.checked === false));
  }

  function handleInput(value: string) {
    handleAddItem(value);
    const inputElement = document.getElementById(
      "input-field"
    ) as HTMLInputElement;
    inputElement.value = "";
  }

  function handleFilterChange(newFilter: string) {
    setFilter(newFilter);
  }

  return (
    <>
      <img
        className="bg-mobile"
        src={
          colorMode === "dark"
            ? "./images/bg-mobile-dark.jpg"
            : "./images/bg-mobile-light.jpg"
        }
      />
      <img
        className="bg-desktop"
        src={
          colorMode === "dark"
            ? "./images/bg-desktop-dark.jpg"
            : "./images/bg-desktop-light.jpg"
        }
      />
      <div className="header">
        <p className="title">TODO</p>
        <img
          className="color-mode-icon"
          src={
            colorMode === "dark"
              ? "./images/icon-sun.svg"
              : "./images/icon-moon.svg"
          }
          onClick={handleToggleTheme}
        />
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
            className={
              filter === "All" ? "filter-button active-filter" : "filter-button"
            }
            onClick={() => handleFilterChange("All")}
          >
            All
          </p>
          <p
            className={
              filter === "Active"
                ? "filter-button active-filter"
                : "filter-button"
            }
            onClick={() => handleFilterChange("Active")}
          >
            Active
          </p>
          <p
            className={
              filter === "Completed"
                ? "filter-button active-filter"
                : "filter-button"
            }
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
