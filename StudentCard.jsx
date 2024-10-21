import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>Grade: {student.grade}</p>
      <p>Score: {student.score}</p>
    </div>
  );
}

export default StudentCard;
