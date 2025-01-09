import React, { useState } from 'react'
import './style/To_Do_list.css'

const To_Do_list = () => {
    // State to store the list of tasks 
    const [tasks, setTasks] = useState([]);
    // State to store the current of task being typed
    const [task, setTask] = useState("");

    // Function to handle addinf of a new task
    function handleAddTask() {
        // Check if the input task is empty & if so alert the user
        if (task.trim() === "") {
            alert("Task cannot be empty");
            return; // to exit the function
        }

        // Create a new task object with a unique id
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
        };

        // Update the tasks state with new task
        setTasks([...tasks, newTask]);
        setTask("") // Empty the task-input 
    };

    // Function to delete a task by its is
    const handleDeleteTask = (id) => {
        // Filter out the task with the given id from the list 
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks); // Update the tasks state with the filtered list
    };


    // Function to toggle the completion status of a task
    const handleToggleComplete = (id) => {
        // Update the tasks by toggling the 'completed' status of the task with the given id
        const updateTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task // Toggle completed status
        );
setTasks(updateTasks); // Update tasks state with the modified list
    };


return (
    <div className='todo-container'>
        <h2>To-Do List</h2>
        <div className="input-container">
            {/* Infut field for adding a new task */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Add a new task....'
                className='task-input'
            />

            {/* Btn to add a new task */}
            <button className='add-btn' onClick={handleAddTask}>Add Task</button>
        </div>

        {/* Display the list of tasks */}
        <ul className="task-list">
            {tasks.map((task) => (
                // ternary operator is used to toggle completed class to particular task
                <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`} >

                    {/* handleToggleComplete is on both checkbox & span  */}
                    <input type="checkbox" checked={task.completed} onClick={() => handleToggleComplete(task.id)} />

                    <span onClick={() => handleToggleComplete(task.id)} className="task-content">{task.text}</span>

                    <button onClick={() => handleDeleteTask(task.id)} className='delete-btn'>Delete</button>
                </li>
            ))
            }
        </ul>

    </div>
)
}

export default To_Do_list





// AS you can see task content and check box are work differently to make them in sync










































// Finished
// Thanks for Watching
// Comment any suggestions and project you want to see in next video



