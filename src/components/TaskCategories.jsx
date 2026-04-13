function TaskCategories({ task, toggleTask, deleteTask }) {
  return (
    <div 
      className={`card w-50 mx-auto p-3 my-2 d-flex flex-row justify-content-between align-items-center shadow-sm  ${
        task.completed ? "bg-success-subtle border-success" : ""
      }`}
      
    >
      <span
        onClick={() => toggleTask(task.id)}
        style={{

          color: task.completed ? "#0a5d34" : "black", 
          cursor: "pointer",
          flexGrow: 1,
          fontWeight: task.completed ? "600" : "normal"
        }}
      >
        {task.completed && <span className="me-2">✅</span>} 
        {task.text}
      </span>
      
      <button 
        className="btn btn-sm btn-outline-danger ms-2" 
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}

export default TaskCategories;