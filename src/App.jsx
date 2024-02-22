import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import CustomFooter from './components/Footer';
import ContactModal from './components/ContactModal';
import { Home, Contact, Projects, Custom404} from './components/Pages'
import './App.css'

function App() {
  return (
    <Router basename={'/'}>
      <MyNavbar />
      <Routes>
        <Route path='*' element={< Home />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/projects' element={< Projects />} />
        <Route path='/404' element={< Custom404 />} />
      </Routes>
      <CustomFooter />
    </Router>
  )
}

export default App