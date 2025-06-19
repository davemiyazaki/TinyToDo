import ToDoItem from "./ToDoItem"
import { useEffect } from "react";
import { createRoot } from "react-dom/client";



const toDoList = ["Task 1", "Task 2", "Task 3"]

const clearInput = (input) => {
  if(input){
    input.value = "";
  }else {
    alert("clearInput() cannot be processed since no value was passed")
  }
}

const addToDoItem = () =>{
  console.log("addToDoItem is in process");

  const targetDiv =document.getElementById("ToDoList_main");
  createRoot(targetDiv).render(toDoList.map(item=>(<ToDoItem name={item}/>)));
}

const ToDoList = () => {
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
    <ToDoItem/>
    </div>
  );
}

export default ToDoList;
