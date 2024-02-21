import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import CustomFooter from './components/Footer';
import { Home, Contact, Projects, Custom404} from './components/Pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename={'/react-portfolio'}>
      <MyNavbar />

      <Routes>
        <Route path='/portfolio' element={< Projects />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/404' element={< Custom404 />} />
        <Route path='' element={< Home />} />
      </Routes>
      <CustomFooter />

    </Router>
  )
}

export default App