import React, { useState } from 'react';

const Step2 = ({ onNext, onPrevious, previousData }) => {
    const [webPages, setWebPages] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setWebPages(e.target.value);
        setError(''); // Clear the error when user starts typing
    };

    const handleNext = () => {
        if (webPages.trim() === '') {
            setError('Please list the buttons/pages of your future website.');
            return;
        }
        onNext({ web_pages: webPages });
        console.log('Step2 data:', {
            web_pages: webPages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step2">
            <p><span className="step-number">2 →</span> List the buttons / pages of your future website:</p>
            <p className="subtext">i.e. Home, About, Service, Gallery, Contact</p>
            <input
                type="text"
                id="web_pages"
                className="form-control_custom"
                name="web_pages"
                placeholder="Type your answer here..."
                value={webPages}
                onChange={handleInputChange}
            />
            {error && <div className="text-danger">{error}</div>}
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step2;
