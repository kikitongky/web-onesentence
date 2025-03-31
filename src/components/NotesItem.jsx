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
  const [showModal, setShowModal] = useState(false); // state for modal

  /**
   * Saves the edited note and exits edit mode.
   */
  const handleSave = () => {
    console.log("handleSave called. note.id:", note.id, "newText:", newText);
    editNote(newText);
    setIsEditing(false);
  };

  /** FUnction Handle Delete
   *
   */
  const handleDelete = () => {
    deleteNote(note.id); // run deleteNote from props
    setShowModal(false); // Close Modal
  };

  return (
    <div className="flex flex-col ring-1 mx-9 items-start px-2 py-3.5 rounded shadow-xl justify-between">
      {/* Display note date */}
      <p className="text-[12px] mb-4 text-gray-600">Date: {note.date}</p>

      {/* Toggle between text view and editable textarea */}
      {isEditing ? (
        <textarea
          value={newText}
          id="note-item"
          name="note-text"
          onChange={(e) => {
            console.log(e.target.value);
            setNewText(e.target.value);
          }}
          className="w-full min-h-[80px] ring-1 ring-gray-400 rounded p-1.5"
        />
      ) : (
        <p
          onClick={() => setIsEditing(true)}
          className="w-full min-h-[80px] ring-1 ring-gray-400 rounded p-1.5 cursor-pointer whitespace-pre-wrap"
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
            <MdOutlineSave className="text-xl text-gray-800 transition duration-150 rounded hover:bg-gray-900 hover:text-gray-100" />
          </button>

          {/* Delete button */}
          <button onClick={() => setShowModal(true)}>
            <MdOutlineDelete className="text-xl text-gray-800 transition duration-150 rounded hover:bg-gray-900 hover:text-gray-100" />
          </button>
        </div>

        {/** Modal Confirmation  */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
            <div className="bg-white rounded p-4 text-center">
              <p className="mb-4 text-gray-900 text-lg font-bold tracking-tight">
                Ingin Menghapus?
              </p>
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="py-1 px-2.5 bg-gray-900 text-white text-sm rounded transition-colors hover:bg-gray-950"
                >
                  Batalkan
                </button>
                <button
                  onClick={handleDelete}
                  className="py-1 px-2.5 bg-red-800 text-white text-sm rounded flex justify-center items-center gap-0.5 transition-colors hover:bg-red-700"
                >
                  <MdOutlineDelete /> Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
