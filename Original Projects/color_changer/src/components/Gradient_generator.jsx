import React, { useState } from 'react';
import styles from './style/Gradient_generator.module.css';

const GradientGenerator = () => {
  const [colors, setColors] = useState(['#ff0000', '#0000ff']); // Initial two colors
  const [direction, setDirection] = useState('to right'); // Default direction

  // Function to handle color change
  const handleColorChange = (value, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  // Function to add a new color
  const addColor = () => {
    setColors([...colors, '#ffffff']); // Add a new color (default white)
  };

  // Generate gradient style
  const gradientStyle = {
    background: `linear-gradient(${direction}, ${colors.join(', ')})`,
  };

  return (
    <div className={styles.gradientContainer}>
      {/* Display window for gradient preview */}
      <div className={styles.gradientDisplay} style={gradientStyle}></div>

      {/* Controls section */}
      <div className={styles.controls}>
        {/* Direction selector */}
        <div className={styles.directionSelector}>
          <p className={styles.controlHeading}>Direction</p>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className={styles.directionSelect}
          >
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to bottom">To Bottom</option>
            <option value="to top">To Top</option>
          </select>
        </div>

        {/* Color selection */}
        <div className={styles.colorSelected}>
          <p className={styles.controlHeading}>Colors</p>
          {colors.map((color, index) => (
            <div className={styles.colorInputOverlay}>
              <input
                key={index}
                className={styles.colorInput}
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value, index)}
              />
            </div>
          ))}
          <button className={styles.addColorBtn} onClick={addColor}>
            +
          </button>
        </div>
      </div>

      {/* Display generated CSS */}
      <div className={styles.cssStyleDisplay}>
        <p>CSS Code:</p>
        <code>{`background: linear-gradient(${direction}, ${colors.join(', ')});`}</code>
      </div>

      {/* Button section for refresh and copy functionality */}
      <div className={styles.buttonGroup}>
        <button className={`${styles.actionBtn} ${styles.refreshBtn}`} onClick={() => setColors(['#ff0000', '#0000ff'])}>
          Refresh
        </button>
        <button className={`${styles.actionBtn} ${styles.copyBtn}`} onClick={() => setColors(['#ff0000', '#0000ff'])}>
          Copy CSS Code
        </button>
      </div>
    </div>
  );
};


export default GradientGenerator;
