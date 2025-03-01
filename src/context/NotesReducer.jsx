import { v4 as uuidv4 } from "uuid";

export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return [
        ...state,
        {
          id: uuidv4(),
          date: Date.now(),
          text: action.payload,
        },
      ];

    case "DELETE_NOTES":
      return state.filter((note) => note.id !== action.payload);

    case "EDIT_NOTES":
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, text: action.payload.newText }
          : note
      );

    case "LOAD_NOTES":
      return action.payload;

    default:
      return state;
  }
};
