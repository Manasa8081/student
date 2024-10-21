import React, { useState } from 'react';
import './AddMarks.css'; // Optional: Add external CSS for styling

const AddMarks = () => {
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState([{ subject: 'DBMS', score: '86' }]);
  const [error, setError] = useState('');

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleMarksChange = (index, field, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index][field] = value;
    setMarks(updatedMarks);
  };

  const addSubjectField = () => {
    setMarks([...marks, { subject: 'WSDM', score: '90' }]);
  };

  const removeSubjectField = (index) => {
    const updatedMarks = marks.filter((_, i) => i !== index);
    setMarks(updatedMarks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!studentId) {
      setError('Student ID is required');
      return;
    }

    for (let mark of marks) {
      if (!mark.subject || !mark.score) {
        setError('All fields are required');
        return;
      }
    }

    setError('');
    // Submit the form data to the backend or log it for now
    console.log('Submitted:', { studentId, marks });

    // Reset form fields after submission
    setStudentId('');
    setMarks([{ subject: 'FIP', score: '95' }]);
  };

  return (
    <div className="add-marks-page">
      <h2>Add Marks for Students</h2>
      <form onSubmit={handleSubmit} className="add-marks-form">
        <div className="form-group">
          <label htmlFor="student-id">Student ID:</label>
          <input
            type="text"
            id="student-id"
            value={studentId}
            onChange={handleStudentIdChange}
            required
          />
        </div>

        {marks.map((mark, index) => (
          <div key={index} className="marks-input-group">
            <div className="form-group">
              <label htmlFor={`subject-${index}`}>Subject:</label>
              <input
                type="text"
                id={`subject-${index}`}
                value={mark.subject}
                onChange={(e) => handleMarksChange(index, 'subject', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`score-${index}`}>Marks:</label>
              <input
                type="number"
                id={`score-${index}`}
                value={mark.score}
                onChange={(e) => handleMarksChange(index, 'score', e.target.value)}
                required
              />
            </div>

            {marks.length > 1 && (
              <button
                type="button"
                onClick={() => removeSubjectField(index)}
                className="remove-button"
              >
                Remove Subject
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addSubjectField} className="add-subject-button">
          Add Another Subject
        </button>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Submit Marks</button>
      </form>
    </div>
  );
};

export default AddMarks;
