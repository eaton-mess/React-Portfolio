import { useState } from 'react'
import MyNav from './components/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />
    </>
  )
}

export default App
