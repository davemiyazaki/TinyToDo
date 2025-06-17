const ToDoItem = () =>{
  return(
    <div className="grid grid-cols-[10%_90%] w-full h-fit text-sm">
      <div className= " p-[7px] box-border h-full w-full" id="checklist">
        <img className="object-cover border-b-black border-2 rounded-md" src="/todo-icon.jpg"/>
      </div>


      <div className="h-full w-full box-border p-1 justify-center" id="toDoName"> 
        <span className = "h-full" > To-Do Component </span>
      </div>
    </div>
  );

}
export default ToDoItem;
