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
    <button className="border-none w-12 bg-accent text-white" onClick={ClearList}>Clear</button>
  );
}

export default ClearButton;
