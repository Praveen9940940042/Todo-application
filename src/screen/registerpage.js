import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/userstore';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const addUser = useStore(state => state.addUser);
  const login =useStore(state => state.login);
  const navigate = useNavigate();

  const handleRegister = () => {
    addUser(username);
    login(username);
    navigate('LoginPage');
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
