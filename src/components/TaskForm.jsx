import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    

    onAddTask(text); 
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );

}

export default TaskForm;