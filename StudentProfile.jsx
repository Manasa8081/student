import React from 'react';
import './StudentProfile.css'; // CSS for styling the profile page

const StudentProfile = () => {
  return (
    <div className="student-profile">
      <header className="profile-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nt4IqoEoUmJVSsosTKuaaPOsqt3IkX4lrA&s" alt="University Logo" className="university-logo"/>
        <nav className="profile-nav">
          <ul>
            <li><a href="#personal-info">Personal</a></li>
            <li><a href="#tenth-details">Tenth Details</a></li>
            <li><a href="#attendance">Attendance</a></li>
            <li><a href="#marks">Marks</a></li>
            <li><a href="#parent-details">Parent Details</a></li>
          </ul>
        </nav>
        <button className="logout-button">Logout</button>
      </header>
      
      <section className="profile-section" id="personal-info">
        <h2>Personal Information</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>PERAM MANASA</td>
              <td><strong>Semester:</strong></td>
              <td>1</td>
            </tr>
            <tr>
              <td><strong>Course:</strong></td>
              <td>B.Tech</td>
              <td><strong>Section:</strong></td>
              <td>B</td>
            </tr>
            <tr>
              <td><strong>Branch:</strong></td>
              <td>AI & ML</td>
              <td><strong>Gender:</strong></td>
              <td>F</td>
            </tr>
            <tr>
              <td><strong>Year:</strong></td>
              <td>3</td>
              <td><strong>Date of Birth:</strong></td>
              <td>11 Sep 2004</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="profile-section" id="tenth-details">
        <h2>Tenth Details</h2>
        <p>Tenth score and related information goes here...</p>
      </section>

      {/* Add other sections for Attendance, Marks, Parent Details */}
    </div>
  );
};

export default StudentProfile;
