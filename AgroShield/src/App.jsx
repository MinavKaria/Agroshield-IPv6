import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import layout from './pages/layout/Layout'

function App() {
  const [count, setCount] = useState(0)
  layout()
  return (
    <>
    </>
  )
}

export default App;
