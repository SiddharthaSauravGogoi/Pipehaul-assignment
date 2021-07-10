import React, { useState, useRef } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import PropTypes from "prop-types";

export default function AddTodoModal({ addTodo }) {
  const [visible, setVisible] = useState(false);

  const titleRef = useRef();
  const idRef = useRef();
  const dayRef = useRef();

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const handleTodoData = (event) => {
    event.preventDefault();
    const todo = {
      id: parseInt(idRef.current.value),
      title: titleRef.current.value,
      day: dayRef.current.value,
    };
    addTodo(todo);
    hide();
    titleRef.current.value = "";
    idRef.current.value = "";
    dayRef.current.value = "";
  };

  return (
    <div>
      <button onClick={show}>Add a new todo</button>

      <Rodal visible={visible} onClose={hide}>
        <form>
          <input
            type="number"
            placeholder="Unique number"
            ref={idRef}
            required
          />
          <input type="text" placeholder="title" ref={titleRef} required />
          <input type="text" placeholder="day" ref={dayRef} required />

          <button onClick={handleTodoData}>Add Todo</button>
        </form>
      </Rodal>
    </div>
  );
}

AddTodoModal.propTypes = {
  addTodo: PropTypes.func,
};
