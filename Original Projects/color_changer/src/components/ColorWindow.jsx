import React, { useState } from 'react';
import './style/ColorWindow.css'; // Importing external CSS for styling

const ColorWindow = () => {
    // State to store the background color
    const [color, setColor] = useState("#ffffff");

    // State to store the text value
    const [text, setText] = useState("#ffffff");

    // Handles color input changes (color picker)
    function handle_color(e) {
        console.log(e.target.value); // Log the selected color
        setColor(e.target.value); // Update background color
        setText(e.target.value); // Sync text input with the selected color
    }

    // Handles text input changes (manual color input)
    function handle_text(e) {
        console.log(e.target.value); // Log the entered text
        setText(e.target.value); // Update text input
        setColor(e.target.value); // Sync background color with text input
    }

    return (
        <div className='container'>
            {/* Display area for the selected color */}
            <div className="display_window" style={{ backgroundColor: `${color}` }}></div>

            {/* Input fields for color selection and display */}
            <div className="color_value">
                <input
                    type="text"
                    onChange={handle_text}
                    value={text}
                    placeholder="Enter a color code"
                />
                <input
                    type="color"
                    onChange={handle_color}
                    value={color}
                />
            </div>
        </div>
    );
};

export default ColorWindow;
