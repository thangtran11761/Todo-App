import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoInProgress(props) {
  const [listOfNotes, setListOfNote] = useState([]);

  useEffect(() => {
    setListOfNote(props.notes);
  }, [props.notes]);

  return (
    <div className="container list-todo-not-started">
      {listOfNotes?.map((note) => {
        if (note.status === "not_started") {
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

export default TodoInProgress;
