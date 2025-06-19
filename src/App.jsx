import './App.css'
import ToDoList from "./components/Todo.jsx"
import EntryField from "./components/EntryField";

function App() {

  return (
    <div className='w-80 h-96 bg-amber-50' id = "main">
      <EntryField/>
      <ToDoList/>
    </div>
  )
}

export default App
