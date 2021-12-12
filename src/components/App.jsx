import React, { useState } from "react";
import Items from "./Items";

function App() {
  // 
  const [list, setList] = useState();
  const [objs, setObjs] = useState([]);

  //saving state
  function saveCurrent(event) {
    const data = event.target.value;
    setList(data);
  }
  function addItems(){
    setObjs( x => {
      return [...x , list]
    }

    )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={saveCurrent} type="text" value={list} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
          objs.map(x => 
          <Items item={x} />)}

        </ul>
      </div>
    </div>
  );
}

export default App;
