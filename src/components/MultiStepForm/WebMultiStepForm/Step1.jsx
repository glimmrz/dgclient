import React, { useState } from 'react';

const Step1 = ({ onNext, onPrevious }) => {
    const [companyDescription, setCompanyDescription] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setCompanyDescription(e.target.value);
        setError(''); // Clear error message when the user starts typing
    };

    const handleNext = () => {
        if (!companyDescription.trim()) {
            setError('Please describe your company or identity.');
            return;
        }
        onNext({ company_description: companyDescription });
    };

    return (
        <div className="form-step active">
            <p><span className="step-number">1 →</span> Describe your company or identity:*</p>
            <p className="subtext">i.e. Art dealer in Switzerland</p>
            <input
                id="stape_1"
                name="company_description"
                type="text"
                placeholder="Type your answer here..."
                className="form-control_custom mb-3"
                value={companyDescription}
                onChange={handleInputChange}
                required
            />
            {error && <div className="text-danger">{error}</div>}
            <button type="button" className="next btn btn-primary" onClick={handleNext}>
                Ok
            </button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step1;
