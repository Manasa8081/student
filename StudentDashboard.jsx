import React from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css'; // Ensure you create and link this CSS file

const StudentDashboard = ({ name }) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {name}</h1>
      <p>Your personalized student portal interface</p>

      <div className="dashboard-sections">
        <div className="section">
          <h2><Link to="/student-attendance">Attendance</Link></h2>
          <p>Track your attendance records.</p>
        </div>
        <div className="section">
          <h2><Link to="/student-marks/internal">Internal Marks</Link></h2>
          <p>View your internal assessment marks.</p>
        </div>
        <div className="section">
          <h2><Link to="/student-marks/external">External Marks</Link></h2>
          <p>Check your external exam results.</p>
        </div>
        <div className="section">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>Explore your academic and personal projects.</p>
        </div>
        <div className="section">
          <h2><Link to="/placements">Placements</Link></h2>
          <p>Find information about placement opportunities.</p>
        </div>
        <div className="section">
          <h2><Link to="/extracurricular">Extracurricular</Link></h2>
          <p>View and participate in extracurricular activities.</p>
        </div>
        <div className="section">
          <h2><Link to="/internships">Personal Coding Internships</Link></h2>
          <p>Explore available internship opportunities tailored for you.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
