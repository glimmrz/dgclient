import React, { useState } from 'react';

const Step3 = ({ onNext, onPrevious, previousData }) => {
    const [websites, setWebsites] = useState('');

    const handleInputChange = (event) => {
        setWebsites(event.target.value);
    };

    const handleNext = () => {
        onNext({ websites });
        console.log('Step3 data:', { websites, ...previousData });
    };

    return (
        <div className="form-step3">
            <p>
                <span className="step-number">3 →</span> List a few logos you like:
            </p>
            <p className="subtext">i.e. http://www.apple.com, http://www.nike.com</p>
            <input
                id="websites"
                name="websites"
                type="text"
                placeholder="Type your answer here..."
                className="form-control_custom mb-3"
                value={websites}
                onChange={handleInputChange}
            />
            <p className="subtext">Shift + Enter to make a line break</p>
            <button type="button" className="next btn btn-primary" onClick={handleNext}>
                Ok
            </button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step3;
