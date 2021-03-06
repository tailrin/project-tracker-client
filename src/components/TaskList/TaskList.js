import React, { Component } from "react";
import Task from "../Task/Task";
import { Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";
import "./TaskList.css";

class TaskList extends Component {
  static defaultProps = { tasks: [] };
  static contextType = ApiContext;

  formatDate = (duedate) => {
    if (duedate) {
      let extraChars = duedate.indexOf("T");
      return duedate.slice(0, extraChars);
    }
  };

  renderTaskList = () => {
    const tasksForProject = this.props.tasks;
    const taskList = tasksForProject.map((task) => (
      <Task
        key={task.id}
        taskId={task.id}
        task_name={task.task_name}
        assignedto={task.assignedto}
        description={task.description}
        priority={task.priority}
        status={task.status}
        datecreated={this.formatDate(task.datecreated)}
        datemodified={this.formatDate(task.datemodified)}
        type={this.props.type}
      />
    ));
    return taskList;
  };

  componentDidMount = () => {
    const htmlNode = document.getElementById("html");
    const projectList = document.getElementById("project-list");
    const taskList = document.getElementById("task-list");
    const x = (window.innerHeight - 25) * 0.885;
    if (projectList.scrollHeight > x) {
      htmlNode.style.height = "auto";
    } else if (taskList.scrollHeight > x) {
      htmlNode.style.height = "auto";
    } else {
      htmlNode.style.height = "100%";
    }
  };

  renderButton = () => {
    if (this.context.getisAdmin() && this.context.getProjects().length > 0) {
      return (
        <button
          onClick={() => this.context.handleDeleteSelected("selectedTasks")}
        >
          Delete Selected
        </button>
      );
    }
    return;
  };

  // Display list of tasks and removes option to add if user is in completed view
  render() {
    let listType = this.props.type;
    if (listType === "completed") {
      return (
        <div className="task-list" id="task-list">
          {this.renderTaskList()}
          <br></br>
          {!this.context.getIsMobile() && this.renderButton()}
        </div>
      );
    } else {
      return (
        <div className="task-list" id="task-list">
          {this.renderTaskList()}
          <Link to={`/addtask/${this.props.projectId}`}>
            <div className="add-task-btn-container">
              <button className="add-task-btn">+ Add Task</button>
            </div>
          </Link>
          {!this.context.getIsMobile() && this.renderButton()}
        </div>
      );
    }
  }
}

export default TaskList;
