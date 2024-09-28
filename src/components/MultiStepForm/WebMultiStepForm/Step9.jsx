import React, { useState } from 'react';

const Step9 = ({ onNext, onPrevious, previousData }) => {
    const [selectedSources, setSelectedSources] = useState([]);

    const sourceOptions = [
        { value: 'Google Search', label: 'Google Search' },
        { value: 'Banner Ad', label: 'Banner Ad' },
        { value: 'Newsletter', label: 'Newsletter' },
        { value: 'Other', label: 'Other' },
    ];

    const handleSourceClick = (value) => {
        setSelectedSources((prev) =>
            prev.includes(value) ? prev.filter((source) => source !== value) : [...prev, value]
        );
    };

    const handleNext = () => {
        onNext({ source_9: selectedSources });
        console.log('Step9 data:', {
            source_9: selectedSources,
            additional_needs: previousData.additional_needs,
            source_7: previousData.selectedBudgets ,
            source_6: previousData.source_6,
            source_5: previousData.source_5,
            stape_4: previousData.stape_4,
            font_selection: previousData.font_selection,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step9">
            <p>
                <span className="step-number">9 →</span> How did you hear about us? This question is required.*
            </p>
            <p className="subtext">
                If you heard about us from a friend, please select "Other" and mention your friend's name.
            </p>
            <div className="options_5 row">
                {sourceOptions.map((source) => (
                    <div key={source.value} className="col-md-3 option_5">
                        <label className="m-0">
                            <input
                                type="checkbox"
                                name="source_9[]"
                                value={source.value}
                                checked={selectedSources.includes(source.value)}
                                onChange={() => handleSourceClick(source.value)}
                            />
                            <span>{source.label[0]}</span> {source.label}
                        </label>
                    </div>
                ))}
            </div>
            <p className="subtext">Shift + Enter to make a line break</p>
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step9;
