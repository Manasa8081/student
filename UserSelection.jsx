import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSelection.css'; // Link to the CSS file

const UserSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    if (role === 'student') {
      navigate('/student-login');
    } else if (role === 'faculty') {
      navigate('/faculty-login');
    }
  };

  return (
    <div className="main-container">
      <div className="title">
        <h1>Portal Access</h1>
      </div>
      <div className="user-selection-container">
        <div className="selection-card faculty" onClick={() => handleSelection('faculty')}>
          <div className="content">
            <h2>Faculty</h2>
            <button className="login-button">Login</button>
          </div>
        </div>
        <div className="selection-card student" onClick={() => handleSelection('student')}>
          <div className="content">
            <h2>Student</h2>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
