/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function NotesItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleSave = () => {
    editNote(newText);
    setIsEditing(false);
  };

  return (
    <div className="bg-red-600 mx-9 flex items-center px-3 py-3.5 rounded ">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{note.text}</span>
      )}
      ;
      <div>
        {isEditing ? (
          <button onClick={handleSave}>save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏</button>
        )}
        <button onClick={deleteNote}>x</button>
      </div>
    </div>
  );
}
