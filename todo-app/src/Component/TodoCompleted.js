import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoCompleted(props) {
  const [listOfNotes, setListOfNote] = useState([]);

  useEffect(() => {
    setListOfNote(props.notes);
  }, [props.notes]);

  return (
    <div className="container list-todo-completed">
      <h2>Completed</h2>
      {listOfNotes.map((note) => {
        if (note.status === "completed") {
          return (
            <TodoItem
              key={note.id}
              note={note}
              onDeleteNoteHandler={props.onDeleteNoteHandler}
              onUpdateNoteHandler={props.onUpdateNoteHandler}
            />
          );
        }
      })}
    </div>
  );
}

export default TodoCompleted;
