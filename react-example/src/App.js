import React from 'react';
import Card from './Card';

/*
Crear un componente que permita el manejo de una lista de elementos.
Descripción:
- Crea un componente llamado TodoList que permita a los usuarios agregar,
eliminar y mostrar tareas en una lista.
- Utiliza un input para que el usuario pueda escribir el nombre de la tarea.
- Muestra la lista de tareas en el componente.
- Agrega un botón para eliminar cada tarea de la lista.
*/

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
