/* eslint-disable react/prop-types */
import NotesItem from "./NotesItem";

export default function NotesList({ notes, deleteNote, editNote }) {
  return (
    <div className="mt-3 mx-4 grid md:grid-cols-2 gap-3.5">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          note={note}
          deleteNote={() => deleteNote(note.id)}
          editNote={(newText) => editNote(note.id, newText)}
        />
      ))}
    </div>
  );
}
