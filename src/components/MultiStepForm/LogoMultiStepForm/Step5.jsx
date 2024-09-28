import React, { useState } from 'react';

const Step5 = ({ onNext, onPrevious, previousData }) => {
    const [details, setDetails] = useState('');

    const handleInputChange = (event) => {
        setDetails(event.target.value);
    };

    const handleNext = () => {
        if (!details) {
            // Optionally handle the error if details are empty
            return;
        }
        const currentData = { details };
        const updatedData = { ...previousData, ...currentData };
        
        console.log('Step5 data:', updatedData); // Log current step data with previous data

        onNext(updatedData);
    };

    return (
        <div className="form-step5">
            <p>
                <span className="step-number">5 →</span> Could you share with us some more details?
            </p>
            <p className="subtext">Goals, budget, deadlines...</p>
            <textarea
                id="details"
                className="form-control_custom"
                name="details"
                placeholder="Type your answer here..."
                value={details}
                onChange={handleInputChange}
                rows="4"
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

export default Step5;
