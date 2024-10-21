import React from 'react';
import { Pie } from 'react-chartjs-2'; // Import Pie from react-chartjs-2
import 'chart.js/auto'; // This ensures chart.js is loaded correctly

const Attendance = () => {
  // Example attendance data (replace with real data)
  const attendanceData = {
    totalClasses: 100,
    attendedClasses: 85,
    missedClasses: 15,
  };

  const attendancePercentage = (
    (attendanceData.attendedClasses / attendanceData.totalClasses) * 100
  ).toFixed(2);

  console.log("Attendance data:", attendanceData); // Debugging

  // Data for the pie chart
  const pieData = {
    labels: ['Attended', 'Missed'],
    datasets: [
      {
        data: [attendanceData.attendedClasses, attendanceData.missedClasses],
        backgroundColor: ['#4caf50', '#ff5252'],
        hoverBackgroundColor: ['#388e3c', '#ff1744'],
      },
    ],
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Your Attendance</h2>

      {/* Display summary of attendance */}
      <p>
        You have attended <strong>{attendanceData.attendedClasses}</strong> out of{' '}
        <strong>{attendanceData.totalClasses}</strong> classes.
      </p>
      <p>Your attendance percentage is: <strong>{attendancePercentage}%</strong></p>

      {/* Pie chart for attendance visualization */}
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Attendance;
