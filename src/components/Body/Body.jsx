import React from "react";

function Body({ children }) {
    return (
        <div className="container">
            <div className="row">{children}</div>
        </div>
    );
}

export default Body;
