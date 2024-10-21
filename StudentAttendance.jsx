import React, { useEffect, useState } from 'react';
import './Attendance.css'; // Import the CSS for styling

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch('/api/get-attendance'); // Replace with your API endpoint
        if (!response.ok) throw new Error('Failed to fetch attendance data');
        const data = await response.json();
        setAttendanceData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { percentage } = attendanceData;

  return (
    <div className="attendance-container">
      <h1>Your Attendance Percentage</h1>
      <h2>{percentage}%</h2>
    </div>
  );
};

export default Attendance;
