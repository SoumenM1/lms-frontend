import { useEffect, useState } from 'react';
import fetch from '../../utils/fetch';

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div>
      <h1>Admin Questions</h1>
      {/* Render questions list */}
      <ul>
        {questions.map(q => (
          <li key={q.id}>{q.text} - Difficulty: {q.difficulty}</li>
        ))}
      </ul>
    </div>
  );
}
