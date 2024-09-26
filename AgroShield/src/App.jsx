import { useState } from 'react'
import './App.css'
//import layout from './pages/layout/Layout'
import { RouterProvider } from 'react-router-dom';
import router from './configs/router';
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
