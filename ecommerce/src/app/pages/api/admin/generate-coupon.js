export default function handler(req, res) {
    if (req.method === 'POST') {
      const code = Math.random().toString(36).substr(2, 8).toUpperCase();
      discountCodes.push(code);
      res.status(200).json({ code });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }