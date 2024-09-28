import React, { useState } from 'react';

const Step7 = ({ onNext, onPrevious, previousData }) => {
    const [selectedSources, setSelectedSources] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedSources((prevSelectedSources) => {
            if (prevSelectedSources.includes(value)) {
                return prevSelectedSources.filter(source => source !== value);
            } else {
                return [...prevSelectedSources, value];
            }
        });
    };

    const handleNext = () => {
        const currentData = { source_7: selectedSources };
        const updatedData = { ...previousData, ...currentData };

        console.log('Step7 data:', updatedData); // Log current step data with previous data

        onNext(updatedData);
    };

    return (
        <div className="form-step7">
            <p>
                <span className="step-number">7 →</span> How did you hear about us? This
                question is required.*
            </p>
            <p className="subtext">
                If you heard about us from a friend, please select "Other" and mention
                your friend's name.
            </p>
            <div className="options_5 row">
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7"
                            value="Google Search"
                            checked={selectedSources.includes('Google Search')}
                            onChange={handleCheckboxChange}
                        />
                        <span>A</span> Google Search
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7"
                            value="Banner Ad"
                            checked={selectedSources.includes('Banner Ad')}
                            onChange={handleCheckboxChange}
                        />
                        <span>B</span> Banner Ad
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7"
                            value="Newsletter"
                            checked={selectedSources.includes('Newsletter')}
                            onChange={handleCheckboxChange}
                        />
                        <span>C</span> Newsletter
                    </label>
                </div>
                <div className="col-md-3 option_5">
                    <label className="m-0">
                        <input
                            type="checkbox"
                            name="source_7"
                            value="Other"
                            checked={selectedSources.includes('Other')}
                            onChange={handleCheckboxChange}
                        />
                        <span>D</span> Other
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
