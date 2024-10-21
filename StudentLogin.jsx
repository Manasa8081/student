import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentLogin.css';

const StudentLogin = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      onLogin(loginId, password, 'student');
      setIsFormSubmitted(false); // Reset animation after submission
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className={`login-container ${isFormSubmitted ? 'form-submitted' : ''}`}>
        <h2 className="animated-heading">Welcome Back, Student!</h2>
        <p className="sub-text">Please enter your credentials to log in</p>
        <form onSubmit={handleSubmit} className="animated-form">
          <div className="form-group animated-field">
            <label>Login ID:</label>
            <input
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
            />
          </div>
          <div className="form-group animated-field">
            <label>Password:</label>
            <input
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
          <p>
            Don't have an account? <Link to="/signup" className="link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
