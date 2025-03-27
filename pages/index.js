import { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setMessage('ログイン成功！');
      // 認証成功時の処理（例: 本来のページを表示）
    } else {
      setMessage('パスワードが違います');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>パスワード認証</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワードを入力"
      />
      <button onClick={handleLogin}>ログイン</button>
      <p>{message}</p>
    </div>
  );
}
