import { useState } from "react";
import { CiCalendar } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
export default function NotesForm({ addNote, inputRef }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;
    addNote(text);
    setText("");
  }

  const currentDate = new Date().toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <form onSubmit={handleSubmit} className="mx-3.5 flex flex-col gap-2">
      <p className="text-gray-600 my-2 flex flex-initial items-center gap-1">
        <CiCalendar />
        {currentDate}
      </p>

      <textarea
        ref={inputRef}
        type="text"
        placeholder="Tulis Catatan"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="ring-1 mr-1.5 rounded py-1 px-1.5 w-full md:w-2xl"
      />
      <button className="bg-gray-900 text-white py-1 px-2.5 font-bold rounded w-24">
        Catat
      </button>
    </form>
  );
}
