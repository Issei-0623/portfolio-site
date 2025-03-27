export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { password } = req.body;
    const correctPassword = process.env.PASSWORD; // Vercel の環境変数を取得
  
    if (password === correctPassword) {
      return res.status(200).json({ message: '認証成功' });
    } else {
      return res.status(401).json({ message: 'パスワードが違います' });
    }
  }
  