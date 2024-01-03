import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [editedTaskTitle, setEditedTaskTitle] = useState('');
  const [editedTaskDate, setEditedTaskDate] = useState('');
  const [editedTaskTime, setEditedTaskTime] = useState('');

  const addTask = () => {
    if (
      newTask.trim() !== '' &&
      newTaskTitle.trim() !== '' &&
      newTaskDate !== '' &&
      newTaskTime !== ''
    ) {
      const task = {
        title: newTaskTitle,
        text: newTask,
        date: newTaskDate,
        time: newTaskTime,
      };

      setTasks([...tasks, task]);
      setNewTask('');
      setNewTaskTitle('');
      setNewTaskDate('');
      setNewTaskTime('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    // Reset edit state when a task is removed
    setEditIndex(null);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditedTaskTitle(tasks[index].title);
    setEditedTask(tasks[index].text);
    setEditedTaskDate(tasks[index].date);
    setEditedTaskTime(tasks[index].time);
  };

  const cancelEditing = () => {
    setEditIndex(null);
    setEditedTaskTitle('');
    setEditedTask('');
    setEditedTaskDate('');
    setEditedTaskTime('');
  };

  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = editedTaskTitle;
    updatedTasks[index].text = editedTask;
    updatedTasks[index].date = editedTaskDate;
    updatedTasks[index].time = editedTaskTime;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  return (
    <div className="container mt-8 p-8 bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">Todo List</h1>
      <div className="mb-4 block">
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <input
          type="time"
          value={newTaskTime}
          onChange={(e) => setNewTaskTime(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <button onClick={addTask} className="bg-blue-50 text-red-500 px-4 py-2 rounded">
          Add Task
        </button>
      </div>
      <ul className="list-none">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTaskTitle}
                  onChange={(e) => setEditedTaskTitle(e.target.value)}
                  className="border rounded p-2 mr-2"
                />
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="border rounded p-2 mr-2"
                />
                <input
                  type="date"
                  value={editedTaskDate}
                  onChange={(e) => setEditedTaskDate(e.target.value)}
                  className="border rounded p-2 mr-2"
                />
                <input
                  type="time"
                  value={editedTaskTime}
                  onChange={(e) => setEditedTaskTime(e.target.value)}
                  className="border rounded p-2 mr-2"
                />
                <button onClick={() => saveEditedTask(index)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                  Save
                </button>
                <button onClick={cancelEditing} className="bg-gray-500 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <strong className="mr-2">{task.title}</strong>
                {task.text} - {task.date} - {task.time}
                <button onClick={() => startEditing(index)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => removeTask(index)} className="bg-red-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
