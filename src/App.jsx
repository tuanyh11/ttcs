import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HeaderNav } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderNav/>
    </div>
  )
}

export default App
