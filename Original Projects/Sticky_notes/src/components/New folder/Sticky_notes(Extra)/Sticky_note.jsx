import React, { useState } from 'react'
import './style/Sticky_note.css';


const Sticky_note = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const [visibility, setVisibility] = useState(false);

    const text = "Lorem ipsum, dolor sit"

    const date = () => {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString("en-US", options);
    };

    const handleAddingNote = () => {
        if (!heading.trim() && !content.trim()) {
            alert("Please provide a heading or content for the note.");
            return;
        }
        const newNote = { heading, content, date: date() };
        setNotes([...notes, newNote]);
        setHeading("");
        setContent("");
        setVisibility(false);
    };

    return (
        <div className="container">
            <div
                className="add-btn"
                onClick={() => {
                    setVisibility((prev) => !prev)
                }}
            >
                <p className="btn">+</p>
                <p>Add new notes</p>
            </div>

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

            {visibility && (
                <div
                    className="note-form"
                    onClick={() => setVisibility(false)} // Hide form when background is clicked
                >
                    {/* Prevent event propagation inside the form */}
                    <div
                        className="form-content"
                        onClick={(e) => e.stopPropagation()} // Stop click event from propagating
                    >  {/* Explained in image */}


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
            )}



            {/* Notes content display window */}
            {visibility && (

                <div
                    className="content-overlay"
                    onClick={() => {
                        setVisibility(false)
                    }} >

                    <div className="content-window" onClick={(e) => e.stopPropagation()}>
                        <div className="heading">
                            <h2>Heading</h2>
                            <small>January 12, 2025</small>
                            <hr />
                        </div>
                        <textarea
                            value={text}
                        />
                        {visibility && (
                            <button className='save_btn'>Save</button>
                        )}
                    </div>

                </div>
            )}


        </div >
    );
};

export default Sticky_note