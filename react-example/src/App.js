import React from 'react';

function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Lista</h1>
      <input
        type="text"
        value={task}
        placeholder="Add a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
          {task} <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
