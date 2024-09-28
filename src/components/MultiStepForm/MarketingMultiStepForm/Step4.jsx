import React, { useState } from 'react';

const Step4 = ({ onNext, onPrevious, previousData }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (value) => {
        setSelectedOptions((prevOptions) =>
            prevOptions.includes(value)
                ? prevOptions.filter(option => option !== value)
                : [...prevOptions, value]
        );
    };

    const handleNext = () => {
        if (selectedOptions.length === 0) {
            alert('Please select an option.');
        } else {
            onNext({ source_4: selectedOptions });
            console.log('Step4 data:', {
                source_4: selectedOptions,
                company_description: previousData.company_description,
                marketing_goal: previousData.marketing_goal,
                logoType: previousData.logoType // Log Step1 data
            });
        }
    };

    return (
        <div className="form-step4">
            <p>
                <span className="step-number">4 →</span> Would your online marketing campaign require us to maintain or
                deliver content on a regular basis? This question is required.*
            </p>
            <p className="subtext">
                i.e. Post daily on Facebook in your name, send out monthly newsletters in your name, etc...
            </p>
            <div className="options_5 row">
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_4[]"
                            value="Yes"
                            checked={selectedOptions.includes("Yes")}
                            onChange={() => handleCheckboxChange("Yes")}
                        />
                        <span>Y</span> Yes
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_4[]"
                            value="No"
                            checked={selectedOptions.includes("No")}
                            onChange={() => handleCheckboxChange("No")}
                        />
                        <span>N</span> No
                    </label>
                </div>
            </div>
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

export default Step4;
