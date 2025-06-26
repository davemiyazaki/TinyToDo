import './App.css'
import ToDoList from "./components/ToDoList.jsx"
import EntryField from "./components/EntryField";
import ClearButton from "./components/ClearButton.jsx";
function App() {

  return (
    <div className='w-80 h-96 bg-background text-text pt-8 p-6 text-xs tracking-tight' id = 'main'>
      <EntryField/>
      <ToDoList/>
      <ClearButton/>
    </div>
  )
}

export default App
