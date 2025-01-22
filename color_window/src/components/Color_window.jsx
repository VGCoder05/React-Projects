import React, { useState } from 'react'
import './style/Color_window.css'

const Color_window = () => {
  // State to store the background color
  const [color, setColor] = useState("#ffffff");
  // State to store the text value
  const [text, setText] = useState("")

  function handle_text(e) {
    setText(e.target.value)
    setColor(e.target.value)
  }
  function handle_Color(e) {
    setText(e.target.value)
    setColor(e.target.value)
  }

  return (
    <div className='container'>
      {/* Display Window for selected color */}
      <div className="display-window" style={{background:`${color}`}}></div>

      {/* Input fields for color selection and display */}
      <div className="color-value">
        <input
          type="text"
          value={text}
          onChange={handle_text}
          placeholder='Enter a color code'
        />

        <input
          type="color"
          onChange={handle_Color}
          value={color}
        />

      </div>
    </div>
  )
}

export default Color_window