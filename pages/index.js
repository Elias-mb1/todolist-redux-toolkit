

// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './todoslice';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: 'New Todo', completed: false };
    dispatch(addTodo(newTodo));
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleToggleTodo(todo.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
