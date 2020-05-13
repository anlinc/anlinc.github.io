import React from "react";
import "./Resume.css";
import resume from "./img/Resume.pdf"

const PageStyle = {
    height: '100vh',
    width: 'auto',
    position: 'relative',
    // display: "inline-block"
};

const pdf = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)"
};

function Resume() {
    return (
        <div className="Resume" style={PageStyle}>
            <embed src={resume} height="85%" width="85%" style={pdf}/>
        </div>
    );
}

export default Resume;