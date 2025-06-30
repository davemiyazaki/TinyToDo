import ToDoItem from "./ToDoItem"
import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'


const clearInput = (input) => {
  if(input){
    input.value = "";
  }else {
    alert("clearInput() cannot be processed since no value was passed")
  }
}



const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const addToDoItem = (input) =>{
    console.log("addToDoItem is in process");
    console.log(input);
    setToDoList(toDoList => toDoList.concat({name: input, id: uuidv4()}));
  }

  useEffect(() => {
  const entryField = document.getElementById("EntryField_input");
  entryField.addEventListener("keydown", 
      (e)=>{
        const value = e.target.value; 
        if(e.code === "Enter" && value != ""){
          console.log(value)
          clearInput(entryField);
          addToDoItem(value);
        }
      });
  },[]);

  return(
    <div className="flex flex-col w-full overflow-x-scroll" id="ToDoList_main">
      {toDoList.map((item)=>(<ToDoItem name={item.name} check_key={item.id} key={item.id} />))}
    </div>
  );
}

export default ToDoList;
