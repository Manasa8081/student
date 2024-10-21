import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en'); // Default language English

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginId, password);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Optionally, you can add a translation function here to change the language dynamically.
  };

  return (
    <div className="login-page">
      <h2>Login to Student Portal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login ID:</label>
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="login-options">
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      <div className="language-selection">
        <label htmlFor="language">Select Language: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default LoginPage;
