import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelection from './UserSelection';
import StudentLogin from './StudentLogin';
import Signup from './SignUp';
import FacultyLogin from './FacultyLogin';
import StudentDashboard from './StudentDashboard';
import FacultyDashboard from './FacultyDashboard';
import StudentAttendance from './StudentAttendance';
import StudentMarks from './StudentMarks';
import StudentInfo from './StudentInfo';
import FacultyAttendance from './FacultyAttendance';
import FacultySections from './FacultySections';
import AddMarks from './AddMarks';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userName, setUserName] = useState('');

  const handleLogin = (loginId, password, role) => {
    const validLoginId = role === 'student' ? 'Manasa' : 'Manasa';
    const validPassword = 'Manasa';

    if (loginId === validLoginId && password === validPassword) {
      setUserRole(role);
      setUserName(loginId);
      setIsLoggedIn(true);
    } else {
      alert('Invalid Login ID or Password');
    }
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            {userRole === 'student' ? (
              <>
                <Route path="/" element={<StudentDashboard name={userName} />} />
                <Route path="/student-attendance" element={<StudentAttendance />} />
                <Route path="/student-marks" element={<StudentMarks />} />
                <Route path="/student-info" element={<StudentInfo />} />
              </>
            ) : (
              <>
                <Route path="/" element={<FacultyDashboard name={userName} />} />
                <Route path="/faculty-attendance" element={<FacultyAttendance />} />
                <Route path="/faculty-sections" element={<FacultySections />} />
                <Route path="/add-marks" element={<AddMarks />} />
              </>
            )}
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<UserSelection />} />
            <Route path="/student-login" element={<StudentLogin onLogin={handleLogin} />} />
            <Route path="/faculty-login" element={<FacultyLogin onLogin={handleLogin} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
