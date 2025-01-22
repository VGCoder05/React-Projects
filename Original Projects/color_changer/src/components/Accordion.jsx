import React, { useState } from "react";
import "./style/Accordion.css";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => handleToggle(index)}
                    >
                        <h3>{item.title}</h3>
                        <span>{activeIndex === index ? "-" : "+"}</span>
                    </div>
                    
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
