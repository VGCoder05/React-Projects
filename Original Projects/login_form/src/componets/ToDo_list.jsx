import React, { useState } from "react";
import "./style/TodoList.css"; // Import CSS file for styling

const TodoList = () => {
  // State to store the list of tasks and the current task being typed
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if the input task is empty, and if so, alert the user
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    // Create a new task object with a unique id (using Date.now for uniqueness)
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false, // New tasks are initially not completed
    };

    // Update the tasks state with the new task
    setTasks([...tasks, newTask]);
    setTask(""); // Clear the input field after adding the task
  };

  // Function to toggle the completion status of a task
  const handleToggleComplete = (id) => {
    // Update the tasks by toggling the 'completed' status of the task with the given id
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task // Toggle completed status
    );


    setTasks(updatedTasks); // Update the tasks state with the modified list
  };

  // Function to delete a task by its id
  const handleDeleteTask = (id) => {
    // Filter out the task with the given id from the list
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Update the tasks state with the filtered list
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <div className="input-container">
        {/* Input field for adding a new task */}
        <input
          type="text"
          value={task} // Bind input value to state
          onChange={(e) => setTask(e.target.value)} // Update state when typing
          placeholder="Add a new task..." // Placeholder text in the input
          className="task-input" // CSS class for styling
        />
        {/* Button to trigger the addition of a new task */}
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
      </div>

      {/* Display the list of tasks */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            {/* Click on it toggle its completion status */}
            <input type="checkbox" checked={task.completed} onClick={() => handleToggleComplete(task.id)} />
            <span className="task-content" onClick={() => handleToggleComplete(task.id)}>{task.text} </span>
            {/* Button to delete a task */}
            <button onClick={() => handleDeleteTask(task.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;