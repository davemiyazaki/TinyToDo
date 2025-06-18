import ToDoItem from "./ToDoItem"
import EntryField from "./EntryField";
import { useEffect } from "react";

const ToDoList = () => {
  useEffect(() => {
  const entryField = document.getElementById("EntryField_input");

  entryField.addEventListener("keydown", (e)=>{
        if(e.code === "Enter" && (entryField.value != "" || entryField.value != null)){
            console.log(entryField.value)}});
  },[]);

  return(
    <div className="flex flex-col w-full">
    <EntryField/>
    <ToDoItem/>
    </div>
  );
}

export default ToDoList;
