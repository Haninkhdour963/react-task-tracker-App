import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li style={{
      textDecoration: task.completed ? 'line-through' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px',
      borderBottom: '1px solid #ccc'
    }}>
      <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>&times;</button>
    </li>
  );
};

export default TaskItem;
