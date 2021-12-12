
import React, {useState}  from "react";

function Items(props) {

const [Clicked, setClicked] = useState(false);




function handleClick(){
  Clicked?setClicked(false):setClicked(true);
}


  return (
    <>
      <li onClick={handleClick}

       style={{textDecoration:Clicked?'line-through':null}}
       > 
      {props.item }</li>
    </>
  );
}

export default Items;
