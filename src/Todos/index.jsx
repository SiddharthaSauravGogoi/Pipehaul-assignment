import React from "react";
import PropTypes from "prop-types";
import deleteIcon from "../assets/trashcan.png";

export default function Todos(props) {
  return (
    <div className="todo d-flex align-center space-between">
      <div className="todo-data-wrapper">
        <p> {props.todo.title}</p>
        <h6> {props.todo.day}</h6>
      </div>
      <div className="todo-delete">
        <img
          src={deleteIcon}
          alt=""
          height="50"
          onClick={() => props.deleteTodo(props.todo.id)}
        />
      </div>
    </div>
  );
}

Todos.propTypes = {
  props: PropTypes.object,
};
