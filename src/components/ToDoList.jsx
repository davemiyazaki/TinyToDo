import ToDoItem from "./ToDoItem"
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";



const clearInput = (input) => {
  if(input){
    input.value = "";
  }else {
    alert("clearInput() cannot be processed since no value was passed")
  }
}



const ToDoList = () => {
  const [toDoList, setToDoList] = useState(["Task 1", "Task 2", "Task 3"]);
// work on adding new element eaach time and not only ONCE
  const addToDoItem = () =>{
    console.log("addToDoItem is in process");
    setToDoList([...toDoList, "Brand New Item"]);
  }

  useEffect(() => {
  const entryField = document.getElementById("EntryField_input");
  entryField.addEventListener("keydown", 
      (e)=>{
        const value = e.target.value; 
        if(e.code === "Enter" && value != ""){
          console.log(value)
          clearInput(entryField);
          addToDoItem();
        }
      });
  },[]);

  return(
    <div className="flex flex-col w-full" id="ToDoList_main">
      {toDoList.map((item, idx) =>(<ToDoItem name={item}/>))}
    </div>
  );
}

export default ToDoList;
