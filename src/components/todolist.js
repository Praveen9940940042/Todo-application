// src/components/todolist.js
import React from 'react';
import useStore from '../store/userstore';

const TodoList = () => {
  const todos = useStore(state => state.todos); // Get the list of todos
  const toggleTodo = useStore(state => state.toggleTodo); // Get the toggleTodo function
  const removeTodo = useStore(state => state.removeTodo); // Get the removeTodo function

  // Handler to toggle the completion status of a todo
  const handleCheckboxChange = (id) => {
    toggleTodo(id);
  };

  // Handler to remove a todo
  const handleRemoveClick = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{
            border: '1px solid #ddd',
            borderRadius: '2px',
            padding: '5px',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f9f9f9'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveClick(todo.id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
