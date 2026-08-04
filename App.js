import React from "react";
import ReactDOM from "react-dom/client";
/*
    <div id="parent">
        <div id="child1">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
        </div> 
        <div id="child2">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
        </div>
    </div>
*/

const parent =React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ]
        )
    ]
)





const head = React.createElement(
    "h1",
    {id:"heading" , abc:"xyz"},
    "hello world from react!"
); 
console.log(head);// it will just give a object to us




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 