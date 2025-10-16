import React from 'react'

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">Edu<span>Portal</span></div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#grades">Grades</a></li>
              {isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header