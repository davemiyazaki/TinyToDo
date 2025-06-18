const ToDoItem = ( {name = "To-Do Item"}) =>{
  return(
    <div className=" p-3 grid grid-cols-[10%_90%] w-full h-fit text-sm" id="toDoItem_main">
      <div className= "flex justify-center items-center p-[7px]  box-border h-full w-full" id="toDoItem_check">
        <img className="object-cover border-b-black border-2 rounded-md" src="/todo-icon.jpg"/>
      </div>


      <div className="flex h-full w-full box-border p-1 pl-0 items-center nunito-sans-md" id="toDoItem_name"> 
        <span className = "" > {name} </span>
      </div>
    </div>
  );

}
export default ToDoItem;
