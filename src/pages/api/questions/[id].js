let questions = [];

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const question = questions.find(q => q.id === parseInt(id));
    res.status(200).json(question || {});
  } else if (req.method === 'PUT') {
    const { text, difficulty } = req.body;
    let question = questions.find(q => q.id === parseInt(id));
    if (question) {
      question.text = text;
      question.difficulty = difficulty;
      res.status(200).json({ message: 'Question updated' });
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } else if (req.method === 'DELETE') {
    questions = questions.filter(q => q.id !== parseInt(id));
    res.status(200).json({ message: 'Question deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
