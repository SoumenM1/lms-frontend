import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';

// Mock authentication logic
const mockUser = { email: 'admin@example.com', password: 'password', id: '1' };

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email === mockUser.email && password === mockUser.password) {
      const token = sign({ id: mockUser.id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
