import React from 'react';
import resume from "../../assets/files/resume-sample.pdf";

function Resume() {
    
    return (
        <div>
            <div className="text-light w-50 mx-auto text-center my-5">
                <h1 className="my-4">Download my resume below!</h1>
                <a href={resume}><button className="btn submit text-light" download="Sample Resume">Download</button></a>
            </div>
        </div>
    )
}

export default Resume;