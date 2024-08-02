import { useState } from "react";

import "./App.css";

function App() {

  const [items, setItems] = useState([])
  return <>
    <div className="header">
      <p className="title">TODO</p>
      <img className="color-mode-icon" src="./images/icon-sun" />
    </div>
    <!-- Add dynamic number --> items left 

All
Active
Completed
Clear Completed
Drag and drop to reorder list
  </>;
}

function itemList() {
  return <>
    
  </>
}

function todoItem() {
  return <>

  </>
}

export default App;
