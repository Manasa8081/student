import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FacultyLogin.css'; // Make sure this path is correct

const FacultyLogin = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      onLogin(loginId, password, 'faculty');
      setIsFormSubmitted(false);  // Reset the animation after submission
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className={`login-container ${isFormSubmitted ? 'form-submitted' : ''}`}>
        <h2 className="animated-heading">Faculty Login</h2>
        <p className="sub-text">Welcome back, please enter your credentials</p>
        <form onSubmit={handleSubmit} className="animated-form">
          <div className="form-group animated-field">
            <label htmlFor="loginId">Login ID:</label>
            <input
              id="loginId"
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
            />
          </div>
          <div className="form-group animated-field">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button animated-button">
            {isFormSubmitted ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="login-options animated-options">
          <p>
            <Link to="/forgot-password" className="link">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
