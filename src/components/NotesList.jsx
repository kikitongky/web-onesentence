/* eslint-disable react/prop-types */
import NotesItem from "./NotesItem";

export default function NotesList({ notes, deleteNote, editNote }) {
  return (
    <div className="space-y-2 mt-3">
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
