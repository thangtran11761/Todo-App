import React, { useState } from "react";

import classes from "./Todo.module.css";
import { formatDate } from "../Services/DateService";

const TodoItem = (props) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setData] = useState(props.note);

  const onChangeTitleHandler = (event) => {
    event.preventDefault();

    setData((prev) => {
      return { ...prev, title: event.target.value };
    });
  };

  const onUpdateTitleHandler = (id) => {
    data.updatedAt = formatDate(new Date());
    props.onUpdateNoteHandler(id, data);
  };

  const onChangeStatusHandler = (event) => {
    event.preventDefault();

    data.status = event.target.checked ? "completed" : "not_started";
    data.updatedAt = formatDate(new Date());
    props.onUpdateNoteHandler(props.note.id, data);
  };

  return (
    <li className={"task"} key={props.note.id}>
      <div className={classes["wrap-task"]}>
        <input
          className={"status"}
          type="checkbox"
          checked={data.status === "completed" ? true : false}
          onChange={onChangeStatusHandler}
        />
        {!showUpdate && (
          <div className={classes["wrap-content"]}>
            <div className={classes["task-content"]}>{props.note.title}</div>
            <button
              className={classes["task-btn-update"]}
              onClick={(event) => {
                event.preventDefault();
                setShowUpdate(true);
              }}
            >
              Sửa
            </button>
          </div>
        )}
        {showUpdate && (
          <div className={classes["wrap-content-update"]}>
            <input
              className={classes["task-content-update"]}
              value={data.title}
              onChange={onChangeTitleHandler}
            />
            <button
              className={classes["task-btn-ok"]}
              onClick={() => {
                onUpdateTitleHandler(props.note.id);
                setShowUpdate(false);
              }}
            >
              Ok
            </button>
          </div>
        )}
      </div>
      <button
        className={classes["task-btn-delete"]}
        onClick={(event) => {
          event.preventDefault();
          props.onDeleteNoteHandler(props.note.id);
        }}
      >
        Xóa
      </button>
    </li>
  );
};

export default TodoItem;
