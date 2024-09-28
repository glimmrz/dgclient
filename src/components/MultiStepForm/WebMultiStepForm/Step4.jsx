import React, { useState } from 'react';

const Step4 = ({ onNext, onPrevious, previousData }) => {
    const [stape4, setStape4] = useState('');
    const [error, setError] = useState('');

    const handleNext = () => {
        if (stape4.trim() === '') {
            setError('Please enter at least one website.');
            return;
        }
        onNext({ stape_4: stape4 });
        console.log('Step4 data:', {
            stape_4: stape4,
            font_selection: previousData.font_selection,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step4">
            <p><span className="step-number">4 →</span> Make a list of websites you like:*</p>
            <p className="subtext">i.e. http://www.apple.com, http://www.nike.com</p>
            <input
                id="stape_4"
                name="stape_4"
                type="text"
                placeholder="Type your answer here..."
                className="form-control_custom mb-3"
                value={stape4}
                onChange={(e) => {
                    setStape4(e.target.value);
                    setError(''); // Clear error when user starts typing
                }}
            />
            {error && <div className="text-danger">{error}</div>}
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step4;
