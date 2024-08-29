let questions = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(questions);
  } else if (req.method === 'POST') {
    const { text, difficulty } = req.body;
    if (difficulty >= 1 && difficulty <= 10) {
      questions.push({ id: questions.length + 1, text, difficulty });
      res.status(201).json({ message: 'Question created' });
    } else {
      res.status(400).json({ message: 'Invalid difficulty' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
