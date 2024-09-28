import React, { useState } from 'react';

const Step5 = ({ onNext, onPrevious, previousData }) => {
    const [additionalInfo, setAdditionalInfo] = useState("");

    const handleChange = (event) => {
        setAdditionalInfo(event.target.value);
    };

    const handleNext = () => {
        onNext({ source_5: additionalInfo });
        console.log('Step5 data:', {
            source_5: additionalInfo,
            source_4: previousData.source_4,
            company_description: previousData.company_description,
            marketing_goal: previousData.marketing_goal,
            logoType: previousData.logoType // Log Step1 data
        });
    };

    return (
        <div className="form-step5">
            <p>
                <span className="step-number">5 →</span> Additional Information (Optional):
            </p>
            <p className="subtext">i.e. Home, About, Service, Gallery, Contact</p>
            <input
                type="text"
                id="source_5"
                className="form-control_custom"
                name="source_5"
                placeholder="Type your answer here..."
                value={additionalInfo}
                onChange={handleChange}
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

export default Step5;
