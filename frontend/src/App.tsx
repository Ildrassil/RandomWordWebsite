import './App.css'
import {WordDisplaySSE} from "./components/WordDisplaySSE.tsx";


function App() {

  return (
    <div className={"flex flex-col justify-center bg-transparent text-center" +
        "align-center item-center"}>

        <WordDisplaySSE/>
    </div>
  )
}

export default App
