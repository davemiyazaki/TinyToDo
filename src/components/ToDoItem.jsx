const ToDoItem = () =>{
  return(
    <div className="grid grid-cols-[10%_90%] w-full h-fit text-sm">
      <div className= " p-[7px] box-border h-full w-full" id="checklist">
        <img className="object-cover border-b-black border-2 rounded-md" src="/todo-icon.jpg"/>
      </div>


      <div className="flex h-full w-full box-border p-1 items-center" id="toDoName"> 
        <span className = "" > To-Do Component </span>
      </div>
    </div>
  );

}
export default ToDoItem;
