import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/questions?page=${page}`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Questions (Page {page})</h2>
      <ul>
        {questions.map((question,index) => (
           <li key={question._id}>
           {index + 1 + (page - 1) * 10}. {question.text} {/* Show question number */}
         </li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}
