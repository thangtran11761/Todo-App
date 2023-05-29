import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoInProgress from "./TodoInProgress";
import TodoCompleted from "./TodoCompleted";
import { get, put, del } from "../Services/TodoService";

const Todo = () => {
  const [listOfNotes, setListOfNote] = useState([]);

  const [noteDeleted, setNoteDeleted] = useState();
  const [noteAdd, setNoteAdd] = useState();
  const [noteUpdate, setNoteUpdate] = useState();

  useEffect(() => {
    get()
      .then((res) => {
        setListOfNote(res);
        setNoteUpdate(null);
      })
      .catch((error) => console.error("Error:", error));
  }, [noteDeleted, noteAdd, noteUpdate]);

  const onDeleteNoteHandler = (id) => {
    del(id)
      .then((res) => {
        setNoteDeleted(res.id);
      })
      .catch((error) => console.error("Error:", error));
  };

  const onUpdateNoteHandler = (id, data) => {
    put(id, data)
      .then((res) => setNoteUpdate(res.id))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <h1>To do App</h1>
      <TodoForm setNoteAdd={setNoteAdd} />
      <TodoInProgress
        key={"TodoInProgress"}
        notes={listOfNotes}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onUpdateNoteHandler={onUpdateNoteHandler}
      />
      <TodoCompleted
        key={"TodoCompleted"}
        notes={listOfNotes}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onUpdateNoteHandler={onUpdateNoteHandler}
      />
    </>
  );
};

export default Todo;
