import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/userstore';

const AddUser = () => {
    const user = useStore(state => state.user);
   const [username, setUsername] = useState('');
  const addUser = useStore(state => state.addUser);
  const navigate = useNavigate();

  const handleAddUser = () => {
    if (username.trim() !== '') {
      addUser(username);
    //   navigate('/');
    }
  };
  const handleAdd = () => {
    navigate('todos')
  }

  return (
    <div>
      <h2>User</h2>
      {/* <input
        // type="text"
        // placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      <button onClick={handleAddUser} style={{marginLeft:110, marginTop:-200}}>Add User</button>
<br></br>
<br></br>
<br></br>
     <p onClick={handleAdd}>{user} </p> 
    </div>
  );
};

export default AddUser;
