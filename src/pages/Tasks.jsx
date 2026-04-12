import { useState } from "react";
import TaskForm from "../components/TaskForm";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    function addTask(text) {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleTask(id) {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    }
    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "active") return !task.completed;
        return true; 
    });

    return (
        <div>

            <div>
          <TaskForm onAddTask={addTask} />
           </div>

            <div>
                <br />
                <h2>Task List</h2>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("active")}>Active</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.completed ? "line-through" : "none" }}
                            onClick={() => toggleTask(task.id)}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}






export default Tasks;