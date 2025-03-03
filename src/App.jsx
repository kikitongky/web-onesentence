import { useEffect, useReducer, useRef } from "react";
import Header from "./components/Header";
import { notesReducer } from "./context/NotesReducer";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import Title from "./components/Title";

/**
 * Initializes state from localStorage when the app first loads.
 * If no data is found or an error occurs, returns an empty array.
 */
const initializeNotes = () => {
  try {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  } catch (error) {
    console.error("Error loading notes from localStorage:", error);
    return [];
  }
};

export default function App() {
  // Using useReducer for state management
  const [notes, dispatch] = useReducer(notesReducer, [], initializeNotes);

  // useRef is used to manage focus on the input field after adding a note
  const inputRef = useRef(null);

  /**
   * Synchronizes the notes state with localStorage whenever it changes.
   */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  /**
   * Adds a new note to the state.
   * @param {string} text - The content of the note to be added.
   */
  const addNote = (text) => {
    dispatch({ type: "ADD_NOTES", payload: text });
    inputRef.current.focus(); // Refocus the input field after adding a note
  };

  /**
   * Deletes a note based on its ID.
   * @param {string} id - The ID of the note to be deleted.
   */
  const deleteNote = (id) => {
    dispatch({ type: "DELETE_NOTES", payload: id });
  };

  /**
   * Edits an existing note based on its ID.
   * @param {string} id - The ID of the note to be edited.
   * @param {string} newText - The new text replacing the old note content.
   */
  const editNote = (id, newText) => {
    dispatch({ type: "EDIT_NOTES", payload: { id, newText } });
  };

  return (
    <>
      <Header />
      <Title />
      <NotesForm addNote={addNote} inputRef={inputRef} />
      <NotesList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </>
  );
}
