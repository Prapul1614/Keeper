import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [decider, setDecider] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function expand() {
    setDecider(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {decider ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={decider ? 3 : 1}
        />
        <Zoom in={decider}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
