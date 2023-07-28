import React, { useState } from 'react'
import './css/DragDrop.css'

const DragDrop = () => {
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleFiles(event.dataTransfer.files);
    };

    const handleFileSelect = (event) => {
        handleFiles(event.target.files);
    };

    const handleFiles = (files) => {
        setLoading(true);
        setUploaded(false);
        setErrorMessage('');

        const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (files && files.length > 0) {
            const file = files[0];
            if (validFileTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                    setLoading(false);
                    setUploaded(true);
                };
                reader.readAsDataURL(file);
            } else {
                setLoading(false);
                setErrorMessage('Only PDF and DOC files are allowed.');
            }
        } else {
            setLoading(false);
            setErrorMessage('No file selected.');
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    // ----------------------to handle drag and drop ----------------------------//


    return (
        <div>
            <div className="file-upload-container">
                <label
                    className={`file-dropzone ${loading ? 'loading' : ''} ${uploaded ? 'uploaded' : ''} ${errorMessage ? 'error' : ''}`}
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                >
                    <input type="file" onChange={handleFileSelect} />

                    <i className="fa-solid fa-arrow-up-from-bracket" />
                    <h1>Drag Files to upload</h1>
                    <p>or</p>
                    <div>Browse files</div>
                    <p>Max files size: <span>50MB</span> </p>
                    <p>Supported file types <span>PDF / DOC</span></p>

                </label>
                    <div className='dragdrop__message'>

                        {loading && <div className="loading-indicator">Loading...</div>}
                        {uploaded && <div className="uploaded-message">File uploaded!</div>}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
            </div>
        </div>
    )
}

export default DragDrop