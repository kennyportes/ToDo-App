import { useState } from "react";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    function addTask(text) {
        setTasks([...tasks, { id: Date.now(), text, complete: false }]);
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
 

}

     


export default Tasks;