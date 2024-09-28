import React, { useState } from 'react';

const Step6 = ({ onNext, onPrevious, previousData }) => {
    const [selectedTimeFrames, setSelectedTimeFrames] = useState([]);
    const [error, setError] = useState('');

    const handleTimeFrameChange = (event) => {
        const { value } = event.target;
        setSelectedTimeFrames((prev) =>
            prev.includes(value) ? prev.filter((timeFrame) => timeFrame !== value) : [...prev, value]
        );
        setError(''); // Clear error when user selects a time frame
    };

    const handleNext = () => {
        if (selectedTimeFrames.length === 0) {
            setError('Please select at least one time frame.');
            return;
        }
        onNext({ source_6: selectedTimeFrames });
        console.log('Step6 data:', {
            source_6: selectedTimeFrames,
            source_5: previousData.source_5,
            stape_4: previousData.stape_4,
            font_selection: previousData.font_selection,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step6">
            <p>
                <span className="step-number">6 →</span> Time frame to complete
                project: This question is required.*
            </p>
            <p className="subtext">Choose as many as you like</p>
            <div className="options_5 row">
                {[
                    { label: '1-2 Weeks', value: '1-2 Weeks' },
                    { label: '2-3 Weeks', value: '2-3 Weeks' },
                    { label: '4-5 Weeks', value: '4-5 Weeks' },
                    { label: '5-6 Weeks', value: '5-6 Weeks' },
                    { label: '7-8 Weeks', value: '7-8 Weeks' },
                    { label: '10+ Weeks', value: '10+ Weeks' },
                ].map((timeFrame) => (
                    <div key={timeFrame.value} className="col-md-3 option_5">
                        <label className="m-0">
                            <input
                                type="checkbox"
                                name="source_6[]"
                                value={timeFrame.value}
                                checked={selectedTimeFrames.includes(timeFrame.value)}
                                onChange={handleTimeFrameChange}
                            />
                            <span>{timeFrame.label.charAt(0)}</span> {timeFrame.label}
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

export default Step6;
