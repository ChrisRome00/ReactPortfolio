import { useState } from 'react'
import NavTabs from './components/NavTabs.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <NavTabs />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
