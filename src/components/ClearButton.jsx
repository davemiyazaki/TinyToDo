const ClearButton = () => {

  const ClearList = () => {
    console.log("Clear button is clicked");
    const list = document.getElementsByClassName("__checked");
    console.log(list)

    if(list.length == 0){
      console.log("There are no completed tasks");
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
        border-none rounded-[16px] px-7 py-3 tracking-[0.0525rem] font-bold 
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
