import React from "react";
import Accordion from "./Accordion";
// import "./style/Accordion.css";

const App = () => {
    const accordionData = [
        {
            title: "Section 1",
            content: "This is the content of section 1.",
        },
        {
            title: "Section 2",
            content: "This is the content of section 2.",
        },
        {
            title: "Section 3",
            content: "This is the content of section 3.",
        },
    ];

    return (
        <div className="App">
            <h1>React Accordion</h1>
            <Accordion items={accordionData} />
        </div>
    );
};

export default App;
