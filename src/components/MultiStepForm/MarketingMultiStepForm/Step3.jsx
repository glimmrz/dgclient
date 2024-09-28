import React, { useState } from 'react';

const Step3 = ({ onNext, onPrevious, previousData }) => {
    const [companyDescription, setCompanyDescription] = useState('');

    const handleNext = () => {
        if (companyDescription.trim() === '') {
            alert('Please enter a description of your company or identity.');
        } else {
            onNext({ company_description: companyDescription });
            console.log('Step3 data:', {
                company_description: companyDescription,
                marketing_goal: previousData.marketing_goal,
                logoType: previousData.logoType // Log Step1 data
            });
        }
    };

    return (
        <div className="form-step3">
            <p>
                <span className="step-number">3 →</span> Describe your company or identity: This question is required.*
            </p>
            <p className="subtext">i.e. Art dealer from Switzerland</p>
            <input
                type="text"
                id="company_description"
                className="form-control_custom"
                name="company_description"
                placeholder="Type your answer here..."
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
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

export default Step3;
