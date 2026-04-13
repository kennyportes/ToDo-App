import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!text.trim()) return;
    onAddTask(text); 
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mx-auto w-50">
      <input
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );

}

export default TaskForm;