import './App.css'
import ToDoList from "./components/ToDoList.jsx"
import EntryField from "./components/EntryField";
import ClearButton from "./components/ClearButton.jsx";
function App() {

  return (
    <div className='flex flex-col content-end w-80 h-96 bg-background border-text/50 border rounded-xl text-text pt-8 p-6 text-xs tracking-tight' id = 'main'>
      <EntryField/>
      <ToDoList/>
      <ClearButton/>
    </div>
  )
}

export default App
