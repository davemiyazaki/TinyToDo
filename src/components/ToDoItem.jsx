import {useEffect, useState} from 'react';
import "./toDoItem.css";
const ToDoItem = ( {name = "_untitled_item", check_key = "hello" }) =>{

  const [toDoState, setToDoState] = useState(0);

  const handleClick = (target) =>{
        console.log("Item is clicked");
        setToDoState(prevState => prevState === 0 ? 1 : 0);
        console.log("current state: " + toDoState);
        console.log("id of the object is " + target.getAttribute("class"));
        toDoState == 0 ? target.classList.add("__checked") : target.classList.remove("__checked");
        
        
      };
      
  return(
    <div className=" p-0 px-4 grid grid-cols-[10%_90%] w-full h-fit text-sm" 
          id="toDoItem_main"
          >
      <div className= "flex justify-center items-center p-[8px]  box-border h-full w-full" id="toDoItem_check">
        <img className="object-cover " src="/todo-icon.svg" id={check_key} key={check_key} onClick={(e) => handleClick(e.target)}/>
      </div>

      <div className="flex h-full w-full box-border items-center font-medium" id="toDoItem_name"> 
        <span className = {toDoState ? "opacity-50" : ""} > {name} </span>
      </div>
    </div>
  );

}
export default ToDoItem;
