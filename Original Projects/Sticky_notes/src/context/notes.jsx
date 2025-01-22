import React, { createContext, useState } from "react";

// Create a context
export const NoteContext = createContext();

// Context Provider component
const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");

    // Function to add a new note
    const addNote = () => {
        const newNote = {
            id: Date.now(),
            heading,
            content,
            date: new Date().toLocaleDateString(),
        };
        setNotes([...notes, newNote]);
        setHeading("");
        setContent("");
    };

    // Provide state and functions to child components
    return (
        <NoteContext.Provider value={{ notes, heading, content, setHeading, setContent, addNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteProvider;




