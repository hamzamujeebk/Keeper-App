
import React, {useState}  from "react";

function Items(props) {


  return (
    <>
      <li onClick={() => 
        props.onChecked(props.id)}> 
      {props.item }</li>
    </>
  );
}

export default Items;
