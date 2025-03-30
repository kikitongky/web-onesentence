/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineDelete, MdOutlineSave } from "react-icons/md";

/**
 * Component representing a single note item.
 * Users can view, edit, and delete notes.
 *
 * @param {Object} props - Component props
 * @param {Object} props.note - The note data (text and date)
 * @param {Function} props.deleteNote - Function to delete the note
 * @param {Function} props.editNote - Function to edit the note
 */
export default function NotesItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false); // Tracks if the note is in edit mode
  const [newText, setNewText] = useState(note.text); // Stores the updated note text

  /**
   * Saves the edited note and exits edit mode.
   */
  const handleSave = () => {
    editNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col ring-1 mx-9 items-start px-2 py-3.5 rounded shadow-xl justify-between">
      {/* Display note date */}
      <p className="text-[12px] mb-4 text-gray-600">Date: {note.date}</p>

      {/* Toggle between text view and editable textarea */}
      {isEditing ? (
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-full min-h-[80px] ring-1 ring-gray-400 rounded p-0.5"
        />
      ) : (
        <p
          onClick={() => setIsEditing(true)}
          className="w-full min-h-[80px] ring-1 ring-gray-400 rounded p-0.5 cursor-pointer whitespace-pre-wrap"
        >
          {newText}
        </p>
      )}

      {/* Edit and delete buttons: Initially hidden, appear in edit mode */}
      <div
        className={`transition-opacity duration-150 ${
          isEditing
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex gap-1 mt-2">
          {/* Save button */}
          <button onClick={handleSave}>
            <MdOutlineSave />
          </button>

          {/* Delete button */}
          <button onClick={() => deleteNote(note.id)}>
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
