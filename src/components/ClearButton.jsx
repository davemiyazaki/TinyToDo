import { useState } from "react";
const ClearButton = () => {

  const ClearList = () => {
    console.log("Clear button is clicked");
    const list = document.getElementsByClassName("__checked");
    console.log(list)

    if(list.length == 0){
      alert("There are No Completed Tasks to Clear.");
      return;
    }

    /*const attribute  = list[0].parentElement;
    attribute.remove();*/
    for(let item = list.length-1; item >= 0; item--){
      list[item].parentElement.remove();
      console.log(item + " item was deleted");
      console.log(list.length);
    }
  }

  const [completedTaskExists, UpdateCompletedTasksExists] = useState(false);
  return(
  <div className=" w-full h-px flex bg-primary">
  </div>
  );
}

export default ClearButton;
