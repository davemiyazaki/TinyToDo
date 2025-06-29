const ClearButton = () => {
  const ClearList = () => {
    console.log("Clear button is clicked");
    const list = document.getElementsByClassName("__checked");
    console.log(list)
    if(list.length == 0){
      console.log("There are no completed tasks");
      return;
    }
    const idFirstElement  = list[0].getAttribute("id");
    console.log(document.querySelector("div#"+idFirstElement));
  }

  return(
  <div className=" w-full flex justify-end" >
    <button className="
        border-none rounded-[16px] px-7 py-3 tracking-[0.0525rem] font-bold 
        transition ease-out duration-500 shadow-lg 
        bg-text text-secondary 
        active:shadow-lg
        active:bg-text
        hover:shadow-xl 
        hover:bg-text-dark" 
        onClick={ClearList}>

        Clear

      </button>
  </div>
  );
}

export default ClearButton;
