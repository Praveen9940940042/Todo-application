// src/screen/GroupTodos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/userstore';

const GroupTodos = () => {
  const user = useStore(state => state.user);
  const todos = useStore(state => state.todos);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('home');
  };

  return (
    <div>
      <p style={{marginLeft:25}}>{user}</p>
      <p style={{fontSize:20,marginTop:-10,marginLeft:25}}>Todos Group</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.text}
          </li>
        ))}
      </ul>
      <button style={{marginTop:-50,marginLeft:250,}}>ADD</button>
      <br></br>
      <p style={{marginLeft:25}}>Office</p>
      <p onClick={handleHome} style={{marginLeft:25}}>Home</p>

      
    </div>
  );
};

export default GroupTodos;
