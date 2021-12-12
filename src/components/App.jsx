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
    setList("")

  }

  function deleteItem(id){
    setObjs(prev => {
      return prev.filter(
        (item, index) => {
            return  index !==id;
        }
      )
    })
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
          objs.map((x,index) => 
          <Items key ={index} id={index} onChecked={deleteItem} item={x} />)}

        </ul>
      </div>
     <footer>Created By Hamza Mujeeb</footer>
    </div>
  );
}

export default App;
