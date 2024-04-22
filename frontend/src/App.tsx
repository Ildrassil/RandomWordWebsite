import './App.css'
import WordDisplay from "./components/WordDisplay.tsx";

function App() {

  return (
    <div className={"flex flex-col justify-center bg-transparent text-center" +
        "align-center item-center"}>
      <WordDisplay/>
    </div>
  )
}

export default App
