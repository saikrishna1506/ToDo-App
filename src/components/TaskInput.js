import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask({ id: Date.now(), text: task, completed: false });
      setTask("");
    }
  };

  return (
    <div className="container card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={task}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addTask })(TaskInput);
