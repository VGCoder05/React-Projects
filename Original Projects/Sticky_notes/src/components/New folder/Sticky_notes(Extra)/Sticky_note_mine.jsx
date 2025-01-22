import React, { useState } from 'react';
import './style/Sticky_note.css';

const Sticky_note = () => {
    const [heading, setHeading] = useState(""); // State for the note heading
    const [content, setContent] = useState(""); // State for the note content
    const [notes, setNotes] = useState([]); // State for storing all notes
    const [visibility, setVisibility] = useState(false); // State for storing all notes

    // Function to format the current date
    const date = () => {
        const currentDate = new Date("2025-01-10");
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString("en-US", options);
    };

    // Function to handle adding a new note
    const handleAddingNote = () => {
        const newNote = {
            heading,
            content,
            date: date(),
        };
        setNotes([...notes, newNote]); // Update the notes array
        setHeading(""); // Reset heading input
        setContent(""); // Reset content input
    };

    function display_none() {
        console.log(visibility)
        setVisibility((prev) => !prev);
    }

    return (
        <div className="container">
            {/* Button to add a new note */}
            <div
                className="add-btn"
                onClick={()=>{
                    handleAddingNote();
                    display_none();
                }}
            >
                <p className="btn">+</p>
                <p>Add new notes</p>
            </div>

            {/* Display each note */}
            {notes.map((note, index) => (
                <div className="note" key={index}>
                    <h3 className="note-heading">{note.heading || "No Heading"}</h3>
                    <pre className="note-content">{note.content || "No Content"}</pre>
                    <hr />
                    <div className="note-details">
                        <p className="note-date">{note.date}</p>
                        <button className="note-option">Options</button>
                    </div>
                </div>
            ))}

            {/* Form to create a new note */}
            <div className="note-form" style={{ visibility: `${visibility ? "visible" : "hidden"}` }} onClick={display_none}>
                <div>
                    <div className="form-group">
                        <label htmlFor="note-heading" className="form-label">Heading</label>
                        <input
                            id="note-heading"
                            type="text"
                            className="form-input"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            placeholder="Enter heading"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="note-content" className="form-label">Content</label>
                        <textarea
                            id="note-content"
                            className="form-textarea"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter content"
                        />
                    </div>
                    <button className="form-submit" onClick={handleAddingNote}>ADD</button>
                </div>
            </div>
        </div>
    );
};

export default Sticky_note;
