import {useEffect, useState, useRef} from 'react';
import "./toDoItem.css";
const ToDoItem = ( {name = "_untitled_item", check_key = undefined }) =>{
  const myRef = useRef(null);
  const [toDoState, setToDoState] = useState(0);

  const handleClick = (target) =>{
        console.log("Item is clicked");

        setToDoState(prevState => prevState === 0 ? 1 : 0);// follows the rule of bit --> 0 - off, 1 - on

        console.log("current state: " + toDoState);
        console.log("id of the object is " + target.getAttribute("class"));

        toDoState == 0 ? target.classList.add("__checked") : target.classList.remove("__checked");
      };
  return(
    <div className="grid w-full h-fit __grid-cols-fitContent-1fr gap-x-[4px] mb-2" 
          id={check_key}
          ref={myRef}
          >
        <img className="object-cover " src="/todo-icon.svg" id={check_key} key={check_key} onClick={(e) => handleClick(e.target)}/>
      <div className="flex h-fit w-full box-border items-center font-medium leading-[normal]" id="toDoItem_name"> 
        <span className = {toDoState ? "opacity-50 text-accent" : ""} > {name} </span>
      </div>
    </div>
  );

}
export default ToDoItem;
