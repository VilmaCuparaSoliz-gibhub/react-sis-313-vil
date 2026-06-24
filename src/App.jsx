import { useState } from 'react'
import Menu from './pages/menu.jsx'
import Ejemplo from './pages/ejemplo.jsx'
import Home from './pages/home.jsx'
import './App.css'

function App() {
  const [view, setView] = useState('menu')

  function handleNavigate(page) {
    setView(page)
  }

  return (
    <>
      {view === 'menu' && <Menu onNavigate={handleNavigate} />}
      {view === 'ejemplo' && <Ejemplo />}
      {view === 'home' && <Home />}
    </>
  )
}

export default App
