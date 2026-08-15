import React from "react";
import ReactDOM from "react-dom/client";

// JSX is HTML/XML-like syntax

// React component
const Title = () => {
    return (
        <h1 id="heading">
            namaste react from jsx
        </h1>
    );
};

// Function-based component
const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1>namaste from functional component</h1>
        </div>
    );
};

// Implicit return
const HeadingComponent2 = () => (
    <div id="container">
        <h1>namaste from functional component</h1>
    </div>
);

const HeadingComponent3 = () =>  <h1>namaste from functional component3</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />);