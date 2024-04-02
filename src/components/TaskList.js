import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  const handleToggle = (id) => {
    toggleTask(id);
  };

  return (
    <ul className="card list-group">
      {tasks.map((task) => (
        <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="form-check-input me-2"
              />
              <span>{task.text}</span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm ms-2">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleTask })(TaskList);
