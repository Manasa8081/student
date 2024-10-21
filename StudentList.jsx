import React from 'react';
import StudentCard from './StudentCard';

const students = [
  { id: 1, name: 'John Doe', grade: 'A', score: 90 },
  { id: 2, name: 'Jane Smith', grade: 'B', score: 85 },
  { id: 3, name: 'Alex Johnson', grade: 'C', score: 75 }
];

const StudentList = () => {
  return (
    <div className="student-list">
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
