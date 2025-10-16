import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './styles/App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [student, setStudent] = useState(null)

  const handleLogin = (studentData) => {
    setStudent(studentData)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setStudent(null)
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="main-content">
        <div className="container">
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Dashboard student={student} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App