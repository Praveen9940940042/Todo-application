import React from 'react';
import useStore from '../store/userstore';

const TodoItem = ({ todo }) => {
  const removeTodo = useStore(state => state.removeTodo);

  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
