import { useEffect, useState } from "react";
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
  return(
  <div className=" w-full flex justify-end mt-[auto]" >
    <button className="
         
        border-none rounded-full px-7 py-3 tracking-[0.0525rem] font-bold 
        transition ease-out duration-300 shadow-lg 
        bg-text text-secondary 
        active:bg-text
        hover:bg-text-dark" 
        onClick={ClearList}>

        Clear

      </button>
  </div>
  );
}

export default ClearButton;
