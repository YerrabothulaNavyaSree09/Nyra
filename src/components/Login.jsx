import React, { useState } from 'react'

const Login = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Sample student data
  const students = {
    'S12345': { 
      name: 'John Smith', 
      password: 'password123', 
      courses: [
        { name: 'Mathematics', grade: 'A', credits: 4 },
        { name: 'Computer Science', grade: 'B+', credits: 3 },
        { name: 'Physics', grade: 'A-', credits: 4 },
        { name: 'English Literature', grade: 'B', credits: 3 }
      ], 
      assignments: [
        { name: 'Math Assignment 3', due: '2023-10-20', course: 'Mathematics' },
        { name: 'CS Project', due: '2023-10-25', course: 'Computer Science' },
        { name: 'Physics Lab Report', due: '2023-10-22', course: 'Physics' }
      ], 
      gpa: 3.6, 
      semesterGpa: 3.5, 
      creditsCompleted: 45 
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (students[studentId] && students[studentId].password === password) {
      onLogin({
        id: studentId,
        ...students[studentId]
      })
    } else {
      setError('Invalid student ID or password')
    }
  }

  return (
    <div className="login-container">
      <h2>Student Portal Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="student-id">Student ID</label>
          <input
            type="text"
            id="student-id"
            className="form-control"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
        <p>Demo Credentials:</p>
        <p>Student ID: S12345</p>
        <p>Password: password123</p>
      </div>
    </div>
  )
}

export default Login