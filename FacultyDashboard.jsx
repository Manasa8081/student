import React from 'react';
import { Link } from 'react-router-dom';
import './FacultyDashboard.css'; // Import your CSS for styling

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard">
      <h1>Faculty Dashboard</h1>
      <p>Welcome to the faculty portal.</p>

      <div className="dashboard-sections">
        <div className="section">
          <h2><Link to="/faculty-attendance">View Attendance</Link></h2>
          <p>Monitor student attendance records.</p>
        </div>
        <div className="section">
          <h2><Link to="/faculty-grades">Manage Grades</Link></h2>
          <p>Update and manage student grades.</p>
        </div>
        <div className="section">
          <h2><Link to="/faculty-schedule">Class Schedule</Link></h2>
          <p>View your teaching schedule.</p>
        </div>
        <div className="section">
          <h2><Link to="/faculty-reports">Generate Reports</Link></h2>
          <p>Create attendance and performance reports.</p>
        </div>
        <div className="section">
          <h2><Link to="/faculty-communication">Communication</Link></h2>
          <p>Communicate with students and staff.</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
