import React, { useState } from 'react';

const Step4 = ({ onNext, onPrevious, previousData }) => {
    const [companyDescription, setCompanyDescription] = useState('');

    const handleInputChange = (event) => {
        setCompanyDescription(event.target.value);
    };

    const handleNext = () => {
        if (!companyDescription) {
            // Optionally handle the error if company description is empty
            return;
        }
        const currentData = { companyDescription };
        const updatedData = { ...previousData, ...currentData };
        
        console.log('Step4 data:', updatedData); // Log current step data with previous data

        onNext(updatedData);
    };

    return (
        <div className="form-step4">
            <p>
                <span className="step-number">4 →</span> Describe your company or identity:
            </p>
            <p className="subtext">i.e. Art dealer in Switzerland</p>
            <input
                type="text"
                id="company_description"
                className="form-control_custom"
                name="company_description"
                placeholder="Type your answer here..."
                value={companyDescription}
                onChange={handleInputChange}
            />
            <button type="button" className="next btn btn-primary" onClick={handleNext}>
                Ok
            </button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step4;
