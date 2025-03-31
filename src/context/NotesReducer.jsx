import { v4 as uuidv4 } from "uuid";

/**
 * Notes reducer function to manage state updates based on dispatched actions.
 * It handles adding, deleting, editing, and loading notes.
 *
 * @param {Array} state - The current state of notes.
 * @param {Object} action - The action object containing type and payload.
 * @returns {Array} - The updated state after applying the action.
 */
export const notesReducer = (state, action) => {
  const currentDate = new Date().toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  switch (action.type) {
    /**
     * Adds a new note to the state.
     * Each note contains a unique ID, timestamp, and text.
     */
    case "ADD_NOTES":
      return [
        ...state,
        {
          id: uuidv4(), // Generate a unique ID for the note
          date: currentDate, // Store the current timestamp
          text: action.payload, // The note content
        },
      ];

    /**
     * Deletes a note by filtering out the note with the given ID.
     * @param {object} note - the note data
     */
    case "DELETE_NOTES":
      return state.filter((note) => note.id !== action.payload);

    /**
     * Edits an existing note by updating its text while keeping other properties unchanged.
     */
    case "EDIT_NOTES":
      console.log("Reducer EDIT_NOTES received:", action.payload);
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, text: action.payload.newText }
          : note
      );

    /**
     * Loads an array of notes into the state.
     * Typically used to initialize state from localStorage or an API.
     */
    case "LOAD_NOTES":
      return action.payload;

    /**
     * Returns the current state if the action type is unrecognized.
     */
    default:
      return state;
  }
};
