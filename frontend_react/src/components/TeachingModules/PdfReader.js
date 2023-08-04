
import React, { useState } from 'react';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './Sample.scss';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
};

export default function PdfReader() {
    const [file, setFile] = useState('../pdf/Suffixes-Chart.pdf');
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div className="Example">
            <header>
                <div className="Example__container__load">
                    {/* <label htmlFor="file">Load from file:</label>{' '} */}
                 <label className='styleInputFile'><input onChange={onFileChange} type="file" />Choose File</label> 
                </div>
            </header>
            <div className="Example__container">

                <div className="Example__container__document">
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}