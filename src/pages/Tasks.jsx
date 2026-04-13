import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";


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

                <div>
                    <br />
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("active")}>Active</button>
                    <button onClick={() => setFilter("completed")}>Completed</button>
                </div>

                {filteredTasks.map(task => (
          <TaskCard
            key={task.id} 
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
            </div>
        </div>
    );
}

export default Tasks;