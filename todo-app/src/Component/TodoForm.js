import React, { useState } from "react";

import { post } from "../Services/TodoService";
import { formatDate } from "../Services/DateService";

import classes from "./Todo.module.css";

const TodoForm = (props) => {
  const [data, setData] = useState({
    startDate: formatDate(new Date()),
    endDate: formatDate(new Date()),
    createdAt: formatDate(new Date()),
    updatedAt: formatDate(new Date()),
    categoryId: null,
    status: "not_started",
    title: "",
    name: "Thang",
  });

  const onChangeInputHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
        title: event.target.value,
      };
    });
  };

  const onChangeCheckboxHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
        status: event.target.checked ? "completed" : "not_started",
      };
    });
  };

  const onAddNoteHandler = (event) => {
    event.preventDefault();
    data.startDate = formatDate(new Date());
    data.endDate = formatDate(new Date());
    data.createdAt = formatDate(new Date());
    data.updatedAt = formatDate(new Date());
    data.categoryId = null;

    post(data).then((res) => {
      props.setNoteAdd(res.id);
      data.status = "not_started";
      data.title = "";
    });
  };

  const onKeyDownHandler = (event) => {
    // event.preventDefault();
    if (event.key === "Enter" || event.keyCode === 13) {
      onAddNoteHandler();
    }
  };

  return (
    <div className={`${classes["container"]}`}>
      <form className={classes["form-add-todo"]}>
        <input
          className={classes["form-checkbox-status"]}
          type="checkbox"
          onChange={onChangeCheckboxHandler}
          checked={data.status === "not_started" ? false : true}
        />
        <input
          className={classes["form-input-title"]}
          placeholder="Nhập nội dung vào đây..."
          type="text"
          onChange={onChangeInputHandler}
          onKeyDown={onKeyDownHandler}
          value={data.title}
        ></input>
        <button className={classes["form-btn-add"]} onClick={onAddNoteHandler}>
          Thêm
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
