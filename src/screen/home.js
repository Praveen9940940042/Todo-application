// src/screen/home.js
import React, { useState } from 'react';
import useStore from '../store/userstore';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/todolist';

const Home = () => {
  const user = useStore(state => state.user);
  const logout = useStore(state => state.logout);
  const [todo, setTodo] = useState('');
  const addTodo = useStore(state => state.addTodo);
  const navigate = useNavigate();

  // Function to handle logout and redirect to the RegisterPage
  const handleLogout = () => {
    logout(); // Call the logout function from your store
    navigate('/register'); // Redirect to RegisterPage
  };

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (todo.trim()) {
      addTodo({
        id: Date.now(),
        text: todo,
        completed: false,
      });
      setTodo('');
    }
  };

  return (
    <div>
      <h1> {user} Home</h1>
      <button onClick={handleLogout}>Back</button> {/* Use handleLogout */}
      <input
        type="text"
        placeholder="New Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </div>
  );
};

export default Home;
