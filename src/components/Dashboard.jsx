import React from 'react'

const Dashboard = ({ student }) => {
  const completionPercentage = Math.round((student.creditsCompleted / 120) * 100)

  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h2>Welcome, {student.name}!</h2>
        <p>Here's your academic overview for this semester.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">Current Courses</div>
          <div className="card-body">
            <ul className="course-list">
              {student.courses.map((course, index) => (
                <li key={index}>
                  {course.name} <span className="grade">{course.grade}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Academic Progress</div>
          <div className="card-body">
            <p>Overall Completion: <strong>{completionPercentage}%</strong></p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Credits Completed: <strong>{student.creditsCompleted}</strong> / <span>120</span>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Upcoming Assignments</div>
          <div className="card-body">
            <ul className="course-list">
              {student.assignments.map((assignment, index) => (
                <li key={index}>
                  {assignment.name} <span>{assignment.due}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Grade Summary</div>
          <div className="card-body">
            <p>Current GPA: <strong>{student.gpa}</strong></p>
            <p>Semester GPA: <strong>{student.semesterGpa}</strong></p>
            <p>Academic Standing: <strong>Good</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard