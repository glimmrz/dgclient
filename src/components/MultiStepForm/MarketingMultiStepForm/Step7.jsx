import React, { useState } from 'react';

const Step7 = ({ onNext, onPrevious, previousData }) => {
    const [timeFrames, setTimeFrames] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setTimeFrames((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleNext = () => {
        onNext({ source_6: timeFrames });
        console.log('Step7 data:', {
            source_6: timeFrames,
            additional_needs: previousData.additional_needs,
            source_5: previousData.additionalInfo,
            source_4: previousData.source_4,
            company_description: previousData.company_description,
            marketing_goal: previousData.marketing_goal,
            logoType: previousData.logoType // Log Step1 data
        });
    };

    return (
        <div className="form-step7">
            <p>
                <span className="step-number">7 →</span> Time frame to complete project: This question is required.*
            </p>
            <p className="subtext">
                Choose as many as you like
            </p>
            <div className="options_5 row">
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_6[]"
                            value="1-2 Weeks"
                            checked={timeFrames.includes("1-2 Weeks")}
                            onChange={handleCheckboxChange}
                        />
                        <span>A</span> 1-2 Weeks
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_6[]"
                            value="2-3 Weeks"
                            checked={timeFrames.includes("2-3 Weeks")}
                            onChange={handleCheckboxChange}
                        />
                        <span>B</span> 2-3 Weeks
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_6[]"
                            value="4-5 Weeks"
                            checked={timeFrames.includes("4-5 Weeks")}
                            onChange={handleCheckboxChange}
                        />
                        <span>C</span> 4-5 Weeks
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_6[]"
                            value="5-6 Weeks"
                            checked={timeFrames.includes("5-6 Weeks")}
                            onChange={handleCheckboxChange}
                        />
                        <span>D</span> 5-6 Weeks
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_6[]"
                            value="7-8 Weeks"
                            checked={timeFrames.includes("7-8 Weeks")}
                            onChange={handleCheckboxChange}
                        />
                        <span>E</span> 7-8 Weeks
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_6[]"
                            value="10+ Weeks"
                            checked={timeFrames.includes("10+ Weeks")}
                            onChange={handleCheckboxChange}
                        />
                        <span>F</span> 10+ Weeks
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

export default Step7;
