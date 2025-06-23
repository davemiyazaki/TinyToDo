const ToDoItem = ( {name = "_untitled_item"}) =>{
  return(
    <div className=" p-0 px-4 grid grid-cols-[10%_90%] w-full h-fit text-sm" id="toDoItem_main">
      <div className= "flex justify-center items-center p-[8px]  box-border h-full w-full" id="toDoItem_check">
        <img className="object-cover " src="/todo-icon.svg"/>
      </div>

      <div className="flex h-full w-full box-border items-center nunito-sans-md" id="toDoItem_name"> 
        <span className = "" > {name} </span>
      </div>
    </div>
  );

}
export default ToDoItem;
