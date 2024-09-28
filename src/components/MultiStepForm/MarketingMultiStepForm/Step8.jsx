import React, { useState } from 'react';

const Step8 = ({ onNext, onPrevious, previousData }) => {
    const [budgetRanges, setBudgetRanges] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setBudgetRanges((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleNext = () => {
        onNext({ source_7: budgetRanges });
        console.log('Step7 data:', {
            source_7: budgetRanges,
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
        <div className="form-step8">
            <p>
                <span className="step-number">8 →</span> What is your budget for this project: This question is required.*
            </p>
            <p className="subtext">
                How much do you plan to dedicate to this project? If you're unsure, please mention a rough figure.
            </p>
            <div className="options_5 row">
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7[]"
                            value="5'00-1'000"
                            checked={budgetRanges.includes("5'00-1'000")}
                            onChange={handleCheckboxChange}
                        />
                        <span>A</span> 5'00-1'000
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7[]"
                            value="1'000-3'000"
                            checked={budgetRanges.includes("1'000-3'000")}
                            onChange={handleCheckboxChange}
                        />
                        <span>B</span> 1'000-3'000
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7[]"
                            value="3'000-5'000"
                            checked={budgetRanges.includes("3'000-5'000")}
                            onChange={handleCheckboxChange}
                        />
                        <span>C</span> 3'000-5'000
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7[]"
                            value="5'000-7'000"
                            checked={budgetRanges.includes("5'000-7'000")}
                            onChange={handleCheckboxChange}
                        />
                        <span>D</span> 5'000-7'000
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7[]"
                            value="7'000+"
                            checked={budgetRanges.includes("7'000+")}
                            onChange={handleCheckboxChange}
                        />
                        <span>E</span> 7'000+
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

export default Step8;
