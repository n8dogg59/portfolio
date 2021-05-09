import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../../assets/project-images/resume-schroeder.pdf"

// A pdf of the resume shows up along with a link where the user can download that pdf
function Resume(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { pdf } = props;

    return (
        <div>
            <div className="bottom-spacing">
                <a href={pdf} download>
                    <h4>Download my Resume</h4>
                </a>
            </div>
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}

export default Resume;