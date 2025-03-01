import { useEffect, useReducer, useRef } from "react";
import Header from "./components/Header";
import { notesReducer } from "./context/NotesReducer";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

export default function App() {
  const [notes, dispatch] = useReducer(notesReducer, [], () => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("State notes terkini:", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Reducef

  const addNote = (text) => {
    dispatch({ type: "ADD_NOTES", payload: text });
    inputRef.current.focus();
  };

  const deleteNote = (id) => {
    dispatch({ type: "DELETE_NOTES", payload: id });
  };

  const editNote = (id, newText) => {
    dispatch({ type: "EDIT_NOTES", payload: { id, newText } });
  };

  return (
    <>
      <Header />
      <NotesForm addNote={addNote} inputRef={inputRef} />
      <NotesList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </>
  );
}
