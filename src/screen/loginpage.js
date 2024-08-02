import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/userstore';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const login = useStore(state => state.login);
  const addUser = useStore(state => state.addUser);
  const navigate = useNavigate();

  const handleLogin = () => {
     addUser(username);
     login(username)
    navigate('adduser');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
