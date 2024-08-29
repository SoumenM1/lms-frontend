// Register logic is mocked
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      // Registration logic here
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  