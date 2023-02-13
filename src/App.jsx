import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./Components/Common/Button/ButtonV1"
import Inputv1 from "./Components/Common/Input/InputV1"
import Inputv2 from "./Components/Common/Input/InputV2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button label={"text"}/>
      <Inputv1></Inputv1>
      <Inputv2></Inputv2>
    </div>
  )
}

export default App
