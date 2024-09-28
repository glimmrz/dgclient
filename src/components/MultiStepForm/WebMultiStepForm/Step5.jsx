import React, { useState } from 'react';

const Step5 = ({ onNext, onPrevious, previousData }) => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [error, setError] = useState('');

    const handleLanguageChange = (event) => {
        const { value } = event.target;
        setSelectedLanguages((prev) =>
            prev.includes(value) ? prev.filter((lang) => lang !== value) : [...prev, value]
        );
        setError(''); // Clear error when user selects a language
    };

    const handleNext = () => {
        if (selectedLanguages.length === 0) {
            setError('Please select at least one language.');
            return;
        }
        onNext({ source_5: selectedLanguages });
        console.log('Step5 data:', {
            source_5: selectedLanguages,
            stape_4: previousData.stape_4,
            font_selection: previousData.font_selection,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step5">
            <p>
                <span className="step-number">5 →</span> How many languages should your
                website support? This question is required.*
            </p>
            <p className="subtext">Choose as many as you like</p>
            <div className="options_5 row">
                {[
                    { label: 'English', value: 'English' },
                    { label: 'German', value: 'German' },
                    { label: 'French', value: 'French' },
                    { label: 'Italian', value: 'Italian' },
                    { label: 'Other', value: 'Other' },
                ].map((language) => (
                    <div key={language.value} className="col-md-3 option_5">
                        <label className="m-0">
                            <input
                                type="checkbox"
                                name="source_5[]"
                                value={language.value}
                                checked={selectedLanguages.includes(language.value)}
                                onChange={handleLanguageChange}
                            />
                            <span>{language.label.charAt(0)}</span> {language.label}
                        </label>
                    </div>
                ))}
            </div>
            {error && <div className="text-danger">{error}</div>}
            <p className="subtext">Shift + Enter to make a line break</p>
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step5;
