import React, { useState } from 'react';

const Step9 = ({ onNext, onPrevious, previousData }) => {
    const [source9, setSource9] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSource9((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleNext = () => {
        onNext({ source_9: source9 });
        console.log('Step7 data:', {
            source_9: source9,
            source_7: previousData.source_7,
            source_6: previousData.source_6,
            additional_needs: previousData.additional_needs,
            source_5: previousData.additionalInfo,
            source_4: previousData.source_4,
            company_description: previousData.company_description,
            marketing_goal: previousData.marketing_goal,
            logoType: previousData.logoType // Log Step1 data
        });
    };

    return (
        <div className="form-step9">
            <p>
                <span className="step-number">9 →</span> How did you hear about us? This question is required.*
            </p>
            <p className="subtext">
                If you heard about us from a friend, please select other and mention your friend's name.
            </p>
            <div className="options_5 row">
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_9[]"
                            value="Google Search"
                            checked={source9.includes("Google Search")}
                            onChange={handleCheckboxChange}
                        />
                        <span>A</span> Google Search
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_9[]"
                            value="Banner Ad"
                            checked={source9.includes("Banner Ad")}
                            onChange={handleCheckboxChange}
                        />
                        <span>B</span> Banner Ad
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_9[]"
                            value="Newsletter"
                            checked={source9.includes("Newsletter")}
                            onChange={handleCheckboxChange}
                        />
                        <span>C</span> Newsletter
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_9[]"
                            value="Other"
                            checked={source9.includes("Other")}
                            onChange={handleCheckboxChange}
                        />
                        <span>D</span> Other
                    </label>
                </div>
            </div>
            {/* Display error message if there's an error */}
            {/* <div className="text-danger">{errorMessage}</div> */}
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

export default Step9;
